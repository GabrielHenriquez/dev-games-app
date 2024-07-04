import { useFavorites } from '@hooks/useFavorites';
import { useGetAllFavorites } from '@hooks/useGetAllFavorites';
import { useGetGamesByCategory } from '@hooks/useGetGamesByCategory';
import { useGetGamesBySearch } from '@hooks/useGetGamesBySearch';
import { useLocalSearchParams } from 'expo-router';
import { DataTypeScreen } from './model';
import { UseQueryResult } from '@tanstack/react-query';
import { IGame, IGameDetails } from '@services/games_services_models';

export const useGamesViewModel = () => {
  const { param: PARAM, screenName: DATA_TYPE_SCREEN, genreName: GENRE } = useLocalSearchParams();
  const { favorites } = useFavorites();

  const HOOKS = {
    Favorites: () => useGetAllFavorites(),
    Search: () => useGetGamesBySearch(PARAM as string),
    Genre: () => useGetGamesByCategory(PARAM as string),
  };

  const getHookQueryByScreen = (
    screen: DataTypeScreen
  ): UseQueryResult<IGame[] | IGameDetails[]> => {
    switch (screen) {
      case 'Search':
        return HOOKS.Search();
      case 'Favorites':
        return HOOKS.Favorites();
      case 'Genre':
        return HOOKS.Genre();
      default:
        throw new Error('Invalid Screen');
    }
  };

  const { data, isLoading, isRefetching } = getHookQueryByScreen(
    DATA_TYPE_SCREEN as DataTypeScreen
  );

  return {
    GAME: data,
    isLoading,
    isRefetching,
    favorites,
    GENRE,
    DATA_TYPE_SCREEN,
  };
};

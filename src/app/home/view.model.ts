import { useGetAllCategories } from '@hooks/useGetAllCategories';
import { useGetAllGames } from '@hooks/useGetAllGames';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export const useHomeViewModel = () => {
  const { push } = useRouter();
  const [valueText, setValueText] = useState('');
  const { data: CATEGORIES, isLoading: LOADING_CATEGORIES } = useGetAllCategories();
  const { data: GAMES, isLoading: LOADING_ALL_GAMES } = useGetAllGames('40');

  const navigateGamesBySearch = () => {
    if (!valueText) return;
    push(`/Games/param=${valueText}?screenName=Search`);
    setTimeout(() => setValueText(''), 500);
  };

  const navigateFavorites = () => {
    push(`/Games/param?screenName=Favorites`);
  };

  return {
    navigateFavorites,
    navigateGamesBySearch,
    setValueText,
    valueText,
    CATEGORIES,
    GAMES,
    LOADING_ALL_GAMES,
    LOADING_CATEGORIES,
  };
};

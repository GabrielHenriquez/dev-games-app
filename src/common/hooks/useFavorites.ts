import { IGameDetails } from '@services/games_services';
import { useFavoritesStore } from '@stores/favorites_store';

export const useFavorites = () => {
  const { addToFavorites, favorites, removeFromFavorites } = useFavoritesStore();
  const isAlreadyFavorited = (id: number) => {
    return favorites.some((game: IGameDetails) => game?.id === id);
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isAlreadyFavorited,
  };
};

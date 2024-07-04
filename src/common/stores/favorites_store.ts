import { IGameDetails } from '@services/games_services_models';
import { storage } from 'storage/mmkv';
import { create } from 'zustand';

type StateProps = {
  favorites: IGameDetails[];
  addToFavorites: (game: IGameDetails) => void;
  removeFromFavorites: (game: IGameDetails) => void;
};

function initializeState(): IGameDetails[] {
  const STRING_FAVORITES = storage.getString('favorites');
  if (STRING_FAVORITES) {
    const FAVORITES = JSON.parse(STRING_FAVORITES);
    return FAVORITES;
  }

  return [];
}

function setFavoriteInStorage(UPDATED_STATE: IGameDetails[]) {
  storage.set('favorites', JSON.stringify(UPDATED_STATE));
  return UPDATED_STATE;
}

export const useFavoritesStore = create<StateProps>((set) => ({
  favorites: initializeState(),
  addToFavorites: (game) => {
    set((state) => {
      const UPDATED_STATE = [...state.favorites, game];
      return { favorites: setFavoriteInStorage(UPDATED_STATE) };
    });
  },
  removeFromFavorites: (game) => {
    set((state) => {
      const UPDATED_STATE = state.favorites.filter((favGame) => favGame?.id !== game?.id);
      return { favorites: setFavoriteInStorage(UPDATED_STATE) };
    });
  },
}));

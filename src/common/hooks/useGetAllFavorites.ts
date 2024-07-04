import { useQuery } from '@tanstack/react-query';
import { IGameDetails } from '@services/games_services_models';
import { storage } from 'storage/mmkv';

export const useGetAllFavorites = () => {
  const query = useQuery<IGameDetails[]>({
    queryKey: ['getAllFavorites'],
    queryFn: () => {
      const RESULT_STRING = storage.getString('favorites');
      if (RESULT_STRING) {
        const RESULT = JSON.parse(RESULT_STRING);
        return RESULT.reverse();
      } else {
        return [];
      }
    },
  });

  return query;
};

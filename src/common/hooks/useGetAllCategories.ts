import { useQuery } from '@tanstack/react-query';
import { ICategory } from 'common/services/game_services/models';
import GameServices from 'common/services/game_services';

export const useGetAllCategories = () => {
  const query = useQuery<ICategory[]>({
    queryKey: ['getAllCategories'],
    queryFn: () => GameServices.getAllCategories(),
    staleTime: 10000 * 60 * 5,
  });
  return query;
};

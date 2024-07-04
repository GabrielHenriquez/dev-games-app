import { useQuery } from '@tanstack/react-query';
import { ICategory } from '@services/games_services_models';
import GameServices from '@services/games_service';

export const useGetAllCategories = () => {
  const query = useQuery<ICategory[]>({
    queryKey: ['getAllCategories'],
    queryFn: () => GameServices.getAllCategories(),
    staleTime: 10000 * 60 * 5,
  });
  return query;
};

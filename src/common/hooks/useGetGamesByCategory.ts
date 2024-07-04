import { useQuery } from '@tanstack/react-query';
import { IGame } from '@services/games_services';
import GameServices from '@services/games_service_models';

export const useGetGamesByCategory = (genres: string) => {
  const query = useQuery<IGame[]>({
    queryKey: ['getAllGamesByCategory', genres],
    queryFn: () => GameServices.getGamesByCategory(genres),
  });
  return query;
};

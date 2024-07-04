import { useQuery } from '@tanstack/react-query';
import { IGame } from '@services/games_services';
import GameServices from '@services/games_service_models';

export const useGetGamesBySearch = (search: string) => {
  const query = useQuery<IGame[]>({
    queryKey: ['getGamesBySearch', search],
    queryFn: () => GameServices.searchGameByName(search),
  });
  return query;
};

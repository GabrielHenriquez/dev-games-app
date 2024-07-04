import { useQuery } from '@tanstack/react-query';
import { IGame } from '@services/games_services_models';
import GameServices from '@services/games_service';

export const useGetAllGames = (page_size: string = '0') => {
  const query = useQuery<IGame[]>({
    queryKey: ['getAllGames'],
    queryFn: () => GameServices.getAllGames(page_size),
    staleTime: 10000 * 60 * 5,
  });
  return query;
};

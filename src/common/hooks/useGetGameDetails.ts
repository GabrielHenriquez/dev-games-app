import { useQuery } from '@tanstack/react-query';
import { IGameDetails } from '@services/games_services_models';
import GameServices from '@services/games_service';

export const useGetGameDetails = (slug: string) => {
  const query = useQuery<IGameDetails>({
    queryKey: ['getGameDetails', slug],
    queryFn: () => GameServices.getGameDetails(slug),
  });
  return query;
};

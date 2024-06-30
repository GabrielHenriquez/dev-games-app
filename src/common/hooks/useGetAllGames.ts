import { useQuery } from "@tanstack/react-query";
import { IGame } from "common/services/game_services/models";
import GameServices from "common/services/game_services";

export const useAllGames = (page_size: string = "0") => {
  const query = useQuery<IGame[]>({
    queryKey: ["getAllGames"],
    queryFn: () => GameServices.getAllGames(page_size),
    staleTime: 10000 * 60 * 5,
  });
  return query;
};

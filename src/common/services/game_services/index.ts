import API from "@config/api";
import { IGame } from "./models";

class GameServices {
  static async getAllGames(page_size?: string): Promise<IGame[]> {
    const { data } = await API.get("/games", {
      params: { page_size: page_size ?? "0" },
    });

    return data;
  }
}

export default GameServices;

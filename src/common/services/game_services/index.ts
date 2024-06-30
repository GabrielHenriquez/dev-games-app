import API from "@config/api";
import { ICategory, IGame, IGameDetails } from "./models";

class GameServices {
  private static async fetchGames(params?: any): Promise<IGame[]> {
    const { data } = await API.get("games", {
      params,
    });
    return data?.results || [];
  }
  static async getAllGames(page_size: string = "0") {
    return this.fetchGames({ page_size });
  }

  static async searchGameByName(search: string) {
    return this.fetchGames({ search });
  }

  static async getGamesByCategory(genres: string) {
    return this.fetchGames({ genres });
  }

  static async getAllCategories(): Promise<ICategory[]> {
    const { data } = await API.get("genres");
    return data?.results || [];
  }

  static async getGameDetails(slug: string): Promise<IGameDetails> {
    const { data } = await API.get(`games/${slug}`);
    return data || {};
  }
}

export default GameServices;

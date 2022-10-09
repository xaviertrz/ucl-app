import { Match, Standings } from "./types";

const season = new Date().getFullYear();
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
  },
};

export const api = {
  getFinishedMatches: async (): Promise<Match[]> => {
    try {
      const response  = await fetch(
        `https://v3.football.api-sports.io/fixtures?league=${
          import.meta.env.VITE_LEAGUE_ID
        }&season=${season}&status=FT`,
        options
      );
      const data = await response.json();
      return data.response;
    } catch (error) {
      throw(error);
    }
  },
  getStandings: async (): Promise<Standings[][]> => {
    try {
      const response = await fetch(
        `https://v3.football.api-sports.io/standings?league=${
          import.meta.env.VITE_LEAGUE_ID
        }&season=${season}`,
        options
      );
      const data = await response.json();
      return data.response;
    } catch (error) {
      throw(error);
    }
  }
};

import { Match, Standings, Statistics } from "./types";

const season = new Date().getFullYear();
const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
  },
};

export const api = {
  getMatches: async (status: string): Promise<Match[]> => {
    try {
      const response = await fetch(
        `https://v3.football.api-sports.io/fixtures?league=${
          import.meta.env.VITE_LEAGUE_ID
        }&season=${season}&status=${status}&timezone=${browserTimezone}`,
        options
      );
      const data = await response.json();
      return data.response;
    } catch (error) {
      throw error;
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
      throw error;
    }
  },
  getLiveMatches: async (): Promise<Match[]> => {
    try {
      const response = await fetch(
        `https://v3.football.api-sports.io/fixtures?league=${
          import.meta.env.VITE_LEAGUE_ID
        }&season=${season}&live=all&timezone=${browserTimezone}`,
        options
      );
      const data = await response.json();
      return data.response;
    } catch (error) {
      throw error;
    }
  },
};

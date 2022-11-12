import { Match, RawLeagueStandings, RawLeague, Season } from "./types";

const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
  },
};

export async function getLeague(): Promise<RawLeague[]> {
  try {
    const response = await fetch(
      `https://v3.football.api-sports.io/leagues?id=${
        import.meta.env.VITE_LEAGUE_ID
      }`,
      options
    );
    const data = await response.json();
    return data.response;
  } catch (error) {
    throw error;
  }
}

function getCurrentSeason(seasons: Season[]): number | undefined {
  const currentSeason = seasons?.find(
    (season: Season) => season.current === true
  );
  return currentSeason?.year;
}

const league = await getLeague();
const seasons = league[0]?.seasons;
let currentSeasonYear = getCurrentSeason(seasons);

currentSeasonYear
  ? localStorage.setItem("currentSeasonYear", JSON.stringify(currentSeasonYear))
  : (currentSeasonYear = JSON.parse(
      localStorage.getItem("currentSeasonYear")!
    ));

export const api = {
  getMatches: async (status: string): Promise<Match[]> => {
    try {
      const response = await fetch(
        `https://v3.football.api-sports.io/fixtures?league=${
          import.meta.env.VITE_LEAGUE_ID
        }&season=${currentSeasonYear}&status=${status}`,
        options
      );
      const data = await response.json();
      return data.response;
    } catch (error) {
      throw error;
    }
  },
  getStandings: async (): Promise<RawLeagueStandings[]> => {
    try {
      const response = await fetch(
        `https://v3.football.api-sports.io/standings?league=${
          import.meta.env.VITE_LEAGUE_ID
        }&season=${currentSeasonYear}`,
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
        }&season=${currentSeasonYear}&live=all&timezone=${browserTimezone}`,
        options
      );
      const data = await response.json();
      return data.response;
    } catch (error) {
      throw error;
    }
  },
};

export default currentSeasonYear;

export interface NavItemProps {
  href: string;
  text: string;
}

export interface Periods {
  first: number | null;
  second: number | null;
}

export interface Venue {
  id: number | null;
  name: string;
  city: string;
}

export interface Status {
  long: string;
  short: string;
  elapsed: number | null;
}

export interface Fixture {
  id: number;
  referee: string | null;
  timezone: string;
  date: string;
  timestamp: number;
  periods: Periods;
  venue: Venue;
  status: Status;
}

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag?: any;
  season: number;
  round: string;
}

export interface Home {
  id: number;
  name: string;
  logo: string;
  winner: boolean | null;
}

export interface Away {
  id: number;
  name: string;
  logo: string;
  winner: boolean | null;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface Teams {
  home: Home;
  away: Away;
}

export interface Goals {
  home: number | null;
  away: number | null;
}

export interface Halftime {
  home: number | null;
  away: number | null;
}

export interface Fulltime {
  home: number | null;
  away: number | null;
}

export interface Extratime {
  home?: number | null;
  away?: number | null;
}

export interface Penalty {
  home?: number | null;
  away?: number | null;
}

export interface Score {
  halftime: Halftime;
  fulltime: Fulltime;
  extratime: Extratime;
  penalty: Penalty;
}

export interface Match {
  fixture: Fixture;
  league: League;
  teams: Teams;
  goals: Goals;
  score: Score;
}

export interface All {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}

export interface AllStandings {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals2;
}

export interface Goals2 {
  for: number;
  against: number;
}

export interface Home2 {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals2;
}

export interface Away2 {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals2;
}

export interface Standings {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string | null;
  all: AllStandings;
  home: Home2;
  away: Away2;
  update: string;
}

export interface LeagueStandings {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag?: any;
  season: number;
  standings: Standings[][];
}

export interface RawLeagueStandings {
  league: LeagueStandings;
}

export interface Statistic {
  type: string;
  value: any;
}

export interface Statistics {
  team: Team;
  statistics: Statistic[];
}

export interface Fixtures {
  events: boolean
  lineups: boolean
  statistics_fixtures: boolean
  statistics_players: boolean
}

export interface Coverage {
  fixtures: Fixtures
  standings: boolean
  players: boolean
  top_scorers: boolean
  top_assists: boolean
  top_cards: boolean
  injuries: boolean
  predictions: boolean
  odds: boolean
}

export interface Season {
  year: number
  start: string
  end: string
  current: boolean
  coverage: Coverage
}

export interface Country {
  name: string
  code: any
  flag: any
}

export interface SeasonLeague {
  id: number
  name: string
  type: string
  logo: string
}

export interface RawLeague {
  league: SeasonLeague
  country: Country
  seasons: Season[]
}
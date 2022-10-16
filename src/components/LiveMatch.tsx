import { Match } from "../types";

function LiveMatch({ match }: { match: Match }) {
  return (
    <div className="bg-zinc-200 rounded-2xl px-4 pb-4">
      <div className="px-4 pb-4">
        <div className="flex md:flex-row p-4 justify-between font-semibold">
          <h2>{match.league.round}</h2>
          <span>
            {match.fixture.venue.name}, {match.fixture.venue.city}
          </span>
        </div>
        <div className="grid grid-cols-8 rounded-3xl p-5 bg-zinc-100 justify-center shadow-zinc-400 shadow-sm">
          <div className="flex flex-col col-span-3 items-center gap-2 p-2">
            <img
              src={match.teams.home.logo}
              alt={match.teams.home.name}
              className="w-28 h-28"
            />
            <span className="font-semibold text-lg">
              {match.teams.home.name}
            </span>
          </div>
          <div className="flex flex-col gap-3 col-span-2 justify-center items-center">
            <span className="text-lg text-gray-700">
              {match.fixture.status.long}
            </span>
            <span className="text-3xl font-bold">
              {match.goals.home} {' – '} {match.goals.away}
            </span>
            <span className="font-bold text-lg text-gray-600">
              {match.fixture.status.elapsed}'
            </span>
          </div>
          <div className="flex flex-col col-span-3 items-center gap-4 p-2">
            <img
              src={match.teams.away.logo}
              alt={match.teams.away.name}
              className="w-28 h-28"
            />
            <span className="font-semibold text-lg">
              {match.teams.away.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveMatch;

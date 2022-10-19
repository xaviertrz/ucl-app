import { Match } from "../types";

function LiveMatch({ match }: { match: Match }) {
  return (
    <div className="flex flex-col rounded-3xl border-2">
      <div className="flex flex-row py-2 px-7 text-zinc-600 bg-gray-100 justify-between text-sm font-bold rounded-t-3xl">
        <h2>{match.league.round}</h2>
        <span className="font-normal">
          {match.fixture.venue.name}, {match.fixture.venue.city}
        </span>
      </div>
      <div className="grid grid-cols-4 rounded-b-3xl bg-white items-center">
        <div className="flex flex-col text-center gap-2 border-r-2 border-gray-200 rounded-l-3xl font-semibold">
          <span className="text-xs text-gray-400">
            {match.fixture.status.short}
          </span>
          <span className="text-green-600 text-xl">
            {match.fixture.status.elapsed}'
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 p-5 bg-white">
          <img
            src={match.teams.home.logo}
            alt={match.teams.home.name}
            className="md:w-20 md:h-20"
          />
          <span className="prose">{match.teams.home.name}</span>
        </div>
        {match.goals.home &&
        match.goals.away !== null &&
        match.goals.home > match.goals.away ? (
          <div className="flex gap-1 flex-row bg-white h-full justify-center items-center font-bold md:text-3xl text-gray-400 prose">
            <span className="text-gray-800">{match.goals.home}</span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" – "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span>{match.goals.away}</span>
          </div>
        ) : match.goals.home === match.goals.away ? (
          <div className="flex gap-1 flex-row bg-white h-full justify-center items-center font-bold md:text-3xl text-gray-400 prose">
            <span>{match.goals.home}</span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" – "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span>{match.goals.away}</span>
          </div>
        ) : (
          <div className="flex gap-1 flex-row bg-white h-full justify-center items-center font-bold md:text-3xl text-gray-400 prose">
            <span>{match.goals.home}</span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" – "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="text-gray-700">{match.goals.away}</span>
          </div>
        )}
        <div className="flex flex-col bg-white rounded-br-3xl items-center p-5 gap-2">
          <img
            src={match.teams.away.logo}
            alt={match.teams.away.name}
            className="md:w-20 md:h-20"
          />
          <span className="prose">{match.teams.away.name}</span>
        </div>
      </div>
    </div>
  );
}

export default LiveMatch;

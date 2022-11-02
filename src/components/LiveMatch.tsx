import { Match } from "../types";

function LiveMatch({ match }: { match: Match }) {
  return (
    <div className="flex flex-col rounded-3xl border border-gray-800">
      <div className="flex flex-row py-2 px-7 text-gray-300 bg-slate-900 border-b border-gray-800 justify-between text-sm font-bold rounded-t-3xl">
        <h2>{match.league.round}</h2>
        <span className="font-normal">
          {match.fixture.venue.name}, {match.fixture.venue.city}
        </span>
      </div>
      <div className="grid grid-cols-4 rounded-b-3xl bg-slate-900 items-center">
        <div className="flex flex-col text-center gap-3 items-center border-r border-gray-800 rounded-l-3xl font-semibold">
          <img className="w-7" src="./image.png" alt={match.league.name} />
          <span className="text-green-500 text-xl">
            {match.fixture.status.elapsed}'
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 p-5 bg-slate-900">
          <img
            src={match.teams.home.logo}
            alt={match.teams.home.name}
            className="md:w-20 md:h-20 w-16 h-16"
          />
          <span className="prose font-semibold text-gray-300">
            {match.teams.home.name}
          </span>
        </div>
        {match.goals.home &&
        match.goals.away !== null &&
        match.goals.home > match.goals.away ? (
          <div className="flex flex-col items-center -mt-8 gap-2">
            <span className="text-gray-600 text-sm">
              {match.fixture.status.short}
            </span>
            <div className="flex gap-1 flex-row bg-slate-900 h-full justify-center items-center font-bold md:text-2xl text-xl text-gray-400 prose">
              <span className="text-gray-100">{match.goals.home}</span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" – "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <span>{match.goals.away}</span>
            </div>
          </div>
        ) : match.goals.home === match.goals.away ? (
          <div className="flex flex-col items-center -mt-8 gap-2">
            <span className="text-gray-600 text-sm">
              {match.fixture.status.short}
            </span>
            <div className="flex gap-1 flex-row bg-slate-900 h-full justify-center items-center font-bold md:text-2xl text-xl text-gray-400 prose">
              <span>{match.goals.home}</span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" – "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <span>{match.goals.away}</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center -mt-8 gap-2">
            <span className="text-gray-600 text-sm">
              {match.fixture.status.short}
            </span>
            <div className="flex gap-1 flex-row bg-slate-900 h-full justify-center items-center font-bold md:text-2xl text-xl text-gray-400 prose">
              <span>{match.goals.home}</span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" – "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <span className="text-gray-100">{match.goals.away}</span>
            </div>
          </div>
        )}
        <div className="flex flex-col bg-slate-900 rounded-br-3xl items-center p-5 gap-2">
          <img
            src={match.teams.away.logo}
            alt={match.teams.away.name}
            className="md:w-20 md:h-20 w-16 h-16"
          />
          <span className="prose font-semibold text-gray-300">
            {match.teams.away.name}
          </span>
        </div>
      </div>
    </div>
  );
}

export default LiveMatch;

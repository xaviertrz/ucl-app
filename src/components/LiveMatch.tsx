import { Match } from "../types";
import cn from "classnames";

function LiveMatch({ match }: { match: Match }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-start items-center text-gray-500">
        <span>{match.league.round}</span>
      </div>
      <div className="grid grid-cols-8 py-4">
        <div className="flex flex-col gap-3 col-span-4 font-semibold">
          <div className="flex flex-row gap-2 pr-2 items-center">
            <img
              className="w-9 h-9"
              src={match.teams.home.logo}
              alt={match.teams.home.name}
            />
            <span
              className={cn(
                (match.goals.home !== null &&
                  match.goals.away !== null &&
                  match.goals.home > match.goals.away) ||
                  match.goals.home === match.goals.away
                  ? "text-gray-300"
                  : "text-gray-500",
                "truncate"
              )}
            >
              {match.teams.home.name}
            </span>
          </div>
          <div className="flex flex-row gap-2 pr-2 items-center">
            <img
              className="w-9 h-9"
              src={match.teams.away.logo}
              alt={match.teams.away.name}
            />
            <span
              className={cn(
                (match.goals.home !== null &&
                  match.goals.away !== null &&
                  match.goals.home < match.goals.away) ||
                  match.goals.home === match.goals.away
                  ? "text-gray-300"
                  : "text-gray-500",
                "truncate"
              )}
            >
              {match.teams.away.name}
            </span>
          </div>
        </div>
        <div className="flex flex-col col-span-1 items-start border-l-2 font-semibold border-slate-700 px-5 justify-center gap-6 text-gray-500">
          <div>
            <span
              className={cn(
                match.goals.home !== null &&
                  match.goals.away !== null &&
                  match.goals.home > match.goals.away &&
                  "text-gray-300"
              )}
            >
              {match.goals.home}
            </span>
          </div>
          <span
            className={cn(
              match.goals.home !== null &&
                match.goals.away !== null &&
                match.goals.away > match.goals.home &&
                "text-gray-300"
            )}
          >
            {match.goals.away}
          </span>
        </div>
        <div className="flex flex-col col-span-3 gap-1.5 justify-center items-center">
          <div className="flex flex-row items-center gap-1">
            <img className="w-5 h-5" src="./src/live.svg" alt="" />
            <span className="text-sm text-gray-500 ">
              {match.fixture.status.short}
            </span>
          </div>
          <span className="text-gray-300 font-semibold">
            {match.fixture.status.elapsed}'
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-end px-4 sm:gap-2 gap-1 items-center text-gray-500 text-sm sm:px-6">
        <img className="w-5 h-5" src="./src/venue.svg" alt="" />
        <span className="truncate">
          {match.fixture.venue.name}, {match.fixture.venue.city}
        </span>
      </div>
    </div>
  );
}

export default LiveMatch;

import { Match } from "../types";
import cn from "classnames";

function Game({ match, date }: { match: Match; date: string[] }) {
  const normalizedDate = date[0];
  const hours12Format = new Date(date[1]).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  return (
    <div className="flex flex-col border-b-2 border-slate-700 text-gray-400">
      <div className="flex flex-row justify-between pb-5 font-semibold">
        <span>{match.league.round}</span>
        <span>{normalizedDate}</span>
      </div>
      <div
        className={cn(
          match.fixture.status.long === "Match Finished" && "gap-3",
          "grid sm:gap-0 grid-cols-7 font-semibold pb-3"
        )}
      >
        <div className="flex flex-row col-span-3 md:gap-3 gap-2 items-center justify-end">
          <span className="text-gray-300 truncate">
            {match.teams.home.name}
          </span>
          <img
            src={match.teams.home.logo}
            alt={match.teams.home.name}
            className="sm:w-9 sm:h-9 w-8 h-8"
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          {match.fixture.status.long === "Match Finished" ? (
            <div className="flex flex-row sm:gap-3 sm:text-lg text-base gap-1.5 text-gray-500">
              <span
                className={cn(
                  match.goals.home != null &&
                    match.goals.away != null &&
                    match.goals.home > match.goals.away &&
                    "text-gray-300"
                )}
              >
                {match.goals.home}
              </span>
              <span>-</span>
              <span
                className={cn(
                  match.goals.home !== null &&
                    match.goals.away !== null &&
                    match.goals.home < match.goals.away &&
                    "text-gray-300"
                )}
              >
                {match.goals.away}
              </span>
            </div>
          ) : (
            <span className="text-gray-400 text-lg font-semibold">v</span>
          )}
        </div>
        <div className="flex flex-row sm:gap-3 gap-2 col-span-3 items-center justify-start">
          <img
            src={match.teams.away.logo}
            alt={match.teams.away.name}
            className="sm:w-9 sm:h-9 w-8 h-8"
          />
          <span className="text-gray-300 truncate">
            {match.teams.away.name}
          </span>
        </div>
      </div>
      <div className="flex flex-row-reverse justify-between text-sm tracking-tight py-1.5 text-gray-500 font-semibold">
        <div className="flex flex-row items-center gap-1.5 font-semibold">
          <img className="w-4 h-4" src="./src/clock.svg" alt="Clock" />
          <span>{hours12Format}</span>
        </div>
        <div className="flex flex-row sm:gap-2 gap-1 items-center">
          <div className="flex flex-row items-center sm:gap-2 gap-1">
            <img className="w-5 h-5" src="./src/venue.svg" alt="Soccer field" />
            <span className="sm:w-full w-44 truncate pr-5">
              {match.fixture.venue.name}, {match.fixture.venue.city}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fixture({ matches, date }: { matches: Match[]; date: string }) {
  const normalizedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    weekday: "long",
    month: "long",
  });

  const filteredMatches = matches.filter(
    (match) => match.fixture.date.split("T")[0] === date
  );

  return (
    <div className="border-b-2 border-slate-500 pb-1">
      <div className="flex flex-col gap-8 pt-4">
        {filteredMatches.map((match) => (
          <Game
            key={match.fixture.id}
            match={match}
            date={[normalizedDate, match.fixture.date]}
          />
        ))}
      </div>
    </div>
  );
}

export default Fixture;

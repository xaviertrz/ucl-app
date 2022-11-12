import { Match } from "../types";
import cn from "classnames";

function Game({ match, date }: { match: Match; date: string }) {
  const hours12Format = new Date(date).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  return (
    <div className="flex flex-col rounded-2xl border bg-blue-opaque border-gray-800 ">
      <div
        className={cn(
          match.fixture.status.long === "Not Started"
            ? "rounded-t-2xl"
            : "rounded-2xl",
          "grid grid-cols-7 sm:gap-0 gap-1 py-3 font-semibold"
        )}
      >
        <div className="flex flex-row col-span-3 md:gap-3 gap-2 items-center justify-end">
          <span className="prose text-gray-300">{match.teams.home.name}</span>
          <img
            src={match.teams.home.logo}
            alt={match.teams.home.name}
            className="sm:w-9 sm:h-9 w-8 h-8"
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          {match.fixture.status.long === "Match Finished" ? (
            <div className="flex flex-row sm:gap-3 gap-1.5 text-gray-500">
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
            <span className="text-gray-400 font-normal">vs.</span>
          )}
        </div>
        <div className="flex flex-row sm:gap-3 gap-2 col-span-3 items-center justify-start ">
          <img
            src={match.teams.away.logo}
            alt={match.teams.away.name}
            className="sm:w-9 sm:h-9 w-8 h-8"
          />
          <span className="prose text-gray-300">{match.teams.away.name}</span>
        </div>
      </div>
      <div className="flex justify-between sm:px-6 px-4 bg-slate-900 rounded-b-2xl border-t border-gray-800 text-sm tracking-tight py-1.5 text-gray-500 font-semibold">
        <div>
          <span className="text-gray-300">{match.league.round}</span>
        </div>
        <div className="flex flex-row sm:gap-2 gap-1 items-center text-gray-500">
          {match.fixture.status.long === "Not Started" ? (
            <div className="flex flex-row items-center sm:gap-2 gap-1">
              <img className="w-4 h-4" src="./src/assets/clock.svg" alt="" />
              <span>{hours12Format}</span>
            </div>
          ) : (
            <div className="flex flex-row items-center sm:gap-2 gap-1">
              <img className="w-5 h-5" src="./src/assets/venue.svg" alt="" />
              <span>
                {match.fixture.venue.name}, {match.fixture.venue.city}
              </span>
            </div>
          )}
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
    <div className="bg-slate-900 border rounded-2xl p-4 border-gray-800">
      <div className="text-center tracking-tight font-bold text-gray-200 pb-4 sm:text-base text-sm">
        <h2>{normalizedDate}</h2>
      </div>
      <div className="flex flex-col gap-3">
        {filteredMatches.map((match) => (
          <Game
            key={match.fixture.id}
            match={match}
            date={match.fixture.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Fixture;

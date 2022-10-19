import { Match } from "../types";
import cn from "classnames";

function Game({ match, date }: { match: Match; date: string }) {
  const hours12Format = new Date(date).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  /* const time = new Date(date).toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric",
  }); */

  return (
    <div className="flex flex-col rounded-3xl bg-gray-200 border-2 ">
      <div className={cn(match.fixture.status.long === "Not Started" ? "rounded-t-3xl" : "rounded-3xl", "grid grid-cols-7 p-2 bg-white font-semibold")}>
        <div className="flex flex-row col-span-3 gap-2 items-center justify-end ">
          <span className="prose">{match.teams.home.name}</span>

          <img
            src={match.teams.home.logo}
            alt={match.teams.home.name}
            className="w-9 h-9"
          />
        </div>
        <div className="flex flex-row items-center justify-center ">
          {match.fixture.status.long === "Match Finished" ? (
            <span className="font-semibold text-gray-600">
              {match.score.fulltime.home} {" – "} {match.score.fulltime.away}
            </span>
          ) : (
            <span className="font-semibold text-gray-500">vs.</span>
          )}
        </div>
        <div className="flex flex-row gap-2 col-span-3 items-center justify-start ">
          <img
            src={match.teams.away.logo}
            alt={match.teams.away.name}
            className="w-9 h-9"
          />
          <span className="prose">{match.teams.away.name}</span>
        </div>
      </div>
      {match.fixture.status.long === "Not Started" && (
        <div className="flex justify-between px-12 text-sm tracking-tight font-semibold py-1 text-gray-500">
          <span>{match.fixture.timezone}</span>
          <span>{hours12Format}</span>
        </div>
      )}
    </div>
  );
}

function Fixture({ matches, date }: { matches: Match[]; date: string }) {
  const normalizedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const filteredMatches = matches.filter(
    (match) => match.fixture.date.split("T")[0] === date
  );

  return (
    <div className="bg-gray-100 rounded-2xl p-4 ">
      <div className="text-center font-bold">
        <h2 className="pb-4">{normalizedDate}</h2>
      </div>
      <div className="flex flex-col gap-5">
        {filteredMatches.map((match) => (
          <Game match={match} date={match.fixture.date} />
        ))}
      </div>
    </div>
  );
}

export default Fixture;

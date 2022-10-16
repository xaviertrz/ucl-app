import { Match } from "../types";

function Game({ match, date }: { match: Match, date: string }) {
  const hours12Format = new Date(date).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  /* const time = new Date(date).toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric",
  }); */

  return (
    <div className="flex flex-col rounded-3xl bg-gray-300">
      <div className="flex flex-row md:grid md:grid-cols-7 p-2 bg-zinc-100 rounded-3xl font-semibold">
        <div className="flex flex-row col-span-3 gap-3 items-center justify-end">
          <span className="prose">{match.teams.home.name}</span>

          <img
            src={match.teams.home.logo}
            alt={match.teams.home.name}
            className="w-9 h-9"
          />
        </div>
        <div className="flex flex-row items-center justify-center ">
          {(match.fixture.status.long === "Match Finished") ? (
            <span className="font-semibold text-gray-600">
              {match.score.fulltime.home} {' – '} {match.score.fulltime.away}
            </span>
          ) : (
            <span className="font-semibold text-gray-500">vs.</span>
          )}
        </div>
        <div className="flex flex-row gap-3 col-span-3 items-center ">
          <img
            src={match.teams.away.logo}
            alt={match.teams.away.name}
            className="w-9 h-9"
          />
          <span className="prose">{match.teams.away.name}</span>
        </div>
      </div>
      <div className="flex justify-center p-1">
        <span className="text-sm tracking-tight font-semibold py-0.5 prose">{hours12Format}</span>
      </div>
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
    <div className="bg-zinc-200 rounded-2xl p-4 ">
      <div className="text-center font-bold">
        <h2 className="pb-4">{normalizedDate}</h2>
      </div>
      <div className="flex flex-col gap-6">
        {filteredMatches.map((match) => (
          <Game match={match} date={match.fixture.date} />
        ))}
      </div>
    </div>
  );
}

export default Fixture;

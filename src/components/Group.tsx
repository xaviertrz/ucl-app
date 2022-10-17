import { Standings } from "../types";

function Team({ standing }: { standing: Standings }) {
  return (
    <div className="flex gap-3 flex-row p-3 justify-between bg-white border-2 rounded-3xl">
      <div className="flex flex-shrink-0 flex-row items-center justify-center gap-3">
        <span className="font-bold text-zinc-500">{standing.rank}</span>
        <img
          src={standing.team.logo}
          alt={standing.team.name}
          className="w-9 h-9"
        />
      </div>
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-row h-full items-center">
          <span className="prose font-semibold">{standing.team.name}</span>
        </div>
        <div className="flex items-center h-full">
          <span className="text-sm text-gray-600">{standing.points} Pts</span>
        </div>
      </div>
    </div>
  );
}

function Group({
  standings,
  group,
}: {
  standings: Standings[][];
  group: string;
}) {
  const groupStandings: Standings[][] = standings.filter(
    (standing) => standing[0].group === group
  );
  console.log(groupStandings);

  return (
    <div className="bg-gray-100 rounded-2xl p-4 ">
      <h2 className="text-base px-5 pb-2 font-bold">{group}</h2>
      <div className="flex flex-col gap-3">
        {groupStandings.map((standing) =>
          standing.map((team) => <Team standing={team} />)
        )}
      </div>
    </div>
  );
}

export default Group;

import { Standings } from "../types";

function Team({ standing }: { standing: Standings }) {
  return (
    <div className="flex gap-4 flex-row p-2 bg-red-400 justify-between">
      <div className="flex flex-shrink-0 flex-col bg-gray-700 justify-center">
        <img
          src={standing.team.logo}
          alt={standing.team.name}
          className="w-8 h-8"
        />
        <span className="font-bold text-white">{standing.rank}</span>

      </div>
      <div className="flex flex-col gap-1 bg-orange-400">
        <span className="text-lg font-bold">{standing.team.name}</span>
        <span className="text-sm text-gray-600">{standing.points} Pts</span>
        <span className="text-sm text-gray-600">{standing.goalsDiff} DG</span>
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
    <div className="bg-yellow-800 rounded-xl p-4 w-1/4">
      <h2 className="text-2xl font-bold">{group}</h2>
      <div className="flex flex-col gap-2">
        {groupStandings.map((standing) =>
          standing.map((team) => <Team standing={team} />)
        )}
      </div>
    </div>
  );
}

export default Group;

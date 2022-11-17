import { Standings } from "../types";

function Team({ standing }: { standing: Standings }) {
  return (
    <div className="flex gap-4 flex-row py-3 px-7 justify-between bg-blue-opaque border border-gray-800 rounded-3xl">
      <div className="flex flex-row items-center justify-center gap-3">
        <span className="font-semibold text-zinc-300">{standing.rank}</span>
        <img
          src={standing.team.logo}
          alt={standing.team.name}
          className="w-9 h-9"
        />
      </div>
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-row h-full items-center">
          <p className="font-semibold truncate md:w-full w-24 text-gray-300">
            {standing.team.name}
          </p>
        </div>
        <div className="flex items-center h-full">
          <span className="text-sm text-gray-400 truncate">{standing.points} Pts</span>
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

  return (
    <div className="bg-slate-900 border rounded-2xl p-4 pb-6 border-gray-800">
      <h2 className="px-1 pb-2 font-bold text-gray-200">{group}</h2>
      <div className="flex flex-col gap-3">
        {groupStandings.map((standing) =>
          standing.map((team) => <Team key={team.team.id} standing={team} />)
        )}
      </div>
    </div>
  );
}

export default Group;

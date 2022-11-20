import { Standings } from "../types";
import cn from "classnames";

/* function Team({ standing }: { standing: Standings }) {
  return (
    
  );
} */

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
    <table className="table-fixed">
      <thead className="text-gray-400">
        <tr className="text-center">
          <th className="text-left font-normal capitalize pb-2">{group}</th>
          <th className="sm:table-cell font-normal">P</th>
          <th className="sm:table-cell hidden font-normal">W</th>
          <th className="sm:table-cell hidden font-normal">D</th>
          <th className="sm:table-cell hidden font-normal">L</th>
          <th className="sm:table-cell font-normal">GD</th>
          <th className="sm:table-cell font-normal">Pts</th>
        </tr>
      </thead>
      <tbody>
        {groupStandings.map((standing) =>
          standing.map((team) => (
            <tr
              key={team.team.id}
              className="text-center text-gray-500 border-b-2 border-slate-700"
            >
              <td className="py-2">
                <div className="flex flex-row gap-3 items-center">
                  <img
                    className="w-8 h-8"
                    src={team.team.logo}
                    alt={team.team.name}
                  />
                  <span className="font-semibold truncate capitalize text-gray-300">
                    {team.team.name}
                  </span>
                </div>
              </td>
              <td className="sm:w-12 w-8 sm:table-cell">{team.all.played}</td>
              <td className="sm:w-12 sm:table-cell hidden">{team.all.win}</td>
              <td className="sm:w-12 sm:table-cell hidden">{team.all.draw}</td>
              <td className="sm:w-12 sm:table-cell hidden">{team.all.lose}</td>
              <td
                className={cn(
                  team.goalsDiff < 0 && "text-red-600",
                  "sm:w-12 w-8 sm:table-cell"
                )}
              >
                {team.goalsDiff}
              </td>
              <td className="sm:w-12 w-8 sm:table-cell">{team.points}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default Group;

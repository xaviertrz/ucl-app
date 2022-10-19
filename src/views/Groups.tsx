import { useState, useEffect } from "react";
import Container from "../components/Container";
import Group from "../components/Group";
import { Standings } from "../types";
import { standings as groupsStandings } from "../data";
import { api } from "../api";

function Groups() {
  const [standings, setStandings] = useState<Standings[][]>([]);
  const groups = new Set<string>();

  useEffect(() => {
    /* api.getStandings().then((standings) => {
      setStandings(standings);
    }); */

    setStandings(groupsStandings.league.standings);
  }, []);

  for (let standing of standings) {
    standing.map((group) => groups.add(group.group));
  }

  const groupsArray = Array.from(groups).sort();

  return (
    <Container
      title="Groups"
      description="Current UEFA Champions League standings"
    >
      <div className="flex flex-col justify-center items-start mx-auto pb-16 max-w-3xl">
        {standings.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-12 w-full">
            {groupsArray.map((group) => (
              <Group standings={standings} group={group} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-start pb-16 max-w-3xl">
            <h1 className="font-bold text-5xl tracking-tight mb-4 text-black">
              Oops...
            </h1>
            <p className="text-gray-500 text-lg mb-8">No groups found 🙁</p>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Groups;

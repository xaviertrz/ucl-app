import { useState, useEffect } from "react";
import Container from "../components/Container";
import Group from "../components/Group";
import { Standings } from "../types";
import { standings as groupsStandings } from "../data";

function Groups() {
  const [standings, setStandings] = useState<Standings[][]>([]);
  const groups = new Set<string>();

  useEffect(() => {
    /* api.getStandings().then(standings => {
      setStandings(standings);
  }); */

    setStandings(groupsStandings.league.standings);
  }, []);

  for (let standing of standings) {
    standing.map((group) => groups.add(group.group));
  }

  const groupsArray = [...groups].sort();

  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-5xl mx-auto pb-16 bg-yellow-300">
        <div className="flex gap-6 flex-wrap fex-col md:flex-row max-w-full justify-center bg-lime-500">
          {groupsArray.map((group) => (
            <Group standings={standings} group={group} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Groups;

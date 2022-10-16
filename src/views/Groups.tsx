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

  const groupsArray = Array.from(groups).sort();

  return (
    <Container>
      <div className="flex flex-col justify-center items-start mx-auto pb-16 max-w-3xl">
        <div className="grid md:grid-cols-2 gap-12 w-full">
          {groupsArray.map((group, i) => (
            <Group standings={standings} group={group} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Groups;

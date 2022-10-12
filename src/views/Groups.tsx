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
      <div className="flex flex-col justify-center items-start max-w-4xl mx-auto pb-16">
        <div className="grid grid-cols-2 gap-12 md:flex-row max-w-full w-full">
          {groupsArray.map((group) => (
            <Group standings={standings} group={group} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Groups;

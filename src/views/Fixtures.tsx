import { useEffect, useState } from "react";
import Container from "../components/Container";
import { Match } from "../types";
import { api } from "../api";
import { comingMatches } from "../data";
import Fixture from "../components/Fixture";

function Results() {
  const [matches, setMatches] = useState<Match[]>([]);
  const dates = new Set<string>();


  useEffect(() => {
    /* api.getMatches("NS").then((matches) => {
      setMatches(matches);
    }); */

    setMatches(comingMatches);
  }, []);

  console.log(matches);
  matches.forEach((match) => dates.add(match.fixture.date.split("T")[0]));


  return (
    <Container>
      <div className="flex flex-col justify-center items-start mx-auto pb-16 max-w-3xl">
        <div className="flex flex-col gap-12 w-full">
          {Array.from(dates).map((date) => (
            <Fixture matches={matches} date={date} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Results;

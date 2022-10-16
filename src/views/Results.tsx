import { useEffect, useState } from "react";
import { api } from "../api";
import Container from "../components/Container";
import Fixture from "../components/Fixture";
import { fixtures } from "../data";
import { Match } from "../types";

function Results() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [statistics, setStatistics] = useState([]);
  const finishedMatches = fixtures.reverse();
  const dates = new Set<string>();

  useEffect(() => {
    /* api.getMatches("FT").then(matches => {
          setMatches(matches.reverse());
      }); */

    setMatches(finishedMatches);
  }, []);

  console.log(matches)
  matches.forEach((match) => dates.add(match.fixture.date.split("T")[0]));

  return (
    <Container>
      <div className="flex flex-col justify-center items-start mx-auto pb-16 max-w-3xl">
        <div className="flex flex-col gap-10 w-full">
          {Array.from(dates).map((date) => (
            <Fixture matches={matches} date={date} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Results;

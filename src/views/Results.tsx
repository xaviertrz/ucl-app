import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { api } from "../api";
import Container from "../components/Container";
import Fixture from "../components/Fixture";
import { fixtures } from "../data";
import { Match } from "../types";

function Results() {
  const [matches, setMatches] = useState<Match[]>([]);
  /* const finishedMatches = fixtures.reverse(); */
  const loadedMatches = useLoaderData() as Match[]
  const dates = new Set<string>();
  /* console.log(orderedMatches);
  console.log(loadedMatches.reverse()); */

  useEffect(() => {
    /* api.getMatches("FT").then(matches => {
          setMatches(matches.reverse());
      }); */
    
    setMatches(loadedMatches);
      /* if(loadedMatches.length) {
        const orderedMatches = loadedMatches.reverse();
        console.log("ordered")
        console.log(orderedMatches)
        console.log("disordered")
        console.log(loadedMatches)
        setMatches(loadedMatches);
      } */


    /* setMatches(loadedMatches.reverse()); */
  }, [loadedMatches]);

  matches.forEach((match) => dates.add(match.fixture.date.split("T")[0]));

  return (
    <Container title="UCL - Results" description="All match finished scores">
      <div className="flex flex-col justify-center items-start mx-auto pb-16 max-w-3xl">
        <div className="flex flex-col gap-10 w-full">
          {Array.from(dates).map((date) => (
            <Fixture matches={matches.reverse()} date={date} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Results;

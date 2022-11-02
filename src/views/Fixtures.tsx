import { useEffect, useState, useMemo } from "react";
import Container from "../components/Container";
import { Match } from "../types";
import { api } from "../api";
import { comingMatches } from "../data";
import Fixture from "../components/Fixture";
import { useLoaderData } from "react-router-dom";

function Results() {
  const [matches, setMatches] = useState<Match[]>([]);
  const matchesLoader = useLoaderData() as Match[];
  const dates = new Set<string>();

  useEffect(() => {
    /* setLoading(true);
    api.getMatches("NS").then((matches) => {
      setMatches(matches);
      console.log("rendered");
      setLoading(false);
    }); */

    setMatches(matchesLoader);
    console.log("Rendered");
  }, []);

  matches.forEach((match) => dates.add(match.fixture.date.split("T")[0]));

  return (
    <Container
      title="UCL - Fixtures"
      description="All not started fixtures ordered by date and time"
    >
      <div className="flex flex-col justify-center items-start mx-auto pb-16 max-w-3xl">
        <div className="flex flex-col gap-16 w-full">
          {Array.from(dates).map((date) => (
            <Fixture matches={matches} date={date} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Results;

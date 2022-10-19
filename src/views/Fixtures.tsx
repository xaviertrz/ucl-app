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
    <Container
      title="Fixtures"
      description="All not started fixtures ordered by date and time"
    >
      <div className="flex flex-col justify-center items-start mx-auto pb-16 max-w-3xl">
        {matches.length > 0 ? (
          <div className="flex flex-col gap-16 w-full">
            {Array.from(dates).map((date) => (
              <Fixture matches={matches} date={date} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-start pb-16 max-w-3xl">
            <h1 className="font-bold text-5xl tracking-tight mb-4 text-black">
              Oops...
            </h1>
            <p className="text-gray-500 text-lg mb-8">No fixtures found 😒</p>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Results;

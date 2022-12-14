import { useQuery } from "react-query";

import Container from "../components/Container";
import Fixture from "../components/Fixture";
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";

import type { Match } from "../types";
import { api } from "../api";

function Results() {
  const dates = new Set<string>();
  let {
    data: matches,
    isLoading,
    isError,
  } = useQuery<Match[]>(["finishedMatches"], () => api.getMatches("FT"), {
    refetchInterval: 1000 * 60 * 60 * 24,
  });

  if (isLoading) {
    return (
      <Container>
        <div className="flex flex-col pt-40 items-center">
          <Spinner />
        </div>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <div className="flex flex-col justify-center mx-auto items-start pb-16 max-w-2xl">
          <h1 className="font-bold text-2xl tracking-tight mb-4 text-white">
            Something went wrong.
          </h1>
        </div>
      </Container>
    );
  }

  if (!matches?.length) {
    return (
      <Container>
        <NotFound text="results" />
      </Container>
    );
  }

  matches = [...matches].reverse();
  matches.forEach((match) => dates.add(match.fixture.date.split("T")[0]));
  return (
    <Container title="Results" description="All finished matches results">
      <div className="flex flex-col justify-center items-start mx-auto pb-16 max-w-2xl">
        <h1
          className="font-bold text-2xl mb-4 tracking-tight text-white"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          Results
        </h1>
        <div className="flex flex-col gap-12 w-full">
          {Array.from(dates).map((date) => (
            <Fixture key={date} matches={matches!} date={date} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Results;

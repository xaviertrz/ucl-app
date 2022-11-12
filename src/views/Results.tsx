import { api } from "../api";
import Container from "../components/Container";
import Fixture from "../components/Fixture";
import { Match } from "../types";
import { useQuery } from "react-query";
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";

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
        <div className="flex flex-col justify-center mx-auto items-start pb-16 max-w-3xl">
          <h1 className="font-bold text-4xl tracking-tight mb-4 text-white">
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

  matches.forEach((match) => dates.add(match.fixture.date.split("T")[0]));
  return (
    <Container title="Results" description="All finished matches results">
      <div className="flex flex-col justify-center items-start mx-auto pb-16 max-w-3xl">
        <h1 className="font-bold text-xl md:text-2xl mb-4 tracking-tight text-black dark:text-white">
          Results
        </h1>
        <div className="flex flex-col gap-12 w-full">
          {Array.from(dates).map((date) => (
            <Fixture key={date} matches={matches!.reverse()} date={date} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Results;

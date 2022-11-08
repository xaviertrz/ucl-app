import Container from "../components/Container";
import { Match } from "../types";
import { api } from "../api";
import Fixture from "../components/Fixture";
import Spinner from "../components/Spinner";
import { useQuery } from "react-query";
import NotFound from "../components/NotFound";
import { comingMatches } from "../data";

function Results() {
  const dates = new Set<string>();
  /* let {
    data: matches,
    isLoading,
    isError,
  } = useQuery<Match[]>(["notStartedMatches"], () => api.getMatches("NS"), {
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
        <NotFound text="fixtures" />
      </Container>
    );
  } */

  const matches = comingMatches;

  matches?.forEach((match) => dates.add(match.fixture.date.split("T")[0]));

  /* matches?.length
    ? localStorage.setItem("notStartedMatches", JSON.stringify(matches))
    : (matches = JSON.parse(localStorage.getItem("notStartedMatches")!)); */

  return (
    <Container
      title="UCL - Fixtures"
      description="All not started fixtures ordered by date and time"
    >
      <div className="flex flex-col justify-center items-start mx-auto pb-16 max-w-3xl">
        <div className="flex flex-col gap-16 w-full">
          {Array.from(dates).map((date) => (
            <Fixture matches={matches!} date={date} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Results;

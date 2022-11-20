import { api } from "../api";
import Container from "../components/Container";
import LiveMatch from "../components/LiveMatch";
import { Match } from "../types";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../components/Spinner";
import { liveMatches } from "../data";

function Live() {
  /* let interval = 1000 * 60 * 60 * 24;
  let {
    data: matches,
    isLoading,
    isError,
  } = useQuery<Match[]>(["liveMatches"], () => api.getLiveMatches(), {
    refetchInterval: interval,
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
          <h1 className="font-bold text-3xl tracking-tight mb-4 text-white">
            Something went wrong.
          </h1>
        </div>
      </Container>
    );
  }

  if (!matches?.length) {
    return (
      <Container>
        <div className="flex flex-col justify-center mx-auto items-start pb-16 max-w-2xl">
          <h1 className="font-bold text-2xl tracking-tight mb-4 text-white">
            No live games now... 😴
          </h1>
          <span className="text-base text-gray-400">
            Check{" "}
            <span className="font-bold italic hover:underline">
              <Link to="/fixtures">Fixtures</Link>
            </span>{" "}
            to see coming matches dates.
          </span>
        </div>
      </Container>
    );
  }

  interval = 1000 * 60; */

  const matches = liveMatches;
  return (
    <Container>
      <div className="flex flex-col justify-center items-start mx-auto pb-12 max-w-2xl">
        <h1 className="font-bold text-2xl mb-7 tracking-tight text-white">
          Live
        </h1>
        <div className="flex flex-col w-full">
          <div className="sm:grid sm:grid-cols-2 flex flex-col gap-8">
            {matches.map((match) => (
              <LiveMatch key={match.fixture.id} match={match!} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Live;

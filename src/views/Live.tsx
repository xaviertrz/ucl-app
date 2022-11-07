import { api } from "../api";
import Container from "../components/Container";
import LiveMatch from "../components/LiveMatch";
import { Match } from "../types";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../components/Spinner";

function Live() {
  let interval = 1000 * 60 * 60 * 24;
  const {
    data: matches,
    isLoading,
    isError,
  } = useQuery<Match[]>(["standings"], api.getLiveMatches, {
    refetchInterval: interval,
  });

  if (matches) {
    interval = 1000 * 60;
  }

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
        <div className="flex flex-col justify-center mx-auto items-start pb-16 max-w-3xl">
          <h1 className="font-bold text-4xl tracking-tight mb-4 text-white">
            No live games now...
            <br />{" "}
          </h1>
          <span className="text-base text-gray-400">
            Check{" "}
            <span className="font-bold italic hover:underline">
              <Link to="/fixtures">Fixtures</Link>
            </span>{" "}
            to see coming matches.
          </span>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="flex flex-col justify-center items-start mx-auto pb-12 max-w-3xl">
        <div className="flex flex-col gap-12 w-full">
          {matches.map((match) => (
            <LiveMatch match={match} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Live;

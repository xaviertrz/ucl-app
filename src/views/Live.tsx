import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import Container from "../components/Container";
import LiveMatch from "../components/LiveMatch";
import Spinner from "../components/Spinner";

import { api } from "../api";
import type { Match } from "../types";

function Live() {
  let interval = 1000 * 60 * 60 * 24;
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

  interval = 1000 * 60;
  return (
    <Container>
      <div className="flex flex-col justify-center items-start mx-auto pb-12 max-w-2xl">
        <h1
          className="font-bold text-2xl mb-7 tracking-tight text-white"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          Live
        </h1>
        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-2">
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

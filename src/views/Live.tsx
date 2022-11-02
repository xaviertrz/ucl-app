import { useEffect, useState } from "react";
import { api } from "../api";
import Container from "../components/Container";
import LiveMatch from "../components/LiveMatch";
import { Match } from "../types";
/* import { liveMatches } from "../data"; */
import { Link, useLoaderData } from "react-router-dom";

function Live() {
  const [matches, setMatches] = useState<Match[]>([]);
  const liveMatchesLoader = useLoaderData() as Match[];

  useEffect(() => {
    /* api.getLiveMatches().then((matches) => {
      setMatches(matches);
    }); */
    setMatches(liveMatchesLoader)
    /* setMatches(liveMatchesLoader); */
    console.log("liveMatches actualized");
  }, [matches]);

  console.log(matches);

  return (
    <Container title="UCL - Live now" description="All currently UCL matches live now">
      <div className="flex flex-col justify-center items-start mx-auto pb-12 max-w-3xl">
        {matches.length > 0 ? (
          <div className="flex flex-col gap-12 w-full">
            {matches.map((match) => (
              <LiveMatch match={match} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-start pb-16 max-w-3xl">
            <h1 className="font-bold text-5xl tracking-tight mb-4 text-white">
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
            <span className="text-gray-500 text-lg mb-8"></span>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Live;

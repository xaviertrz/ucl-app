import { useEffect, useState } from "react";
import { api } from "../api";
import Container from "../components/Container";
import LiveMatch from "../components/LiveMatch";
import { Match } from "../types";
import { liveMatches } from "../data";
import { Link } from "react-router-dom";

function Live() {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    api.getLiveMatches().then((matches) => {
      setMatches(matches);
    });
    /* setMatches(liveMatches); */
  }, [matches]);

  console.log(matches);

  return (
    <Container>
      <div className="flex flex-col justify-center items-start mx-auto pb-12 max-w-3xl">
        {matches.length > 0 ? (
          <div className="flex flex-col gap-12 w-full">
            {matches.map((match) => (
              <LiveMatch match={match} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-start pb-16 max-w-3xl">
            <h1 className="font-bold text-5xl tracking-tight mb-4 text-black">
              Oops...
            </h1>
            <p className="text-gray-500 text-lg mb-8">
              No live games now 😴 <br />{" "}
              <p className="text-base">
                Check{" "}
                <span className="font-bold italic hover:underline">
                  <Link to="/fixtures">Fixtures</Link>
                </span>{" "}
                to see coming matches.
              </p>
            </p>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Live;

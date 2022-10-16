import { useEffect, useState } from "react";
import { api } from "../api";
import Container from "../components/Container";
import LiveMatch from "../components/LiveMatch";
import { Match } from "../types";
import loader from "../public/ball-loader.gif";
import { liveMatches } from "../data";

function Live() {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    /* api.getLiveMatches().then((matches) => {
      setMatches(matches);
    }); */
    setMatches(liveMatches);
  }, []);

  console.log(matches);

  return (
    <Container>
      <div className="flex flex-col justify-center items-start mx-auto pb-16 max-w-3xl">
        <div className="flex flex-col gap-12 w-full">
          {matches.map((match) => (
            <LiveMatch match={match} />
          ))}
        </div>
        {/* {matches.length > 0 ? (
          
        ) : (
          <div className="flex flex-row text-zinc-500 w-full justify-center items-center font-bold text-2xl p-10">
            <span>No live games now {"\u00A0"}</span>
            <span className="text-3xl">😴</span>
          </div>
        )} */}
      </div>
    </Container>
  );
}

export default Live;

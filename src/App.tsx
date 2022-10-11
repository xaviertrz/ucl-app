import { useEffect, useState } from "react";
import { Match, Standings } from "./types";
import { api } from "./api";
import { fixtures, standings as groupsStandings } from './data'

function App() {
  const [matches, setMatches] = useState<Match[]>([]);
  const lastMatches = fixtures.reverse();

  useEffect(() => {
    /* api.getFinishedMatches().then(matches => {
        setMatches(matches.reverse());
    }); */
    setMatches(lastMatches);

  }, []);

  /* console.log(matches); */
  /* console.log(groups); */

  return (
    <>
      {matches.length > 0 ? (
        <div>
          <h1>Football Fixtures</h1>
          <ul>
            {matches.map((match) => (
              <li key={match.fixture.id}>
                <img src={match.teams.home.logo} alt={match.teams.home.name} />
                {match.teams.home.name}
                {match.score.fulltime.home}
                vs {match.score.fulltime.away}
                {match.teams.away.name}
                <img src={match.teams.away.logo} alt={match.teams.away.name} />
                Date: {match.fixture.date}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default App;

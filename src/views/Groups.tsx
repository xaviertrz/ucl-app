import { useState, useEffect, useMemo } from "react";
import Container from "../components/Container";
import Group from "../components/Group";
import { LeagueStandings, RawLeagueStandings, Standings } from "../types";
import { standings as groupsStandings } from "../data";
import { api } from "../api";
import { useLoaderData } from "react-router-dom";

function Groups() {
  const [standings, setStandings] = useState<Standings[][]>([]);
  const standingsLoader = useLoaderData() as RawLeagueStandings[];
  /* const newStandings = standingsLoader[0].league.standings; */
  const groups = new Set<string>();
  const cachedStandings = localStorage.getItem("standings");

  /* useMemo(() => {
    if(cachedStandings) {
      setStandings(JSON.parse(cachedStandings));
    }
    return setStandings(standingsLoader[0].league.standings);
  }, [standingsLoader]); */

  useEffect(() => {
    if (standingsLoader.length) {
      setStandings(standingsLoader[0].league.standings);
      if (standingsLoader !== JSON.parse(cachedStandings!)) {
        localStorage.setItem(
          "standings",
          JSON.stringify(standingsLoader[0].league.standings)
        );
      }
      console.log("info by api");
    } else {
      if (cachedStandings) {
        setStandings(JSON.parse(cachedStandings)[0].league.standings);
        console.log("info by cache");
      } else {
        window.localStorage.setItem(
          "standings",
          JSON.stringify(standingsLoader)
        );
      }
    }
  }, [standingsLoader]);

  /* useEffect(() => {
    standingsLoader.length ? setStandings(standingsLoader[0].league.standings) : cachedStandings ? setStandings(JSON.parse(cachedStandings)[0].league.standings) : window.localStorage.setItem("standings", JSON.stringify(standingsLoader));
  }, []) */

  /* useEffect(() => {
    if (cachedStandings) {
      if (
        standingsLoader.length &&
        cachedStandings !== standingsLoader.toString()
      ) {
        window.localStorage.setItem(
          "standings",
          JSON.stringify(standingsLoader)
        );
      }
      const standings = JSON.parse(localStorage.getItem("standings") || "{}");
      setStandings(standings[0].league.standings);
      console.log(standings[0]);
      console.log("filled with local storage");
    } else {
      setStandings(standingsLoader[0].league.standings);
      window.localStorage.setItem("standings", JSON.stringify(standingsLoader));
    }
  }, []); */

  /* useEffect(() => {
    if (localStorage.getItem("standings")) {
      const standings = JSON.parse(localStorage.getItem("standings") || "{}");
      setStandings(standings[0].league.standings);
      console.log(standings[0])
      console.log("filled with local storage");
    } else {
      api.getStandings().then((standings) => {
        window.localStorage.setItem("standings", JSON.stringify(standings));
        setStandings(standings[0].league.standings);
        console.log("filled with api");
      });
    }

    api.getStandings().then((standings) => {
      window.localStorage.setItem("standings", JSON.stringify(standings));
      setStandings(standings[0].league.standings);
      console.log("filled")
    });
  }, []); */

  for (let group of standings) {
    group.map((team) => groups.add(team.group));
  }

  const groupsArray = Array.from(groups).sort();

  return (
    <Container
      title="UCL - Groups"
      description="Current UEFA Champions League standings"
    >
      <div className="flex flex-col justify-center items-start mx-auto pb-16 max-w-3xl">
        <div className="grid md:grid-cols-2 gap-12 w-full">
          {groupsArray.map((group) => (
            <Group key={group} standings={standings} group={group} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Groups;

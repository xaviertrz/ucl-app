import { useQuery } from "react-query";

import Container from "../components/Container";
import Group from "../components/Group";
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";

import { api } from "../api";
import type { RawLeagueStandings } from "../types";

function Groups() {
  const groups = new Set<string>();
  let {
    data: league,
    isLoading,
    isError,
  } = useQuery<RawLeagueStandings[]>(["standings"], () => api.getStandings(), {
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
        <div className="flex flex-col justify-center mx-auto items-start pb-16 max-w-2xl">
          <h1 className="font-bold text-2xl tracking-tight mb-4 text-white">
            Something went wrong.
          </h1>
        </div>
      </Container>
    );
  }

  if (!league?.length) {
    return (
      <Container>
        <NotFound text="groups" />
      </Container>
    );
  }

  const standings = league[0].league.standings;
  for (let group of standings) {
    group.map((team) => groups.add(team.group));
  }
  const groupsArray = Array.from(groups).sort();
  return (
    <Container
      title="Groups"
      description="Current UEFA Champions League standings"
    >
      <div className="flex flex-col justify-center items-start mx-auto pb-16 max-w-2xl">
        <h1
          className="font-bold text-xl md:text-2xl mb-4 tracking-tight text-white"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          Groups
        </h1>

        <div className="flex flex-col gap-8 w-full">
          {groupsArray.map((group) => (
            <Group key={group} standings={standings!} group={group} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Groups;

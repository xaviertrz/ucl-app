import Container from "../components/Container";
import Group from "../components/Group";
import { RawLeagueStandings } from "../types";
import { api } from "../api";
import { useQuery } from "react-query";
import Spinner from "../components/Spinner";
import NotFound from "../components/NotFound";

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
        <div className="flex flex-col justify-center mx-auto items-start pb-16 max-w-3xl">
          <h1 className="font-bold text-4xl tracking-tight mb-4 text-white">
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
      <div className="flex flex-col justify-center items-start mx-auto pb-16 max-w-3xl">
        <h1 className="font-bold text-xl md:text-2xl mb-4 tracking-tight text-white">
          Groups
        </h1>
        <div className="grid md:grid-cols-2 gap-12 w-full transition delay-150">
          {groupsArray.map((group) => (
            <Group key={group} standings={standings!} group={group} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Groups;

import { getSimulationNext } from "@/data/backend";

import { CircularProgress } from "@mui/joy";

import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router-dom";
import { ScenarioPage } from "./ScenarioPage";
export const ScenarioPageFallback = () => {
  const { scenarioId } = useParams<{
    scenarioId: string;
  }>();

  if (scenarioId == null) {
    throw new Error("scenarioId is null");
  }

  const { data } = useQuery({
    queryKey: ["scenario", scenarioId],
    queryFn: async () => {
      return await getSimulationNext({
        scenario: Number(scenarioId),
      });
    },
  });
  if (data == null) {
    return <CircularProgress />;
  }
  return <ScenarioPage scenario={data} />;
};

import { AppPost, Scenario, SimulationResult } from "@/domain/models";
import { api } from "./api";

export interface PostSimulationJoinParams {
  user: string;
}
export const postSimulationJoin = async (
  params: PostSimulationJoinParams,
): Promise<void> => {
  await api.post("/api/simulation/join", {}, { params });
};

export interface GetSimulationStartParams {
  episode: number;
}
export const getSimulationStart = async (
  params: GetSimulationStartParams,
): Promise<Scenario> => {
  const res = await api.get("/api/simulation/start", { params: params });
  return res.data;
};

export interface GetSimulationChoiceParams {
  choice: number;
  user: string;
}

export interface GetSimulationChoiceRes {
  id: number;
  scenario: number;
  script: string;
  correct: boolean;
  correct_script: string;
}
export const getSimulationChice = async (params: GetSimulationChoiceParams) => {
  const res = await api.get<GetSimulationChoiceRes>("/api/simulation/choice", {
    params,
  });
  return res.data;
};

export interface GetSimulationNextParams {
  scenario: number;
}
export const getSimulationNext = async (params: GetSimulationNextParams) => {
  const res = await api.get<Scenario>("/api/simulation/next", {
    params,
  });
  return res.data;
};

export interface GetSimulationResultParams {
  user: string;
}

export const getSimulationResult = async (
  params: GetSimulationResultParams,
): Promise<SimulationResult> => {
  const res = await api.get<SimulationResult>("/api/simulation/result", {
    params,
  });
  return res.data;
};

export interface GetParentingSituationBoardRes {
  post: {
    title: string;
    subTitle: string;
    id: number;
  }[];
}
export const getParentingSituationBoard = async () => {
  const res = await api.get<GetParentingSituationBoardRes>(
    "/api/parenting-situation/board",
  );
  return res.data;
};

export const getParentingSituationPost = async (id: number) => {
  const res = await api.get<AppPost>("/api/parenting-situation/post", {
    params: { id },
  });
  return res.data;
};

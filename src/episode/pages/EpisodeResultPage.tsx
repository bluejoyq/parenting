import { AppHeader } from "@/common/components/AppHeader";
import { pagePaddingStyles, pageWrapperStyles } from "@/common/styles";
import { css } from "@emotion/react";
import { Box, Typography } from "@mui/joy";
import { EpisodeResultHeader } from "../components/EpisodeResultHeader";
import { Flex } from "@/common/components/Layout";
import { ResponsiveRadar } from "@nivo/radar";
import { AppButton } from "@/common/components/AppButton";
import { AppNavBar } from "@/common/components/AppNavBar";
import { useNavigate } from "react-router-dom";
import { EPISODE_PATH } from "@/common/constants/paths";
import { useMutation } from "@tanstack/react-query";
import { GetSimulationResultParams, getSimulationResult } from "@/data/backend";
import { useEffect } from "react";
import { useUserStore } from "@/common/stores/userStore";

const useMutateSimulationResult = () => {
  return useMutation({
    mutationFn: async (data: GetSimulationResultParams) => {
      return await getSimulationResult(data);
    },
  });
};
export const EpisodeResultPage = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();
  if (user == null) {
    throw new Error("user is null");
  }
  const { mutateAsync, data } = useMutateSimulationResult();

  useEffect(() => {
    mutateAsync({ user });
  }, []);
  return (
    <>
      <AppHeader title="에피소드 결과" />
      <Box
        css={[
          pageWrapperStyles,
          pagePaddingStyles,
          css`
            justify-content: start;
          `,
        ]}
      >
        <Box css={styles.titleBox}>
          <Typography css={styles.title}>학교 가는 날</Typography>
          <Typography css={styles.subTitle}>에피소드#1</Typography>
        </Box>
        <EpisodeResultHeader />
        <Box css={styles.chartBox}>
          <ResponsiveRadar
            data={[
              {
                skill: "사회성",
                value: data?.score_society,
              },
              {
                skill: "자기 통제",
                value: data?.score_control,
              },
              {
                skill: "상황 인지",
                value: data?.score_recognition,
              },
              {
                skill: "집중력",
                value: data?.score_concentration,
              },
            ]}
            keys={["value"]}
            indexBy={"skill"}
            borderColor="#42b753"
            gridShape="linear"
            colors={"rgba(150, 230, 161, 0.40)"}
            margin={{
              top: 40,
              right: 80,
              bottom: 40,
              left: 80,
            }}
            dotSize={0}
            maxValue={80}
          />
        </Box>
        <Flex />
        <AppButton
          onClick={() => {
            navigate(EPISODE_PATH);
          }}
        >
          홈으로 돌아가기
        </AppButton>
      </Box>
      <AppNavBar />
    </>
  );
};

const styles = {
  titleBox: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 8px;
  `,
  subTitle: css`
    color: #000;
    font-family: Avenir;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.3px;
    margin-bottom: 3px;
  `,
  title: css`
    color: #000;
    font-family: Avenir;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.3px;
    margin-bottom: 8px;
  `,
  chartBox: css`
    height: 280px;
    text-align: center;
    font-family: Avenir;
    font-size: 12px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.3px;
    width: 100%;
  `,
};

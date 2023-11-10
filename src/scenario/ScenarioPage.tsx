import { AppHeader } from "@/common/components/AppHeader";
import { AppNavBar } from "@/common/components/AppNavBar";
import { Flex } from "@/common/components/Layout";
import { pagePaddingStyles, pageWrapperStyles } from "@/common/styles";
import { Scenario } from "@/domain/models";
import { css } from "@emotion/react";
import { Box, Typography } from "@mui/joy";
import { ChoiceButton } from "./components/ChoiceButton";
import { useMutation } from "@tanstack/react-query";
import { GetSimulationChoiceParams, getSimulationChice } from "@/data/backend";
import { useUserStore } from "@/common/stores/userStore";
import { ScenarioResult } from "./components/ScenarioResult";
import { useNavigate } from "react-router-dom";
import { EPISODE_PATH, SCENARIO_PATH } from "@/common/constants/paths";

interface ScenarioPageProps {
  scenario: Scenario;
}

const useMutateSimulationChoice = () => {
  return useMutation({
    mutationFn: async (data: GetSimulationChoiceParams) => {
      return await getSimulationChice(data);
    },
  });
};
export const ScenarioPage = ({ scenario }: ScenarioPageProps) => {
  const { mutateAsync, data } = useMutateSimulationChoice();
  const navigate = useNavigate();
  const { user } = useUserStore();
  if (user == null) {
    throw new Error("user is null");
  }
  const handleChoice = (choice: number) => {
    mutateAsync({
      user: user,
      choice,
    });
  };

  const onNext = () => {
    if (scenario.end) {
      navigate(`${EPISODE_PATH}/1/result`);
      return;
    }
    navigate(`${EPISODE_PATH}/1/${SCENARIO_PATH}/${scenario.id}`);
  };
  return (
    <>
      <AppHeader title={"에피소드"} />
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
        <img src={scenario.illustration} css={styles.img} />
        <Typography css={styles.script}>{scenario.script}</Typography>

        {data == null ? (
          <>
            <Flex />
            <Box css={styles.choicesContainer}>
              <ChoiceButton onClick={() => handleChoice(1)}>
                {scenario.choice_1_script}
              </ChoiceButton>
              <ChoiceButton onClick={() => handleChoice(2)}>
                {scenario.choice_2_script}
              </ChoiceButton>
              <ChoiceButton onClick={() => handleChoice(3)}>
                {scenario.choice_3_script}
              </ChoiceButton>
              <ChoiceButton onClick={() => handleChoice(4)}>
                {scenario.choice_4_script}
              </ChoiceButton>
            </Box>
          </>
        ) : (
          <ScenarioResult
            script={data.script}
            onNext={onNext}
            isCorrect={data.correct}
            correctAnswer={data.correct_script}
          />
        )}
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
  title: css`
    color: #000;
    font-family: Avenir;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.3px;
  `,
  subTitle: css`
    color: #000;
    font-family: Avenir;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.3px;
  `,
  img: css`
    width: 100%;
  `,
  script: css`
    color: #000;
    font-family: Avenir;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.3px;
  `,
  choicesContainer: css`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 12px;
  `,
};

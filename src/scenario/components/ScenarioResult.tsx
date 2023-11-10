import { Box, Typography } from "@mui/joy";
import CorrectIcon from "@/common/assets/CorrectIcon.svg?react";
import WrongIcon from "@/common/assets/WrongIcon.svg?react";
import { css } from "@emotion/react";
import { Flex } from "@/common/components/Layout";
import { AppButton } from "@/common/components/AppButton";
interface ScenarioResultProps {
  isCorrect: boolean;
  script: string;
  onNext: () => void;
  correctAnswer: string;
}
export const ScenarioResult = ({
  isCorrect,
  script,
  onNext,
  correctAnswer,
}: ScenarioResultProps) => {
  return (
    <Box css={styles.container}>
      {isCorrect ? <CorrectIcon /> : <WrongIcon />}
      <Typography css={styles.title(isCorrect)}>{correctAnswer}</Typography>
      <Typography css={styles.script}>{script}</Typography>
      <Flex />
      <AppButton onClick={onNext}>다음 문제 풀기</AppButton>
    </Box>
  );
};

const styles = {
  container: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `,
  title: (isCorrect: boolean) => css`
    margin-top: 32px;
    color: ${isCorrect ? "#96e6a1" : "#B74242"};
    text-align: center;
    font-family: Avenir;
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.3px;
    margin-bottom: 12px;
  `,
  script: css`
    color: #000;
    text-align: center;
    font-family: Avenir;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.3px;
  `,
};

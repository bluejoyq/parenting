import { Box, Typography } from "@mui/joy";
import BearIcon from "../assets/bear.svg?react";
import { css } from "@emotion/react";

export const EpisodeResultHeader = () => {
  return (
    <Box css={styles.container}>
      <BearIcon />
      <Typography css={styles.title}>
        당신은 진정한 육아 마스터입니다.
      </Typography>
      <Typography css={styles.script}>
        아이에게 자신이 굉장히 중요한 존재임을 상기시키고 일시적인 분리로 인한
        불안함을 해소시켜주며 다시 만날 수 있다는 확신을 심어준다.
      </Typography>
    </Box>
  );
};

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `,
  title: css`
    margin-top: 32px;
    color: #42b752;
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

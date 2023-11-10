import { css } from "@emotion/react";
import { Box, Typography } from "@mui/joy";
import { ReactNode } from "react";

interface CardsProps {
  title: string;
  children: ReactNode;
}
export const Cards = ({ title, children }: CardsProps) => {
  return (
    <Box css={styles.box}>
      <Typography css={styles.subTitle}>{title}</Typography>
      <Box css={styles.subBox}>{children}</Box>
    </Box>
  );
};
const styles = {
  box: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;
  `,
  subBox: css`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
  `,
  subTitle: css`
    color: #000;
    font-family: Avenir;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.3px;
  `,
};

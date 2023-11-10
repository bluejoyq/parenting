import { css } from "@emotion/react";
import { Box, IconButton, Typography } from "@mui/joy";
import HomeIcon from "@/common/assets/HomeIcon.svg?react";
import { Link } from "react-router-dom";
import { EPISODE_PATH } from "../constants/paths";
import { ReactElement } from "react";
interface AppHeaderProps {
  title: string;
  suffix?: ReactElement[];
}
export const AppHeader = ({ title, suffix }: AppHeaderProps) => {
  return (
    <Box css={styles.headerBox}>
      <Link to={EPISODE_PATH} css={styles.icon}>
        <IconButton>
          <HomeIcon />
        </IconButton>
      </Link>
      <Typography css={styles.title}>{title}</Typography>
      <Box css={styles.suffixBox}>
        {suffix?.map((item, index) => <Box key={index}>{item}</Box>)}
      </Box>
    </Box>
  );
};

const styles = {
  headerBox: css`
    width: 100%;
    padding: 24px 16px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  icon: css`
    position: absolute;
    left: 24px;
  `,
  title: css`
    color: #000;
    text-align: center;
    font-family: Avenir;
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.3px;
  `,
  suffixBox: css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 12px;
  `,
};

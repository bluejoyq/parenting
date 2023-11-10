import { css } from "@emotion/react";
import { Box, IconButton, Typography } from "@mui/joy";
import DictionaryIcon from "@/common/assets/DictionaryIcon.svg?react";
import EpisodeIcon from "@/common/assets/EpisodeIcon.svg?react";
import ExamepleIcon from "@/common/assets/ExampleIcon.svg?react";
import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  DICTONARY_PATH,
  EPISODE_PATH,
  EXAMPLE_PATH,
} from "@/common/constants/paths";
export const AppNavBar = () => {
  return (
    <Box css={styles.navbar}>
      <NavbarItem to={EPISODE_PATH} icon={<EpisodeIcon />} label="에피소드" />
      <NavbarItem
        to={DICTONARY_PATH}
        icon={<DictionaryIcon />}
        label="육아 사전"
      />
      <NavbarItem
        to={EXAMPLE_PATH}
        icon={<ExamepleIcon />}
        label="상황별 예시"
      />
    </Box>
  );
};

interface NavbarItemProps {
  to: string;
  icon: ReactElement;
  label: string;
}
const NavbarItem = ({ icon, to, label }: NavbarItemProps) => {
  const location = useLocation();
  const isActive = location.pathname.search(to) != -1;
  return (
    <Link
      to={to}
      css={css`
        text-decoration: none;
      `}
    >
      <IconButton css={styles.navbarBtn(isActive)}>
        {icon}
        <Typography css={styles.navbarLabel(isActive)}>{label}</Typography>
      </IconButton>
    </Link>
  );
};

const styles = {
  navbar: css`
    width: 100%;
    height: 80px;
    border-radius: 20px 20px 0px 0px;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px -2px 12px 0px rgba(0, 0, 0, 0.12);
  `,
  navbarBtn: (active: boolean) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 6px;
    color: ${active ? "#96E6A1" : "#000"};
  `,
  navbarLabel: (active: boolean) => css`
    text-align: center;
    font-family: Avenir;
    font-size: 8px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.3px;
    color: ${active ? "#96E6A1" : "#000"};
  `,
};

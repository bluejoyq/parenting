import HomeIcon from "@/common/assets/HomeIcon.svg?react";
import { css } from "@emotion/react";
import { Box } from "@mui/joy";

interface AppLogoProps {
  className?: string;
}
export const AppLogo = ({ className }: AppLogoProps) => {
  return (
    <Box css={styles.iconBox} className={className}>
      <HomeIcon css={styles.icon} />
    </Box>
  );
};

const styles = {
  iconBox: css`
    border-radius: 24px;
    padding: 16px;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 22px;
  `,
  icon: css`
    width: 100%;
    height: 100%;
  `,
};

import { css } from "@emotion/react";
import { Button, ButtonProps } from "@mui/joy";

interface AppButtonProps extends ButtonProps {}

export const AppButton = (props: AppButtonProps) => {
  return <Button {...props} css={styles.btn} />;
};

const styles = {
  btn: css`
    padding: 15px;
    flex-shrink: 0;
    border-radius: 16px;
    background: #96e6a1;
    box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.12);
    width: 100%;
    color: #fff;
    text-align: center;
    font-family: Avenir;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.3px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background: #67b171;
    }
    &:active {
      background: #42b752;
    }
  `,
};

import { css } from "@emotion/react";
import { Button, ButtonProps } from "@mui/joy";

interface AppButtonProps extends ButtonProps {}

export const ChoiceButton = (props: AppButtonProps) => {
  return <Button {...props} css={styles.btn} />;
};

const styles = {
  btn: css`
    padding: 15px;
    border-radius: 16px;
    background: #fff;
    box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.12);
    width: 100%;
    color: #000;
    text-align: center;
    font-family: Avenir;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.3px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background: #96e6a1;
    }
    &:active {
      background: #42b752;
    }
  `,
};

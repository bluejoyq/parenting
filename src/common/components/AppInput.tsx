import { css } from "@emotion/react";
import { Input, InputProps } from "@mui/joy";
import { forwardRef } from "react";

interface AppInputProps extends InputProps {}
export const AppInput = forwardRef<HTMLInputElement, AppInputProps>(
  (props: AppInputProps, ref) => {
    return <Input {...props} css={styles.input} ref={ref} />;
  },
);
const styles = {
  input: css`
    border-radius: 100px;
    background: #fbfbfb;
    width: 100%;
    max-width: 290px;
    color: #000;
    text-align: center;
    font-family: Avenir;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.6px;
    border: none;
    border-width: 1px;
    input {
      text-align: center;
    }
  `,
};

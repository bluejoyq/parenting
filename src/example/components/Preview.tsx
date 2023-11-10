import { EXAMPLE_PATH } from "@/common/constants/paths";
import { css } from "@emotion/react";
import { Button, Typography } from "@mui/joy";
import { Link } from "react-router-dom";

interface PreviewProps {
  title: string;
  subTitle: string;
  id: number;
}
export const Preview = ({ title, subTitle, id }: PreviewProps) => {
  return (
    <Link
      to={`${EXAMPLE_PATH}/${id}`}
      css={css`
        text-decoration: none;
        width: 100%;
      `}
    >
      <Button variant="plain" css={styles.btn}>
        <Typography css={styles.title}>{title}</Typography>
        <Typography css={styles.subTitle}>{subTitle}</Typography>
      </Button>
    </Link>
  );
};

const styles = {
  btn: css`
    border-radius: 16px;
    width: 100%;
    padding: 16px;
    background: #fff;
    box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.12);
    &:hover {
      background: #96e6a1;
    }
    &:active {
      background: #42b752;
    }
    display: flex;
    flex-direction: column;
    align-items: start;
  `,
  title: css`
    color: #000;
    font-family: Avenir;
    font-size: 14px;
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
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.3px;
  `,
};

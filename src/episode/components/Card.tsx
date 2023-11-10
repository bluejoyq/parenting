import { css } from "@emotion/react";
import { Box, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
interface CardProps {
  imageSrc: string;
  title: string;
  subTitle: string;
  to: string;
}
export const Card = ({ imageSrc, title, subTitle, to }: CardProps) => {
  return (
    <Link
      to={to}
      css={css`
        text-decoration: none;
        flex: 1;
      `}
    >
      <Box css={styles.cardBox}>
        <img src={imageSrc} css={styles.cardImage} />
        <Box css={styles.cardDetail}>
          <Typography css={styles.subTitle}>{subTitle}</Typography>
          <Typography css={styles.title}>{title}</Typography>
        </Box>
      </Box>
    </Link>
  );
};

const styles = {
  cardDetail: css`
    padding: 14px 20px;
  `,
  cardBox: css`
    border-radius: 24px;
    width: 100%;
    height: 232px;
    box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.12);
  `,

  cardImage: css`
    width: 100%;
    height: 160px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 24px 24px 0px 0px;
  `,
  subTitle: css`
    color: #000;
    font-family: Avenir;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.3px;
  `,
  title: css`
    color: #000;
    font-family: Avenir;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.3px;
  `,
};

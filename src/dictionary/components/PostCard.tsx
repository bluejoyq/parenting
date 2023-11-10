import { css } from "@emotion/react";
import { Box, Typography } from "@mui/joy";

interface PostCardProps {
  title: string;
  content: string;
  tags: string[];
  view: number;
}
export const PostCard = ({ title, content, tags, view }: PostCardProps) => {
  return (
    <Box css={styles.postCard}>
      <Box css={styles.mainBox}>
        <Box css={styles.headerBox}>
          <Typography css={styles.title}>{title}</Typography>
          <Typography css={styles.view}>조회수 {view}</Typography>
        </Box>
        <Typography css={styles.content}>{content}</Typography>
      </Box>
      <Box
        css={css`
          width: 100%;
          border: 0.5px #42b752 solid;
        `}
      />
      <Box css={styles.tagBox}>
        <Typography
          css={css`
            color: #888;
            font-family: Avenir;
            font-size: 12px;
            font-style: normal;
            font-weight: 800;
            line-height: normal;
            letter-spacing: -0.6px;
          `}
        >
          카테고리
        </Typography>
        {tags.map((tag) => (
          <Typography
            css={css`
              color: #42b752;
              font-family: Avenir;
              font-size: 12px;
              font-style: normal;
              font-weight: 800;
              line-height: normal;
              letter-spacing: -0.6px;
            `}
          >
            #{tag}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

const styles = {
  postCard: css`
    width: 100%;
    border-radius: 20px;
    border: 1.5px solid rgba(66, 183, 82, 0.6);
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
  `,
  title: css`
    color: #000;
    font-family: Avenir;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.8px;
  `,
  content: css`
    color: #000;
    font-family: Avenir;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.6px;
  `,
  view: css`
    color: #888;
    text-align: right;
    font-family: Avenir;
    font-size: 12px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.6px;
  `,
  mainBox: css`
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,
  headerBox: css`
    display: flex;
    justify-content: space-between;
  `,
  tagBox: css`
    display: flex;
    flex-direction: row;
    gap: 4px;
    padding: 12px 20px;
  `,
};

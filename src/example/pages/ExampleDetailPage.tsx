import { AppHeader } from "@/common/components/AppHeader";
import { AppNavBar } from "@/common/components/AppNavBar";
import { pageWrapperStyles, pagePaddingStyles } from "@/common/styles";
import { getParentingSituationPost } from "@/data/backend";
import { AppPost } from "@/domain/models";
import { css } from "@emotion/react";
import { Box, CircularProgress, Typography } from "@mui/joy";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
export const ExampleDetailPageFallback = () => {
  const { id } = useParams<{
    id: string;
  }>();
  if (id == null) {
    throw new Error("exampleId is null");
  }
  const { data } = useQuery({
    queryKey: ["tips", id],
    queryFn: async () => {
      return await getParentingSituationPost(Number(id));
    },
  });

  if (data == null) {
    return <CircularProgress />;
  }
  return <ExampleDetailPage post={data} />;
};

const ExampleDetailPage = ({ post }: { post: AppPost }) => {
  return (
    <>
      <AppHeader title="상황별 예시" />
      <Box
        css={[
          pageWrapperStyles,
          pagePaddingStyles,
          css`
            justify-content: start;
          `,
        ]}
      >
        <Box css={styles.titleBox}>
          <Typography css={styles.title}>{post.title}</Typography>
          <Typography css={styles.subTitle}>{post.subTitle}</Typography>
          <Typography css={styles.content}>{post.detail}</Typography>
        </Box>
        <iframe
          width={"100%"}
          height={"auto"}
          css={css`
            aspect-ratio: 16 / 9;
          `}
          src={`https://www.youtube.com/embed/${post.good_example_video_link}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
        <Typography css={styles.content}>{post.good_example_detail}</Typography>
        <iframe
          width={"100%"}
          height={"auto"}
          css={css`
            aspect-ratio: 16 / 9;
          `}
          src={`https://www.youtube.com/embed/${post.bad_example_video_link}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
        <Typography css={styles.content}>{post.bad_example_detail}</Typography>
      </Box>
      <AppNavBar />
    </>
  );
};

const styles = {
  titleBox: css`
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4px;
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
  content: css`
    margin-top: 12px;
    color: #000;
    font-family: Avenir;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.3px;
  `,
};

import { AppHeader } from "@/common/components/AppHeader";
import { pagePaddingStyles, pageWrapperStyles } from "@/common/styles";
import { getParentingSituationBoard } from "@/data/backend";
import { css } from "@emotion/react";
import { Box } from "@mui/joy";
import { useQuery } from "@tanstack/react-query";
import { Preview } from "../components/Preview";

const useTipsQuery = () => {
  return useQuery({
    queryKey: ["tips"],
    queryFn: async () => {
      return await getParentingSituationBoard();
    },
  });
};
export const ExamplePage = () => {
  const { data } = useTipsQuery();
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
        <img src={"images/exampleBanner.png"} css={styles.banner} />
        {data?.post.map(({ title, subTitle, id }) => {
          return <Preview id={id} title={title} subTitle={subTitle} />;
        })}
      </Box>
    </>
  );
};

const styles = {
  banner: css`
    width: 100%;
    height: auto;
    aspect-ratio: 350 / 90;
    border-radius: 16px;
  `,
};

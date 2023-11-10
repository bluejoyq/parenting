import { AppHeader } from "@/common/components/AppHeader";
import { pagePaddingStyles, pageWrapperStyles } from "@/common/styles";
import { Box } from "@mui/joy";
import { EpisodeBanner } from "../components/EpisodeBanner";
import { AppNavBar } from "@/common/components/AppNavBar";
import { Cards } from "../components/Cards";
import { Card } from "../components/Card";
import { EPISODE_PATH } from "@/common/constants/paths";
import { css } from "@emotion/react";

export const EpisodePage = () => {
  return (
    <>
      <AppHeader title="에피소드" />
      <EpisodeBanner />
      <Box
        css={[
          pageWrapperStyles,
          pagePaddingStyles,
          css`
            justify-content: start;
          `,
        ]}
      >
        <Cards title={"지금 뜨고 있는 에피소드"}>
          <Card
            imageSrc={"images/ep1.png"}
            title={"학교 가는 날"}
            subTitle={"에피소드 #1"}
            to={`${EPISODE_PATH}/1`}
          />
        </Cards>
        <Cards title={"다음 에피소드"}>
          <Card
            imageSrc={"images/ep2.png"}
            title={"주말 가족 나들이"}
            subTitle={"에피소드 #2"}
            to={`${EPISODE_PATH}/1`}
          />
          <Card
            imageSrc={"images/ep3.png"}
            title={"친구와 다툰 아이"}
            subTitle={"에피소드 #3"}
            to={`${EPISODE_PATH}/1`}
          />
        </Cards>
      </Box>
      <AppNavBar />
    </>
  );
};

import { AppButton } from "@/common/components/AppButton";
import { AppHeader } from "@/common/components/AppHeader";
import { AppNavBar } from "@/common/components/AppNavBar";
import { Flex } from "@/common/components/Layout";
import { useUserStore } from "@/common/stores/userStore";
import { pagePaddingStyles, pageWrapperStyles } from "@/common/styles";
import {
  EPISODE_PATH,
  LOGIN_PATH,
  SCENARIO_PATH,
} from "@/common/constants/paths";
import { css } from "@emotion/react";
import { Box, Typography } from "@mui/joy";
import { useNavigate } from "react-router-dom";

export const EpisodeDetailPage = () => {
  const { user } = useUserStore();
  const navigate = useNavigate();
  const handleBtn = () => {
    const goalPath = `${EPISODE_PATH}/1/${SCENARIO_PATH}/0`;
    if (user == null) {
      navigate(`${LOGIN_PATH}?to=${goalPath}`);
      return;
    }
    navigate(goalPath);
  };
  return (
    <>
      <AppHeader title={"에피소드 1"} />
      <Box css={[pageWrapperStyles, pagePaddingStyles]}>
        <img
          src={"/images/ep1_main.png"}
          css={css`
            width: 100%;
          `}
        />
        <Box css={styles.detailBox}>
          <Typography css={styles.subTitle}>에피소드 #1</Typography>
          <Typography css={styles.title}>학교 가는 날</Typography>
          <Typography css={styles.desc}>
            아침에 일어나서 칭얼대는 아이를 준비시켜서 학교에 보내야 하는 당신
            .. 아이를 달래서 무사히 학교에 보내야 합니다.
            <br />
            <br />
            <span css={styles.subDesc}>
              당신에게는 여자 아이가 두 명 있습니다. 그 중 큰 딸(8세)을 학교에
              보내야 할 시간입니다. 아이를 준비시키는 과정에서 문제가 생겼네요.
              딸을 학교에 보내봅시다.
            </span>
          </Typography>
        </Box>
        <Flex />
        <AppButton onClick={handleBtn}>
          {user == null ? "로그인 후 시작하기" : "시작하기"}
        </AppButton>
      </Box>
      <AppNavBar />
    </>
  );
};

const styles = {
  detailBox: css`
    padding: 20px;
    display: flex;
    flex-direction: column;
  `,

  subTitle: css`
    color: #000;
    font-family: Avenir;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.3px;
    margin-bottom: 3px;
  `,
  title: css`
    color: #000;
    font-family: Avenir;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.3px;
    margin-bottom: 8px;
  `,

  desc: css`
    color: #000;
    font-family: Avenir;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.3px;
  `,

  subDesc: css`
    color: #888;
  `,
};

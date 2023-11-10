import { AppLogo } from "@/common/components/AppLogo";
import { EPISODE_PATH } from "@/common/constants/paths";
import { css } from "@emotion/react";
import { Typography } from "@mui/joy";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate(EPISODE_PATH);
    }, 1000);
  }, [navigate]);
  return (
    <>
      <AppLogo
        css={css`
          width: 110px;
          height: 110px;
        `}
      />
      <Typography css={styles.title}>금시초문</Typography>
      <Typography css={styles.desc}>
        금쪽이 육아 시뮬레이션
        <br />
        초보 부모가 겪는 문제 해결 서비스
      </Typography>
    </>
  );
};

const styles = {
  title: css`
    color: #42b752;
    text-align: center;
    font-family: Avenir;
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.9px;
    margin-bottom: 40px;
  `,
  desc: css`
    color: #42b752;
    text-align: center;
    font-family: Avenir;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.8px;
    margin-bottom: 40px;
  `,
};

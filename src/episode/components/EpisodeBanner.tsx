import BannerImg from "@/episode/assets/episodeBanner.svg?react";
import { css } from "@emotion/react";
export const EpisodeBanner = () => {
  return (
    <BannerImg
      css={css`
        width: 100%;
        height: auto;
        aspect-ratio: 390/76;
      `}
    />
  );
};

import { AppInput } from "@/common/components/AppInput";
import { AppLogo } from "@/common/components/AppLogo";
import { AppNavBar } from "@/common/components/AppNavBar";
import { pagePaddingStyles, pageWrapperStyles } from "@/common/styles";
import { HOME_PATH } from "@/common/constants/paths";
import { css } from "@emotion/react";
import { Box } from "@mui/joy";
import { useNavigate, useSearchParams } from "react-router-dom";
import CheckIcon from "@/common/assets/CheckIcon.svg?react";
import { useForm } from "react-hook-form";
import { Flex } from "@/common/components/Layout";
import { AppButton } from "@/common/components/AppButton";
import { useMutation } from "@tanstack/react-query";
import { postSimulationJoin } from "@/data/backend";
import { toast } from "react-toastify";
import { useUserStore } from "@/common/stores/userStore";
interface UserForm {
  user: string;
}
export const LoginPage = () => {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();
  const { mutateAsync } = useMutation({
    mutationFn: async (data: UserForm) => {
      return await postSimulationJoin(data);
    },
  });
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<UserForm>();
  const to = searchParams.get("to") ?? HOME_PATH;
  const { setUser } = useUserStore();
  const onSubmit = (data: UserForm) => {
    mutateAsync(data)
      .then(() => {
        setUser(data.user);
        navigate(to);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  return (
    <>
      <form
        css={[pageWrapperStyles, pagePaddingStyles]}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Flex />
        <AppLogo
          css={css`
            width: 72px;
            height: 72px;
          `}
        />
        <Box css={styles.inputBox}>
          <AppInput
            placeholder="사용할 아이디를 입력해주세요"
            {...register("user", {
              required: true,
              minLength: 2,
              maxLength: 10,
            })}
            css={css`
              flex-shrink: 0;
            `}
          />
          {isValid && <CheckIcon css={styles.suffixIcon} />}
        </Box>
        <Flex />
        <AppButton disabled={!isValid} type="submit">
          시작하기
        </AppButton>
      </form>
      <AppNavBar />
    </>
  );
};

const styles = {
  inputBox: css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 290px;
  `,
  suffixIcon: css`
    position: absolute;
    right: 6px;
  `,
};

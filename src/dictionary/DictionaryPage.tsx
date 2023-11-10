import { AppHeader } from "@/common/components/AppHeader";
import { AppNavBar } from "@/common/components/AppNavBar";
import { pagePaddingStyles, pageWrapperStyles } from "@/common/styles";
import { Box, IconButton, Input, Modal } from "@mui/joy";
import DictionaryBanner from "./assets/dictionaryBanner.svg?react";
import { css } from "@emotion/react";
import { PostCard } from "./components/PostCard";
import SearchIcon from "@/common/assets/searchIcon.svg?react";
import { useState } from "react";
const mockDatas = [
  {
    title: "아이가 욕을 했을 때",
    content:
      "아이가 평소에 안 하던 욕을 하거나 비속어를 쓴 상황입니다. 이때 부모는 너무 크게 반응하지 말아야 합니다. 단순히 어디선가 들은 것을 따라 한 것일 수도 있는데, 이때 지나치게 나무라면 자칫 인격까지 모독할 수 있습니다. 아이가 설령 나쁜 말을 했다고 해도 그걸 듣는 부모는 잠시 멈추고 생각해야 합니다. 아이가 어디에서 들었을지 말입니다. 그런 뒤에 조용히 아이를 불러서 말합니다. '가치야(*아이 이름), 아까 사용했던 말 있잖아. 평소에 네가 쓰지 않는 말이었는데, 그 말을 들어서 엄마(*상황에 맞는 호칭)가 깜짝 놀랐어'라고 말이지요. 그러면서 '다른 사람에게 상처를 주는 말이야', '듣는 사람은 기분이 나쁘대'라며 '다음부턴 사용하지 않도록 하자'고 이야기해 줘야 합니다. 이때 주의할 점은 아이가 한 욕설이나 비속어 등을 똑같이 반복해 말하지 않는 것입니다. 부모가 '너 뭐라고? '씨X'라고 했지? 그거 나쁜 말이야!'라고 한다면 어떨까요. 부모도 나쁜 말을 내뱉은 게 됩니다. 아이가 부모에게 듣는 욕은 음성이 더 크게 들리고, 뇌리에 강하게 박힐 수 있습니다.",
    tags: ["욕", "비속어"],
    view: 156,
  },
  {
    title: "아이 때문에 기분이 안좋을때, 감정을 표현하는 방법",
    content:
      "불쾌한 감정은 명확한 언어로 이름을 붙여 표현해야 한다. 짜증난다는 가급적 사용을 자제해야 한다. 추상적인 감정의 표현은 제대로 된 감정 표현 방법이 아니고, 감정의 정체를 알지 못한채로 내버려 뒀기 때문이다. 아이는 그런 부모를 보며 제대로 된 감정 표현 방법을 배우지 못하고, 감정 제어력 마저 부족해질 수 있다.",
    tags: ["표현", "불쾌"],
    view: 95,
  },
  {
    title: "아이에게 말할 때, 접속사를 사용하는 방법",
    content:
      "접속사는 적절하게 사용하되, 남용하지 않는다. 앞 문장과 뒤 문장이 반대되는 관계를 나타내는 역접 접속사는 신중히 사용하여야 한다. 아무리 좋은 내용이라 하더라도 부정적인 느낌을 전달하기 때문이다. 아이를 훈육할 때는 부정적인 말보다는 긍정적인 말을 한다. 부정적인 말은 오히려 설득 효과가 떨어진다. 오히려 반대로 하고 싶은 모순적인 심리가 작동한다. 이를 아이러니 효과라고 한다.",
    tags: ["표현", "접속사"],
    view: 41,
  },
  {
    title: "아이가 잘못했을 때",
    content:
      "아이가 잘못 했을때는 사람이 아닌 행동을 지적한다. 행동이 아닌 아이 자체를 지적하면 아이의 존재를 부정하게 될 수 있다. 이로 인해서 아이가 자신의 존재 자체에 수치심을 느낄 수 있다. 또한, 잘못을 지적할 때도 '그랬지' 라는 말도 좋지 않다. 이보다는 왜 그렇게 됐는지를 알고 있는지를 물어보는 방식을 사용하는 것이 좋다. ",
    tags: ["잘못", "지적"],
    view: 139,
  },
];
export const DictionaryPage = () => {
  const [search, setSearch] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const handleToggleSearch = () => {
    setIsSearching((prev) => !prev);
  };
  return (
    <>
      <Modal
        open={isSearching}
        css={css`
          padding: 20px;
        `}
      >
        <Box css={styles.searchContainer}>
          <Box css={styles.searchBox}>
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={"검색어를 입력하세요"}
              css={styles.input}
            />
            <IconButton
              variant="soft"
              css={styles.iconBtn}
              onClick={handleToggleSearch}
            >
              <SearchIcon />
            </IconButton>
          </Box>
          <Box>
            {mockDatas
              .filter(({ content }) => content.search(search) != -1)
              .map((data) => (
                <PostCard {...data} />
              ))}
          </Box>
        </Box>
      </Modal>
      <AppHeader
        title={"육아 사전"}
        suffix={[
          <IconButton onClick={handleToggleSearch}>
            <SearchIcon />
          </IconButton>,
        ]}
      />
      <DictionaryBanner css={styles.banner} />
      <Box
        css={[
          pageWrapperStyles,
          pagePaddingStyles,
          css`
            justify-content: start;
          `,
        ]}
      >
        {mockDatas
          .filter(({ content }) => content.search(search) != -1)
          .map((data) => (
            <PostCard {...data} />
          ))}
      </Box>
      <AppNavBar />
    </>
  );
};

const styles = {
  banner: css`
    width: 100%;
    height: auto;
    aspect-ratio: 390/76;
  `,
  searchBox: css`
    display: grid;
    grid-template-columns: 1fr auto;
  `,

  input: css`
    border-radius: 20px;
    border: 1.5px solid rgba(66, 183, 82, 0.6);
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.12);
    font-family: Avenir;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.3px;
    padding: 20px;
  `,
  iconBtn: css`
    background-color: transparent;
    &:hover {
      background-color: transparent;
      transform: scale(1.1);
    }
    &:active {
      transform: scale(1.2);
    }
  `,
  searchContainer: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
};

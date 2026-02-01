import styled from "@emotion/styled";
import ActionButton from "./ActionButton";

export type PageKey = "roadmap" | "videos" | "products";

type TopNavProps = {
  activePage: PageKey;
  onNavigate: (page: PageKey) => void;
};

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
`;

export default function TopNav({ activePage, onNavigate }: TopNavProps) {
  return (
    <Nav aria-label="페이지 이동">
      <ActionButton
        type="button"
        $active={activePage === "roadmap"}
        onClick={() => onNavigate("roadmap")}
      >
        주차별 로드맵
      </ActionButton>
      <ActionButton
        type="button"
        $active={activePage === "videos"}
        onClick={() => onNavigate("videos")}
      >
        주차별 영상
      </ActionButton>
      <ActionButton
        type="button"
        $active={activePage === "products"}
        onClick={() => onNavigate("products")}
      >
        추천 상품
      </ActionButton>
    </Nav>
  );
}

import { logo } from "../../public";
import { topNavItems } from "../../constants/navigation";
import {
  ActionsResponsive,
  Brand,
  BrandSub,
  BrandTitle,
  Logo,
  NavButton,
  NavResponsive,
  SearchResponsive,
  SearchInput,
  TopbarResponsive,
} from "../AppShell/AppShell.styled";

export default function TopBar() {
  return (
    <TopbarResponsive>
      <Brand>
        <Logo aria-hidden="true">
          <img alt="흑백 요리사 로고" src={logo} />
        </Logo>
        <div>
          <BrandTitle>흑백 요리사</BrandTitle>
          <BrandSub>셰프 디렉토리</BrandSub>
        </div>
      </Brand>
      <NavResponsive aria-label="상단 내비게이션">
        {topNavItems.map((item) => (
          <NavButton type="button" key={item}>
            {item}
          </NavButton>
        ))}
      </NavResponsive>
      <ActionsResponsive>
        <SearchResponsive aria-label="셰프 검색">
          <span aria-hidden="true">⌕</span>
          <SearchInput aria-label="닉네임이나 시그니처 검색" placeholder="닉네임이나 시그니처를 검색" />
        </SearchResponsive>
      </ActionsResponsive>
    </TopbarResponsive>
  );
}

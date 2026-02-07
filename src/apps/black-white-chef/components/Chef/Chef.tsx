import {
  ChefActions,
  ChefColumn,
  ChefHero,
  ChefText,
  ChefTitle,
  Eyebrow,
  IconPill,
  Pill,
} from "../AppShell/AppShell.styled";

export default function ChefSection() {
  return (
    <ChefHero>
      <ChefColumn>
        <Eyebrow>셰프 디렉토리</Eyebrow>
        <ChefTitle>셰프 디렉토리</ChefTitle>
        <ChefText>프로 셰프 100명, 2개의 팀, 1명의 승자.</ChefText>
      </ChefColumn>
      <ChefActions>
        <Pill type="button" $active>
          전체 클래스
        </Pill>
        <Pill type="button">생존</Pill>
        <Pill type="button">인기</Pill>
        <IconPill type="button">⚙</IconPill>
      </ChefActions>
    </ChefHero>
  );
}

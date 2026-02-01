import { useEffect } from "react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import PageLayout from "../common/PageLayout";
import SectionCard from "../common/SectionCard";
import ThemeToggle from "../common/ThemeToggle";
import TopNav from "../common/TopNav";
import {
  activeWeekAtom,
  filteredWeeksByTrimesterAtom,
  loadWeeksAtom,
  selectedTrimesterAtom,
  weeksLoadedAtom,
} from "../../atom/roadmapAtom";
import { themeAtom } from "../../atom/themeAtom";
import ActionButton from "../common/ActionButton";
import {
  Disclaimer,
  FilterRow,
  Header,
  HeaderRow,
  SectionTitle,
  Subtitle,
  TagRow,
  Title,
  WeekSummary,
} from "../PregnancyRoadmap/PregnancyRoadmap.styled";
import { getTrimesterLabel } from "../PregnancyRoadmap/PregnancyRoadmap.utils";
import {
  ProductCard,
  ProductGrid,
  SectionHeading,
  SectionNote,
  VideoCard,
  VideoGrid,
  VideoList,
  VideoMeta,
  WeekNav,
  WeekNavButton,
  WeekNavInner,
  WeekBlock,
} from "./WeekVideoPage.styled";

const trimesterOptions: Array<1 | 2 | 3 | "all"> = ["all", 1, 2, 3];

export default function WeekVideoPage() {
  const [theme, setTheme] = useAtom(themeAtom);
  const weeksLoaded = useAtomValue(weeksLoadedAtom);
  const loadWeeks = useSetAtom(loadWeeksAtom);
  const [selectedTrimester, setSelectedTrimester] = useAtom(selectedTrimesterAtom);
  const weeks = useAtomValue(filteredWeeksByTrimesterAtom);
  const activeWeek = useAtomValue(activeWeekAtom);

  useEffect(() => {
    if (!weeksLoaded) {
      loadWeeks();
    }
  }, [loadWeeks, weeksLoaded]);

  const toggleTheme = () => setTheme((current) => (current === "light" ? "dark" : "light"));

  return (
    <PageLayout>
      <SectionCard>
        <Header>
          <HeaderRow>
            <Title>주차별 영상</Title>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </HeaderRow>
          <TopNav />
          <Subtitle>
            주차별로 도움이 되는 유튜브 영상과 관련 상품을 모아두었어요. 영상 아래에
            쿠팡 파트너스 링크를 연결할 수 있도록 공간을 마련해두었습니다.
          </Subtitle>
        </Header>
      </SectionCard>

      <WeekNav aria-label="주차 바로가기">
        <WeekNavInner>
          {Array.from({ length: Math.ceil(weeks.length / 4) }, (_, index) => {
            const startWeek = weeks[index * 4]?.week;
            const endWeek = weeks[index * 4 + 3]?.week ?? weeks[weeks.length - 1]?.week;

            if (!startWeek || !endWeek) {
              return null;
            }

            return (
              <WeekNavButton key={`week-range-${startWeek}`} href={`#week-${startWeek}`}>
                {startWeek}~{endWeek}주차
              </WeekNavButton>
            );
          })}
        </WeekNavInner>
      </WeekNav>

      <SectionCard>
        <Header>
          <SectionTitle>분기 선택</SectionTitle>
          <FilterRow>
            {trimesterOptions.map((option) => (
              <ActionButton
                key={option}
                $active={selectedTrimester === option}
                onClick={() => setSelectedTrimester(option)}
              >
                {getTrimesterLabel(option)}
              </ActionButton>
            ))}
          </FilterRow>
        </Header>
      </SectionCard>

      <SectionCard>
        <SectionTitle>선택된 주차</SectionTitle>
        <TagRow>
          <SectionNote>{getTrimesterLabel(selectedTrimester)}</SectionNote>
          <WeekSummary>{activeWeek ? `${activeWeek.week}주차` : "주차를 선택하세요"}</WeekSummary>
        </TagRow>
      </SectionCard>

      <SectionCard>
        <SectionTitle>주차별 영상</SectionTitle>
        <VideoGrid>
          {weeks.map((week) => (
            <WeekBlock key={week.week} id={`week-${week.week}`}>
              <SectionHeading>{week.title}</SectionHeading>
              <VideoList>
                {week.videos.map((video) => (
                  <VideoCard key={video.title} href={video.url} target="_blank" rel="noreferrer">
                    <span>{video.title}</span>
                    <VideoMeta>유튜브에서 검색 결과 열기</VideoMeta>
                  </VideoCard>
                ))}
              </VideoList>
              <SectionHeading>관련 구매 상품</SectionHeading>
              <SectionNote>
                쿠팡 파트너스 링크로 교체할 수 있도록 placeholder를 넣어두었습니다.
              </SectionNote>
              <ProductGrid>
                {week.relatedProducts.map((product) => (
                  <ProductCard
                    key={`${week.week}-${product.name}`}
                    href={product.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{product.name}</span>
                    <VideoMeta>쿠팡 파트너스 링크</VideoMeta>
                  </ProductCard>
                ))}
              </ProductGrid>
            </WeekBlock>
          ))}
        </VideoGrid>
      </SectionCard>

      <SectionCard>
        <SectionTitle>의료 정보 안내</SectionTitle>
        <Disclaimer>
          이 콘텐츠는 일반적인 정보 제공을 위한 참고 자료이며, 개인의 건강 상태나 의료적 판단을
          대체하지 않습니다. 증상이나 진료가 필요하다고 느끼면 의료 전문가와 상담하세요.
        </Disclaimer>
      </SectionCard>
    </PageLayout>
  );
}

import { filterCuisineItems } from "../../constants/navigation";
import {
  FilterBlock,
  FilterLabel,
  FilterList,
  FilterToggle,
  LiveButton,
  LiveDescription,
  LiveTitle,
  Panel,
  PanelTitle,
  Pill,
  PillCount,
  Selection,
  SidebarResponsive,
} from "../AppShell/AppShell.styled";

export default function Sidebar() {
  return (
    <SidebarResponsive>
      <Panel>
        <PanelTitle>선택</PanelTitle>
        <Selection>
          <Pill type="button" $active>
            화이트 스푼 <PillCount>20</PillCount>
          </Pill>
          <Pill type="button">
            블랙 스푼 <PillCount>80</PillCount>
          </Pill>
        </Selection>
      </Panel>

      <Panel>
        <PanelTitle>필터</PanelTitle>
        <FilterBlock as="fieldset">
          <legend>요리</legend>
          <FilterToggle type="button" aria-expanded="true">
            요리
            <span aria-hidden="true">▾</span>
          </FilterToggle>
          <FilterList>
            {filterCuisineItems.map((item) => (
              <FilterLabel key={item} htmlFor={`cuisine-${item}`}>
                <input id={`cuisine-${item}`} type="checkbox" />
                <span>{item}</span>
              </FilterLabel>
            ))}
          </FilterList>
        </FilterBlock>
        <FilterBlock>
          <FilterToggle type="button" aria-expanded="false">
            전문 분야
            <span aria-hidden="true">▾</span>
          </FilterToggle>
        </FilterBlock>
        <FilterBlock>
          <FilterToggle type="button" aria-expanded="false">
            상태
            <span aria-hidden="true">▾</span>
          </FilterToggle>
        </FilterBlock>
      </Panel>

      <Panel>
        <PanelTitle>라이브 업데이트</PanelTitle>
        <LiveTitle>파이널 에피소드 공개</LiveTitle>
        <LiveDescription>최신 라인업과 하이라이트를 확인하세요.</LiveDescription>
        <LiveButton type="button" aria-label="넷플릭스에서 보기">
          넷플릭스에서 보기
        </LiveButton>
      </Panel>
    </SidebarResponsive>
  );
}

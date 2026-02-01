import { useMemo } from "react";
import { atom, useAtom } from "jotai";
import styled from "@emotion/styled";

const milestoneAtom = atom(1);

const Page = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 48px 24px;
`;

const Card = styled.section`
  width: min(720px, 100%);
  background: #111827;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.5);
  display: grid;
  gap: 24px;
`;

const Title = styled.h1`
  font-size: clamp(28px, 4vw, 40px);
  margin: 0;
  color: #f8fafc;
`;

const Subtitle = styled.p`
  margin: 0;
  color: #94a3b8;
  line-height: 1.6;
`;

const BadgeRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const Badge = styled.span`
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid #1f2937;
  background: #0b1220;
  color: #cbd5f5;
  font-size: 14px;
`;

const Controls = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const Button = styled.button`
  background: #6366f1;
  color: #f8fafc;
  border: none;
  border-radius: 12px;
  padding: 12px 18px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

const OutlineButton = styled(Button)`
  background: transparent;
  border: 1px solid #475569;
  color: #e2e8f0;
`;

const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #e2e8f0;
`;

const ProgressBar = styled.div`
  flex: 1;
  height: 8px;
  background: #1e293b;
  border-radius: 999px;
  overflow: hidden;
`;

const ProgressFill = styled.div<{ width: number }>`
  height: 100%;
  width: ${({ width }) => width}%;
  background: linear-gradient(90deg, #38bdf8, #6366f1);
  transition: width 0.2s ease;
`;

export default function App() {
  const [milestone, setMilestone] = useAtom(milestoneAtom);
  const progress = useMemo(() => Math.min(100, milestone * 20), [milestone]);

  return (
    <Page>
      <Card>
        <div>
          <Title>로드맵 시작 준비 완료</Title>
          <Subtitle>
            Vite + React + TypeScript 기본 셋업에 Jotai 상태 관리와 Emotion
            스타일링을 연결했어요. 이제 바로 기능을 추가해 보세요.
          </Subtitle>
        </div>
        <BadgeRow>
          <Badge>Vite</Badge>
          <Badge>React</Badge>
          <Badge>TypeScript</Badge>
          <Badge>Jotai</Badge>
          <Badge>Emotion</Badge>
        </BadgeRow>
        <Progress>
          <span>Milestone {milestone}</span>
          <ProgressBar>
            <ProgressFill width={progress} />
          </ProgressBar>
          <span>{progress}%</span>
        </Progress>
        <Controls>
          <Button onClick={() => setMilestone((value) => value + 1)}>
            다음 단계
          </Button>
          <OutlineButton onClick={() => setMilestone(1)}>
            리셋
          </OutlineButton>
        </Controls>
      </Card>
    </Page>
  );
}

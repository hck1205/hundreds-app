import { Helmet } from "react-helmet-async";
import PregnancyRoadmap from "../../components/PregnancyRoadmap";

export default function RoadmapPage() {
  return (
    <>
      <Helmet>
        <title>임신 로드맵 | 주차별 체크리스트</title>
        <meta
          name="description"
          content="임신 주차별로 필요한 체크리스트와 정보를 한눈에 볼 수 있는 로드맵입니다."
        />
        <meta property="og:title" content="임신 로드맵 | 주차별 체크리스트" />
        <meta
          property="og:description"
          content="임신 주차별로 필요한 체크리스트와 정보를 한눈에 볼 수 있는 로드맵입니다."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <PregnancyRoadmap />
    </>
  );
}

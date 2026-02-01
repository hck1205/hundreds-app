import { Helmet } from "react-helmet-async";
import WeekVideoPage from "../../components/WeekVideoPage";

export default function VideosPage() {
  return (
    <>
      <Helmet>
        <title>주차별 영상 | 임신 주수별 추천</title>
        <meta
          name="description"
          content="임신 주차별로 도움이 되는 영상과 추천 상품을 확인하세요."
        />
        <meta property="og:title" content="주차별 영상 | 임신 주수별 추천" />
        <meta
          property="og:description"
          content="임신 주차별로 도움이 되는 영상과 추천 상품을 확인하세요."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <WeekVideoPage />
    </>
  );
}

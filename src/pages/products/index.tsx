import { Helmet } from "react-helmet-async";
import RecommendationPage from "../../components/RecommendationPage";

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title>추천 상품 | 임신·신생아 준비물</title>
        <meta
          name="description"
          content="임신 중과 신생아 시기에 필요한 추천 상품을 카테고리별로 확인하세요."
        />
        <meta property="og:title" content="추천 상품 | 임신·신생아 준비물" />
        <meta
          property="og:description"
          content="임신 중과 신생아 시기에 필요한 추천 상품을 카테고리별로 확인하세요."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <RecommendationPage />
    </>
  );
}

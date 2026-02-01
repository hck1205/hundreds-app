import { Helmet } from "react-helmet-async";
import ChecklistPage from "../../components/ChecklistPage";

export default function Checklist() {
  return (
    <>
      <Helmet>
        <title>출산 준비 체크리스트 | 필수 준비물</title>
        <meta
          name="description"
          content="출산 준비를 위한 체크리스트를 카테고리별로 확인하세요."
        />
        <meta property="og:title" content="출산 준비 체크리스트 | 필수 준비물" />
        <meta
          property="og:description"
          content="출산 준비를 위한 체크리스트를 카테고리별로 확인하세요."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <ChecklistPage />
    </>
  );
}

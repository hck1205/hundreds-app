import { Helmet } from "react-helmet-async";
import GuestbookPage from "../../components/GuestbookPage";

export default function Guestbook() {
  return (
    <>
      <Helmet>
        <title>방명록 & Q&A | 함께 나누는 공간</title>
        <meta
          name="description"
          content="질문, 답변, 자유 댓글을 남길 수 있는 방명록 공간입니다."
        />
        <meta property="og:title" content="방명록 & Q&A | 함께 나누는 공간" />
        <meta
          property="og:description"
          content="질문, 답변, 자유 댓글을 남길 수 있는 방명록 공간입니다."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <GuestbookPage />
    </>
  );
}

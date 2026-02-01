import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const RoadmapPage = lazy(() => import("./pages/roadmap"));
const VideosPage = lazy(() => import("./pages/videos"));
const ProductsPage = lazy(() => import("./pages/products"));
const ChecklistPage = lazy(() => import("./pages/checklist"));
const RecoveryPage = lazy(() => import("./pages/recovery"));
const NewbornSchedulePage = lazy(() => import("./pages/newborn-schedule"));
const FaqPage = lazy(() => import("./pages/faq"));
const GuestbookPage = lazy(() => import("./pages/guestbook"));

export default function App() {
  return (
    <Suspense fallback={<div aria-live="polite">페이지를 불러오는 중...</div>}>
      <Routes>
        <Route path="/" element={<RoadmapPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/checklist" element={<ChecklistPage />} />
        <Route path="/recovery" element={<RecoveryPage />} />
        <Route path="/newborn-schedule" element={<NewbornSchedulePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/guestbook" element={<GuestbookPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

import { Navigate, Route, Routes } from "react-router-dom";
import RoadmapPage from "./pages/roadmap";
import VideosPage from "./pages/videos";
import ProductsPage from "./pages/products";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RoadmapPage />} />
      <Route path="/videos" element={<VideosPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

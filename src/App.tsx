import { useState } from "react";
import { PregnancyRoadmap, WeekVideoPage } from "./components";
import type { RoadmapPageProps } from "./components/PregnancyRoadmap/PregnancyRoadmap.types";

export default function App() {
  const [page, setPage] = useState<RoadmapPageProps["activePage"]>("roadmap");

  if (page === "videos") {
    return <WeekVideoPage activePage={page} onNavigate={setPage} />;
  }

  return <PregnancyRoadmap activePage={page} onNavigate={setPage} />;
}

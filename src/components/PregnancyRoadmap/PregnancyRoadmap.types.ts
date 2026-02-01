export type WeekSection = {
  key:
    | "needs"
    | "preparation"
    | "nutrients"
    | "tests"
    | "avoidFoods"
    | "recommendedExercises";
  title: string;
  items: string[];
};

export type RoadmapPageProps = {
  activePage: "roadmap" | "videos";
  onNavigate: (page: "roadmap" | "videos") => void;
};

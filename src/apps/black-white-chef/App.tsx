import { useRoutes } from "react-router-dom";
import BlackWhiteChefLayout from "./AppLayout";
import ChefListPage from "./pages/list";
import ChefDetailPage from "./pages/detail";

export default function BlackWhiteChefApp() {
  return useRoutes([
    {
      element: <BlackWhiteChefLayout />,
      children: [
        { index: true, element: <ChefListPage /> },
        { path: "chefs/:chefSlug", element: <ChefDetailPage /> },
      ],
    },
  ]);
}

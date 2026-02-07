import { Outlet } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import { Shell } from "./components/AppShell/AppShell.styled";

export default function BlackWhiteChefLayout() {
  return (
    <Shell>
      <TopBar />
      <Outlet />
    </Shell>
  );
}

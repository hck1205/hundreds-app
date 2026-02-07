import chefs from "../../data/chefs";
import ChefGrid from "../../components/ChefGrid/ChefGrid";
import ChefSection from "../../components/Chef/Chef";
import Pagination from "../../components/Pagination/Pagination";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Content, MainResponsive, PageMeta } from "../../components/AppShell/AppShell.styled";

export default function ChefListPage() {
  return (
    <MainResponsive>
      <Sidebar />
      <Content>
        <ChefSection />
        <ChefGrid chefs={chefs} />
        <Pagination />
        <PageMeta>10명 중 5명 표시</PageMeta>
      </Content>
    </MainResponsive>
  );
}

import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Shell = styled.div`
  min-height: 100vh;
  background: radial-gradient(circle at top left, #2b1010, #0b0b0b 55%);
  color: #f5f3ee;
  font-family: "Barlow Condensed", "Space Grotesk", "Segoe UI", sans-serif;
`;

export const Topbar = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 24px;
  padding: 24px 32px;
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(10, 10, 10, 0.85);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
`;

export const Brand = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Logo = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: #e9322d;
  display: grid;
  place-items: center;
  font-weight: 700;
  letter-spacing: 0.1em;

  img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    object-fit: cover;
  }
`;

export const BrandTitle = styled.p`
  margin: 0;
  font-weight: 600;
  text-transform: uppercase;
`;

export const BrandSub = styled.p`
  margin: 0;
  font-size: 12px;
  color: #b7b0aa;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export const NavButton = styled.button`
  background: transparent;
  border: none;
  color: #d8d3cd;
  font-size: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Search = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  min-width: 220px;
`;

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: #e7e4df;
  outline: none;
  width: 100%;
  font-size: 13px;
`;

export const VisuallyHidden = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`;

export const User = styled.div`
  display: grid;
  line-height: 1.2;
  text-align: right;
`;

export const UserName = styled.span`
  font-size: 12px;
  text-transform: uppercase;
`;

export const UserRole = styled.span`
  font-size: 11px;
  color: #b7b0aa;
`;

export const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e9322d, #7b1e1b);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 28px;
  padding: 24px 32px 56px;
`;

export const Sidebar = styled.aside`
  display: grid;
  gap: 20px;
`;

export const Panel = styled.section`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 18px;
`;

export const PanelTitle = styled.p`
  margin: 0 0 12px;
  font-size: 12px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #b7b0aa;
`;

export const Selection = styled.div`
  display: grid;
  gap: 10px;
`;

export const Pill = styled("button", {
  shouldForwardProp: (prop) => prop !== "$active",
})<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: ${({ $active }) => ($active ? "#f1f3f7" : "rgba(255, 255, 255, 0.06)")};
  color: #f5f3ee;
  border: 1px solid transparent;
  padding: 8px 12px;
  border-radius: 12px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  ${({ $active }) =>
    $active &&
    `
      color: #1a1a1a;
      border-color: rgba(255, 255, 255, 0.2);
    `}

  &:hover {
    background: rgba(255, 255, 255, 0.16);
    color: #ffffff;
  }
`;

export const PillLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #f1f3f7;
  color: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 8px 12px;
  border-radius: 12px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    color: #111111;
  }
`;

export const PillCount = styled.span`
  display: inline-flex;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 999px;
  padding: 2px 8px;
  font-size: 11px;
`;

export const PillIcon = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
`;

export const FilterBlock = styled.div`
  display: grid;
  gap: 10px;
  margin-bottom: 16px;
`;

export const FilterToggle = styled.button`
  background: transparent;
  border: none;
  color: #f5f3ee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 12px;
  padding: 0;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
`;

export const FilterList = styled.div`
  display: grid;
  gap: 8px;
`;

export const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #c7c0ba;

  input {
    accent-color: #e9322d;
  }
`;

export const LiveTitle = styled.h3`
  margin: 0 0 8px;
`;

export const LiveDescription = styled.p`
  margin: 0 0 16px;
  color: #c5bfb9;
`;

export const LiveButton = styled.button`
  background: #e9322d;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 8px 12px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    filter: brightness(1.05);
  }
`;

export const Content = styled.section`
  display: grid;
  gap: 24px;
`;

export const ChefHero = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
`;

export const Eyebrow = styled.p`
  margin: 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: #e9322d;
  font-size: 12px;
`;

export const ChefTitle = styled.h1`
  margin: 0 0 8px;
  font-size: 32px;
`;

export const ChefText = styled.p`
  margin: 0;
  max-width: 520px;
  color: #c6c0ba;
`;

export const ChefActions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
`;

export const CardLink = styled.a`
  border-radius: 18px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: grid;
  grid-template-rows: 240px auto;
  color: inherit;
  text-decoration: none;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(233, 50, 45, 0.6);
  }
`;

export const CardMedia = styled.div`
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  min-height: 240px;
`;

export const Tag = styled.span<{ tone?: "light" | "dark" }>`
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: ${({ tone }) =>
    tone === "light" ? "rgba(255, 255, 255, 0.85)" : "rgba(0, 0, 0, 0.5)"};
  color: ${({ tone }) => (tone === "light" ? "#111" : "#f5f3ee")};
`;

export const CardBody = styled.div`
  padding: 14px 16px 18px;
  display: grid;
  gap: 6px;
`;

export const CardMeta = styled.p`
  margin: 0;
  font-size: 11px;
  color: #d2cbc4;
  text-transform: uppercase;
  letter-spacing: 0.15em;
`;

export const CardName = styled.h3`
  margin: 0;
  font-size: 18px;
`;

export const CardSignature = styled.p`
  margin: 0;
  color: #bdb7b0;
  font-size: 12px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  color: #a9a39c;
  font-size: 12px;
`;

export const Pagination = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  color: #bdb7b0;
`;

export const PaginationButton = styled("button", {
  shouldForwardProp: (prop) => prop !== "$active",
})<{ $active?: boolean }>`
  background: ${({ $active }) => ($active ? "#e9322d" : "rgba(255, 255, 255, 0.06)")};
  border: none;
  color: ${({ $active }) => ($active ? "white" : "inherit")};
  padding: 6px 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.16);
    color: #ffffff;
  }
`;

export const PageMeta = styled.div`
  text-align: center;
  color: #8f8882;
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`;

export const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
`;

export const DetailHeader = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 220px) 1fr;
  gap: 20px;
  align-items: center;
  padding: 20px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const DetailAvatar = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 16px;
  background-size: cover;
  background-position: center;
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

export const DetailInfo = styled.div`
  display: grid;
  gap: 8px;
`;

export const DetailTitle = styled.h2`
  margin: 0;
  font-size: 28px;
`;

export const DetailSubtitle = styled.p`
  margin: 0;
  color: #c6c0ba;
`;

export const SectionList = styled.section`
  display: grid;
  gap: 18px;
`;

export const SectionBlock = styled.section`
  padding: 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: grid;
  gap: 12px;
`;

export const ProgramsBlock = styled(SectionBlock)`
  max-height: 240px;
  overflow: auto;
`;

export const SectionTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: #b7b0aa;
`;

export const SectionRow = styled.div`
  display: grid;
  gap: 6px;
`;

export const SectionLabel = styled.span`
  font-size: 12px;
  color: #a9a39c;
`;

export const SectionValue = styled.span`
  font-size: 14px;
  color: #f5f3ee;
`;

export const MapBox = styled.div`
  width: 100%;
  height: 220px;
  border-radius: 12px;
  background: #0f0f0f;
  overflow: hidden;
`;

export const RestaurantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
`;

export const RestaurantCard = styled.div`
  padding: 14px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: grid;
  gap: 10px;
`;

export const RestaurantHeader = styled.div`
  display: grid;
  gap: 4px;
`;

export const RestaurantName = styled.span`
  font-size: 14px;
  color: #f5f3ee;
`;

export const RestaurantMeta = styled.span`
  font-size: 12px;
  color: #a9a39c;
`;

export const MapButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.08);
  color: #f5f3ee;
  text-decoration: none;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.16);
    color: #ffffff;
  }
`;

export const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #f5f3ee;
  text-decoration: none;
`;

export const ChefColumn = styled.div`
  display: grid;
  gap: 8px;
`;

export const IconPill = styled(Pill)`
  width: 36px;
  height: 36px;
  justify-content: center;
  padding: 0;
`;

export const MainResponsive = styled(Main)`
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 720px) {
    padding: 16px;
  }
`;

export const TopbarResponsive = styled(Topbar)`
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    justify-items: start;
  }

  @media (max-width: 720px) {
    padding: 16px;
    gap: 12px;
  }
`;

export const NavResponsive = styled(Nav)`
  @media (max-width: 1100px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export const ActionsResponsive = styled(Actions)`
  @media (max-width: 1100px) {
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SearchResponsive = styled(Search)`
  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const SidebarResponsive = styled(Sidebar)`
  @media (max-width: 1100px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
`;

export const CardResponsive = styled(CardLink)`
  @media (max-width: 720px) {
    grid-template-rows: 200px auto;
  }
`;

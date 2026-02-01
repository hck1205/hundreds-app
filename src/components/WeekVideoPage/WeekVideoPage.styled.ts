import styled from "@emotion/styled";

export const VideoGrid = styled.div`
  display: grid;
  gap: 16px;
`;

export const WeekNav = styled.nav`
  position: sticky;
  top: 12px;
  z-index: 20;
  padding: 10px 12px;
  margin-bottom: 16px;
  border-radius: 18px;
  border: 1px solid var(--border);
  background: var(--bg);
  box-shadow: var(--shadow);
`;

export const WeekNavInner = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px;
`;

export const WeekNavButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid var(--border);
  color: var(--text);
  text-decoration: none;
  font-size: 15px;
  justify-content: center;
  background: var(--card-muted);
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-1px);
  }
`;

export const WeekBlock = styled.section`
  display: grid;
  gap: 12px;
  padding: 18px;
  border-radius: 18px;
  border: 1px solid var(--border);
  background: var(--card);
  box-shadow: var(--shadow);
  scroll-margin-top: 120px;
`;

export const VideoList = styled.div`
  display: grid;
  gap: 10px;
`;

export const VideoCard = styled.a`
  display: grid;
  gap: 4px;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid var(--border);
  text-decoration: none;
  color: var(--text);
  background: var(--card-muted);
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-1px);
  }
`;

export const VideoMeta = styled.span`
  color: var(--muted);
  font-size: 12px;
`;

export const ProductGrid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
`;

export const ProductCard = styled.a`
  display: grid;
  gap: 6px;
  padding: 12px;
  border-radius: 12px;
  border: 1px dashed var(--border);
  text-decoration: none;
  color: var(--text);
  background: var(--card-muted);
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-1px);
  }
`;

export const SectionHeading = styled.h3`
  margin: 0;
  font-size: 16px;
  color: var(--text);
`;

export const SectionNote = styled.p`
  margin: 0;
  color: var(--muted);
  font-size: 13px;
`;

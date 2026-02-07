import { Pagination as PaginationWrap, PaginationButton } from "../AppShell/AppShell.styled";

type PaginationProps = {
  pages?: number[];
  activePage?: number;
};

export default function Pagination({ pages = [1, 2, 3], activePage = 1 }: PaginationProps) {
  return (
    <PaginationWrap as="nav" aria-label="페이지네이션">
      <PaginationButton type="button" aria-label="이전 페이지">이전</PaginationButton>
      {pages.map((page) => (
        <PaginationButton
          type="button"
          key={page}
          $active={page === activePage}
          aria-current={page === activePage ? "page" : undefined}
        >
          {page}
        </PaginationButton>
      ))}
      <span>…</span>
      <PaginationButton type="button">10</PaginationButton>
      <PaginationButton type="button" aria-label="다음 페이지">다음</PaginationButton>
    </PaginationWrap>
  );
}

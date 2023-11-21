import { PaginationProps } from './Pagination.types';

export const Pagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  const renderPageNumber = (page: number) => {
    return (
      <button key={page} onClick={() => onPageChange(page)} className={`${page === currentPage && 'text-primaryBlue'}`}>
        {page}
      </button>
    );
  };

  const paginationItems = [];

  if (totalPages <= 6) {
    // If total pages are 6 or less, show all pages
    for (let page = 1; page <= totalPages; page++) {
      paginationItems.push(renderPageNumber(page));
    }
  } else {
    // If total pages are more than 6
    if (currentPage <= 2) {
      // If on page 1 or 2
      for (let page = 1; page <= 3; page++) {
        paginationItems.push(renderPageNumber(page));
      }
      paginationItems.push(<span key="dots">…</span>);
      for (let page = totalPages - 2; page <= totalPages; page++) {
        paginationItems.push(renderPageNumber(page));
      }
    } else if (currentPage >= 3 && currentPage < totalPages - 5) {
      // If on page 3
      for (let page = currentPage - 1; page <= currentPage + 1; page++) {
        paginationItems.push(renderPageNumber(page));
      }
      paginationItems.push(<span key="dots">…</span>);
      for (let page = totalPages - 2; page <= totalPages; page++) {
        paginationItems.push(renderPageNumber(page));
      }
    } else if (currentPage >= totalPages - 5) {
      // If on one of the last 6 pages
      for (let page = totalPages - 5; page <= totalPages; page++) {
        paginationItems.push(renderPageNumber(page));
      }
    }
  }

  return (
    <nav className="flex gap-4 text-sm font-semibold">
      <button
        onClick={() => onPageChange(1)}
        className={`${currentPage === 1 && 'text-darkGray'}`}
        disabled={currentPage === 1 || totalPages === 1}
      >
        First
      </button>
      <ul className="flex gap-4">{paginationItems}</ul>

      <button
        onClick={() => onPageChange(totalPages)}
        className={`${currentPage === totalPages && 'text-darkGray'}`}
        disabled={currentPage === totalPages || totalPages === 1}
      >
        Last
      </button>
    </nav>
  );
};

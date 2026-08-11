interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
}

const DOTS = "...";

function getPageRange(current: number, total: number, siblingCount: number) {
  const totalNumbers = siblingCount * 2 + 5;
  if (total <= totalNumbers) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const leftSibling = Math.max(current - siblingCount, 1);
  const rightSibling = Math.min(current + siblingCount, total);
  const showLeftDots = leftSibling > 2;
  const showRightDots = rightSibling < total - 1;

  if (!showLeftDots && showRightDots) {
    const leftRange = Array.from(
      { length: 3 + siblingCount * 2 },
      (_, i) => i + 1,
    );
    return [...leftRange, DOTS, total];
  }

  if (showLeftDots && !showRightDots) {
    const rightRange = Array.from(
      { length: 3 + siblingCount * 2 },
      (_, i) => total - (3 + siblingCount * 2) + i + 1,
    );
    return [1, DOTS, ...rightRange];
  }

  const middleRange = Array.from(
    { length: rightSibling - leftSibling + 1 },
    (_, i) => leftSibling + i,
  );
  return [1, DOTS, ...middleRange, DOTS, total];
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getPageRange(currentPage, totalPages, siblingCount);

  return (
    <div className="flex items-center gap-1 text-sm">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-1.5 py-0.75 rounded-xs disclaimer-text disabled:opacity-40 disabled:cursor-not-allowed bg-soft-stone cursor-pointer"
      >
        Previous
      </button>

      {pages.map((page, idx) =>
        page === DOTS ? (
          <span key={`dots-${idx}`} className="px-2 text-gray-400">
            {DOTS}
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page as number)}
            className={`w-8 h-6 rounded-xs disclaimer-text flex items-center justify-center cursor-pointer ${
              page === currentPage
                ? "bg-focus-blue text-white"
                : " bg-soft-stone"
            }`}
          >
            {page}
          </button>
        ),
      )}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-1.5 py-0.75 rounded-xs disclaimer-text disabled:opacity-40 disabled:cursor-not-allowed bg-soft-stone cursor-pointer"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;

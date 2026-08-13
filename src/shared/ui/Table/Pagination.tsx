interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
}

import { getPageRange } from "./utility/getPageRange";

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getPageRange(currentPage, totalPages, siblingCount);
  console.log(pages);

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

      {pages.map((page, index) =>
        page === "..." ? (
          <span key={`dots-${index}`} className="px-2 text-gray-400">
            {"..."}
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

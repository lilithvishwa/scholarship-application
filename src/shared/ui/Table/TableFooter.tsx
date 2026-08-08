import Pagination from "./Pagination";

interface TableFooterProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageSize: number;
  onPageSizeChange: (size: number) => void;
  pageSizeOptions?: number[];
  totalEntries: number;
  startIndex: number;
  endIndex: number;
}

function TableFooter({
  currentPage,
  totalPages,
  onPageChange,
  pageSize,
  onPageSizeChange,
  pageSizeOptions = [8, 16, 24, 50],
  totalEntries,
  startIndex,
  endIndex,
}: TableFooterProps) {
  return (
    <div className="absolute bottom-24  flex items-center w-[96%] justify-between border border-hairline px-2 py-3 disclaimer-text">
      <div className="flex items-center gap-3">
        <span>Rows per sheet</span>
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="border border-hairline rounded-xs px-1 py-0.5  focus:outline-none"
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <span>
          {startIndex}-{endIndex} of {totalEntries} entries
        </span>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default TableFooter;

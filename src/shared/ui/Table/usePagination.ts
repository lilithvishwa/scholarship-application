import { useMemo, useState } from "react";

interface UsePaginationOptions<T> {
  data: T[];
  initialPageSize?: number;
}

export function usePagination<T>({
  data,
  initialPageSize = 8,
}: UsePaginationOptions<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const totalEntries = data.length;
  const totalPages = Math.max(1, Math.ceil(totalEntries / pageSize));
  const safePage = Math.min(currentPage, totalPages);

  const paginatedData = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, safePage, pageSize]);

  const startIndex = totalEntries === 0 ? 0 : (safePage - 1) * pageSize + 1;
  const endIndex = Math.min(safePage * pageSize, totalEntries);

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  return {
    currentPage: safePage,
    pageSize,
    totalPages,
    totalEntries,
    startIndex,
    endIndex,
    paginatedData,
    onPageChange: setCurrentPage,
    onPageSizeChange: handlePageSizeChange,
  };
}

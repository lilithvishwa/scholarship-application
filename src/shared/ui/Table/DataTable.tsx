import Table from "./Table";
import type { Column } from "./Table";
import TableFooter from "./TableFooter";
import { usePagination } from "./hook/usePagination";

export interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  rowKey: (row: T) => string | number;
  initialPageSize?: number;
  pageSizeOptions?: number[];
  rowHeight?: number;
  headerHeight?: number;
}

function DataTable<T>({
  columns,
  data,
  rowKey,
  initialPageSize = 8,
  pageSizeOptions,
  rowHeight,
  headerHeight,
}: DataTableProps<T>) {
  const {
    paginatedData,
    currentPage,
    totalPages,
    pageSize,
    totalEntries,
    startIndex,
    endIndex,
    onPageChange,
    onPageSizeChange,
  } = usePagination({ data, initialPageSize });

  console.log();

  return (
    <Table
      columns={columns}
      data={paginatedData}
      rowKey={rowKey}
      visibleRows={pageSize}
      rowHeight={rowHeight}
      headerHeight={headerHeight}
      footer={
        <TableFooter
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          pageSize={pageSize}
          onPageSizeChange={onPageSizeChange}
          pageSizeOptions={pageSizeOptions}
          totalEntries={totalEntries}
          startIndex={startIndex}
          endIndex={endIndex}
        />
      }
    />
  );
}

export default DataTable;

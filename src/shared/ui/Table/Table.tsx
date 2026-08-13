import React from "react";
import Pill from "../Badge/Pill";

export interface Column<T> {
  key: keyof T;
  header: string;
  width?: string;
  align?: "left" | "center" | "end";
  badge?: boolean;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  rowKey: (row: T) => string | number;
  footer?: React.ReactNode;
  visibleRows?: number;
  rowHeight?: number; // px — measure your actual row height (py-4 row ≈ 53px)
  headerHeight?: number; // px — measure your actual header height (py-3 ≈ 45px)
}

function Table<T>({
  columns,
  data,
  rowKey,
  footer,
  visibleRows = 8,
  rowHeight = 57,
  headerHeight = 45,
}: TableProps<T>) {
  const bodyAreaHeight = visibleRows * rowHeight + headerHeight;

  return (
    <>
      <div className="border border-hairline overflow-hidden">
        {/* Reserves space for `visibleRows` rows. Scrolls internally only if data exceeds that. */}
        <div
          className="overflow-y-auto scrollbar-hide"
          style={{ height: bodyAreaHeight }}
        >
          <table className="w-full table-fixed border-collapse">
            <thead className="bg-card-border sticky top-0 z-10">
              {/*<tr className="border-b border-hairline">*/}
              <tr className=" ">
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className={`px-6 py-3 body ${column.width ?? ""}  text-${column.align ?? ""}`}
                  >
                    {column.header}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={rowKey(row)} className="border-b border-hairline ">
                  {columns.map((column) => (
                    // <td key={String(column.key)} className="px-6 py-4">
                    //   {column.render
                    //     ? column.render(row[column.key], row)
                    //     : String(row[column.key] ?? "")}
                    // </td>
                    <td
                      key={String(column.key)}
                      className={`px-6 py-4 text-${column.align ?? ""}`}
                    >
                      {column.render ? (
                        column.render(row[column.key], row)
                      ) : column.badge ? (
                        <Pill status={String(row[column.key] ?? "")} />
                      ) : (
                        String(row[column.key] ?? "")
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {footer}
      </div>
    </>
  );
}

export default Table;

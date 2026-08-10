import React from "react";

export interface Column<T> {
  key: keyof T;
  header: string;
  width?: string;
  align?: "left" | "center" | "right";
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  rowKey: (row: T) => string | number;
  footer?: React.ReactNode;
}

function Table<T>({ columns, data, rowKey, footer }: TableProps<T>) {
  return (
    <div className="p-8">
      <table className="w-full border border-gray-300 table-fixed border-collapse">
        <thead className="bg-gray-100">
          <tr className="border-b border-gray-300">
            {columns.map((column) => (
              <td
                key={String(column.key)}
                className={`px-6 py-3 body ${column.width ?? ""}`}
              >
                {column.header}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={rowKey(row)} className="border-b border-gray-300">
              {columns.map((column) => (
                <td key={String(column.key)} className="px-6 py-4">
                  {column.render
                    ? column.render(row[column.key], row)
                    : String(row[column.key] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {footer}
    </div>
  );
}

export default Table;

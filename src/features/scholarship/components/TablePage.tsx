// import Pill from "@/shared/ui/Badge/Pill";
// import Table from "./Table";

// const columns = [
//   {
//     key: "id",
//     header: "ID",
//     width: "w-35",
//   },
//   {
//     key: "name",
//     header: "NAME",
//     width: "w-40",
//   },
//   {
//     key: "email",
//     header: "EMAIL",
//     width: "w-40",
//   },
//   {
//     key: "role",
//     header: "ROLE",
//     width: "w-35",
//   },
//   {
//     key: "createdon",
//     header: "CREATED ON ",
//     width: "w-40",
//   },

//   {
//     key: "status",
//     header: "STATUS",
//     width: "w-30",
//     render: (value: string) => <Pill status={value as string} />,
//   },
//   {
//     key: "lastlogin",
//     header: "LAST LOGIN",
//     width: "w-40",
//   },
// ];

// const data = [
//   {
//     id: "SETN-SLP-2341",
//     name: "Test Account",
//     email: "test@gmail.com",
//     role: "Student",
//     createdon: "Sep 15, 2025 - 11:00 AM",
//     status: "Pending",
//     lastlogin: "Sep 15, 2025 - 11:00 AM",
//   },
//   {
//     id: "SETN-SLP-2341",
//     name: "Test Account",
//     email: "test@gmail.com",
//     role: "Volunteer",
//     createdon: "Sep 15, 2025 - 11:00 AM",
//     status: "Active",
//     lastlogin: "Sep 15, 2025 - 11:00 AM",
//   },
//   {
//     id: "SETN-SLP-2341",
//     name: "Test Account",
//     email: "test@gmail.com",
//     role: "Admin",
//     createdon: "Sep 15, 2025 - 11:00 AM",
//     status: "Suspended",
//     lastlogin: "Sep 15, 2025 - 11:00 AM",
//   },
// ];

// function TablePage() {
//   return <Table columns={columns} data={data} rowKey={(row) => row.id} />;
// }

// export default TablePage;

import Pill from "@/shared/ui/Badge/Pill";
import Table from "@/shared/ui/Table/Table";
import TableFooter from "@/shared/ui/Table/TableFooter";
import { usePagination } from "@/shared/ui/Table/usePagination";

const columns = [
  { key: "id", header: "ID", width: "w-35" },
  { key: "name", header: "NAME", width: "w-40" },
  { key: "email", header: "EMAIL", width: "w-40" },
  { key: "role", header: "ROLE", width: "w-35" },
  { key: "createdon", header: "CREATED ON ", width: "w-40" },
  {
    key: "status",
    header: "STATUS",
    width: "w-30",
    render: (value: string) => <Pill status={value as string} />,
  },
  { key: "lastlogin", header: "LAST LOGIN", width: "w-40" },
];

const data = [
  {
    id: "SETN-USR-2341",
    name: "Test Account",
    email: "test@gmail.com",
    role: "Student",
    createdon: "Sep 15, 2025 - 11:00 AM",
    status: "Pending",
    lastlogin: "-",
  },
  {
    id: "SETN-ADN-0001",
    name: "RDJ",
    email: "example@gmail.com",
    role: "Admin",
    createdon: "Sep 15, 2025 - 11:00 AM",
    status: "Active",
    lastlogin: "Sep 15, 2025 - 11:00 AM",
  },
  {
    id: "SETN-VLR-6723",
    name: "Thor",
    email: "crishemsoth@marvel.com",
    role: "Volunteer",
    createdon: "Sep 15, 2025 - 11:00 AM",
    status: "Active",
    lastlogin: "Sep 15, 2025 - 11:00 AM",
  },
  {
    id: "SETN-USR-0923",
    name: "Peter Parker",
    email: "tomholland@marvel.com",
    role: "Student",
    createdon: "Sep 15, 2025 - 11:00 AM",
    status: "Suspended",
    lastlogin: "Sep 15, 2025 - 11:00 AM",
  },
  {
    id: "SETN-USR-9872",
    name: "ARUL S",
    email: "arulsampathcyr@gmail.com",
    role: "Student",
    createdon: "Sep 15, 2025 - 11:00 AM",
    status: "Deactivated",
    lastlogin: "Sep 15, 2025 - 11:00 AM",
  },
];

function TablePage() {
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
  } = usePagination({ data, initialPageSize: 8 });

  return (
    <Table
      columns={columns}
      data={paginatedData}
      rowKey={(row) => row.id}
      footer={
        <TableFooter
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          pageSize={pageSize}
          onPageSizeChange={onPageSizeChange}
          totalEntries={totalEntries}
          startIndex={startIndex}
          endIndex={endIndex}
        />
      }
    />
  );
}

export default TablePage;

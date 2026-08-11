import DataTable from "@/shared/ui/Table/DataTable";
import type { Column } from "@/shared/ui/Table/Table";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdon: string;
  status: string;
  lastlogin: string;
}

const columns: Column<User>[] = [
  { key: "id", header: "ID", width: "w-35" },
  { key: "name", header: "NAME", width: "w-40" },
  { key: "email", header: "EMAIL", width: "w-40" },
  { key: "role", header: "ROLE", width: "w-35", badge: true, align: "center" },
  { key: "createdon", header: "CREATED ON", width: "w-40" },
  {
    key: "status",
    header: "STATUS",
    width: "w-30",
    badge: true,
  },
  { key: "lastlogin", header: "LAST LOGIN", width: "w-40" },
];

const data: User[] = [
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
    id: "SETN-USR-2341",
    name: "Test Account",
    email: "test@gmail.com",
    role: "volunteer",
    createdon: "Sep 15, 2025 - 11:00 AM",
    status: "Pending",
    lastlogin: "-",
  },
  {
    id: "SETN-USR-2341",
    name: "Test Account",
    email: "test@gmail.com",
    role: "admin",
    createdon: "Sep 15, 2025 - 11:00 AM",
    status: "Pending",
    lastlogin: "-",
  },
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
    id: "SETN-USR-2341",
    name: "Test Account",
    email: "test@gmail.com",
    role: "volunteer",
    createdon: "Sep 15, 2025 - 11:00 AM",
    status: "Pending",
    lastlogin: "-",
  },
  {
    id: "SETN-USR-2341",
    name: "Test Account",
    email: "test@gmail.com",
    role: "admin",
    createdon: "Sep 15, 2025 - 11:00 AM",
    status: "Pending",
    lastlogin: "-",
  },
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
    id: "SETN-USR-2341",
    name: "Test Account",
    email: "test@gmail.com",
    role: "volunteer",
    createdon: "Sep 15, 2025 - 11:00 AM",
    status: "Pending",
    lastlogin: "-",
  },
  {
    id: "SETN-USR-2341",
    name: "Test Account",
    email: "test@gmail.com",
    role: "admin",
    createdon: "Sep 15, 2025 - 11:00 AM",
    status: "Pending",
    lastlogin: "-",
  },
];

function TablePage() {
  return <DataTable columns={columns} data={data} rowKey={(row) => row.id} />;
}

export default TablePage;

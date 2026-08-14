import { TableToolbar, DataTable } from "@/shared/ui";
import { data, columns } from "../../dummyData/tableData";

function PendingSubmissions() {
  return (
    <div className="space-y-4">
      <TableToolbar filters={<></>} />
      <DataTable data={data} columns={columns} rowKey={(row) => row.id} />
    </div>
  );
}
export default PendingSubmissions;

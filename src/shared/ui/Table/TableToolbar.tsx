import { Icon, Input } from "@shared/ui";

interface TableToolbarProps {
  enableSearch?: boolean;
  filters?: React.ReactNode;
}

function TableToolbar({ enableSearch = true, filters }: TableToolbarProps) {
  return (
    <div className="flex gap-4">
      {enableSearch && (
        <div className="w-87.5">
          <Input
            leftIcon={<Icon name="ic:twotone-search" size={20} />}
            placeholder="Search by name or ID..."
          />
        </div>
      )}
      {filters && filters}
    </div>
  );
}

export default TableToolbar;

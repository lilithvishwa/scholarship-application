import { Icon } from "@shared/ui";

interface FieldItemProps {
  icon: string;
  label: string;
  onClick: () => void;
}

function FieldItem({ icon, label, onClick }: FieldItemProps) {
  return (
    <button
      className="flex w-full items-center border border-hairline rounded-xs gap-3 px-4 py-3 hover:bg-gray-50"
      onClick={onClick}
    >
      <Icon name={icon} size={24} />
      <span className="body">{label}</span>
    </button>
  );
}

export default FieldItem;

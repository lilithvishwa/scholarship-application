import { Icon } from "@shared/ui";

function FieldItem({ icon, label }: { icon: string; label: string }) {
  return (
    <button className="flex w-full items-center border border-hairline rounded-xs gap-3 px-4 py-3 hover:bg-gray-50">
      <Icon name={icon} size={24} />
      <span className="body">{label}</span>
    </button>
  );
}

export default FieldItem;

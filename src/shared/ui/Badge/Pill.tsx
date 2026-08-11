const COLOR_MAP: Record<string, string> = {
  // status
  draft: "bg-[#FEEBC8]",
  active: "bg-[#D1E7DD]",
  pending: "bg-[#FEEBC8]",
  suspended: "bg-[#E5E7EB]",
  deactivated: "bg-[#F8D7DA]",
  // role
  student: "bg-[#DBEAFE]",
  admin: "bg-[#D1E7DD]",
  volunteer: "bg-[#E5E7EB]",
};

interface PillProps {
  status: string;
  colorMap?: Record<string, string>;
}

function Pill({ status, colorMap = COLOR_MAP }: PillProps) {
  const key = status?.toLowerCase();
  const classes = colorMap[key] ?? "";

  return (
    <span
      className={`inline-block px-2 rounded-xs reference-id capitalize ${classes}`}
    >
      {status}
    </span>
  );
}

export default Pill;

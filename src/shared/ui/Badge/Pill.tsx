// interface PillProps {
//   status: string;
// }

// function Pill({ status }: PillProps) {
//   const statusCase: string = status.toLowerCase();
//   const Status: Record<string, string> = {

//   };
//   return (
//     <td className={`${Status[statusCase]} reference-id px-2 rounded-xs `}>
//       {status}
//     </td>
//   );
// }

// export default Pill;

const COLOR_MAP: Record<string, string> = {
  // status
  draft: "bg-[#FEEBC8]",
  active: "bg-[#D1E7DD]",
  pending: "bg-[#FEEBC8]",
  suspended: "bg-[#E5E7EB]",
  deactivated: "bg-[#F8D7DA]",
  // role
  student: "bg-blue-50 text-blue-700",
  admin: "bg-green-50 text-green-700",
  volunteer: "bg-gray-100 text-gray-600",
};

interface PillProps {
  status: string;
  colorMap?: Record<string, string>;
}

function Pill({ status, colorMap = COLOR_MAP }: PillProps) {
  const key = status?.toLowerCase();
  const classes = colorMap[key] ?? "bg-gray-100 text-gray-600";

  return (
    <span
      className={`inline-block px-2 rounded-xs reference-id capitalize ${classes}`}
    >
      {status}
    </span>
  );
}

export default Pill;

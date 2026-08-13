interface DetailItemProps {
  label: string;
  value: string | number;
}

export default function DetailItem({ label, value }: DetailItemProps) {
  return (
    <div className="space-y-2">
      <p className="body text-body-muted ">{label}</p>
      <p className="body">{value}</p>
    </div>
  );
}

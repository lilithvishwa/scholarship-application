import { Icon } from "@/shared/ui";

type DashboardKpiCardProps = {
  title: string;
  value: number;
  icon: string;
  iconBg: string;
  iconColor: string;
};

export function Kpis({
  title,
  value,
  icon,
  iconBg,
  iconColor,
}: DashboardKpiCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-hairline bg-canvas p-6 shadow-sm">
      <div className="rounded-lg p-3" style={{ backgroundColor: iconBg }}>
        <Icon name={icon} size={24} className={`${iconColor}`} />
      </div>
      <div>
        <h3 className="text-2xl font-semibold">{value}</h3>
        <p className="text-sm text-body-muted">{title}</p>
      </div>
    </div>
  );
}

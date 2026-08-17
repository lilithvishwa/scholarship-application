// components imports
import { WelcomeBanner, Kpis } from "../components";

// auth context hook import
import { useAuth } from "@/features/auth/hooks/useAuth";

// dummny data imports
import { dashboardKpiData } from "../dummyData/dashboardKpiData ";

function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="p-8 space-y-4">
      <WelcomeBanner name={user?.username} profileCompletion={25} />
      <div className="grid grid-cols-3 gap-6">
        {dashboardKpiData.map((item) => (
          <Kpis
            key={item.id}
            title={item.title}
            value={item.value}
            icon={item.icon}
            iconBg={item.iconBg}
            iconColor={item.iconColor}
          />
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;

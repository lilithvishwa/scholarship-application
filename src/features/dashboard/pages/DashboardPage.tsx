// components imports
import { WelcomeBanner, Kpis } from "../components";

// auth context hook import
import { useAuth } from "@/features/auth/hooks/useAuth";

// dummny data imports
import { dashboardKpiData } from "../dummyData/dashboardKpiData ";
import { useEffect } from "react";
import { ScholarshipCard, Select } from "@/shared/ui";
import { useProfileCompletionContext } from "@/features/auth/context/ProfileCompletionContext";

function DashboardPage() {
  const { user } = useAuth();
  const { fetchProfileCompletionStatus, completionStatus } =
    useProfileCompletionContext();

  useEffect(() => {
    fetchProfileCompletionStatus();
  }, []);

  const completedCount = completionStatus
    ? Object.values(completionStatus).filter(Boolean).length
    : 0;

  const totalCount = completionStatus
    ? Object.keys(completionStatus).length
    : 0;

  const profileCompletion =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="p-8 space-y-4">
      <WelcomeBanner
        name={user?.username}
        profileCompletion={profileCompletion}
      />
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
      <div className="space-y-4">
        <div className="flex justify-between border-b border-hairline  pb-4 ">
          <div className="space-y-1">
            <h3 className="application-card-heading">Recommended for You</h3>
            <p className="font-public">
              Based on your status as undergraduate student.
            </p>
          </div>
          <Select
            placeholder="Sort by Deadline : Soonest "
            options={[
              { label: "Soonest", value: "soonest" },
              { label: "Latest", value: "latest" },
              { label: "Oldest", value: "oldest" },
              { label: "A-Z", value: "az" },
              { label: "Z-A", value: "za" },
            ]}
          />
        </div>
        <ScholarshipCard />
      </div>
    </div>
  );
}

export default DashboardPage;

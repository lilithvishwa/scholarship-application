import { useState } from "react";

import { Breadcrumb, Button, Tabs } from "@/shared/ui";
import {
  ApplicantProfile,
  ScholarshipApplicationDetails,
  ApplicantOverview,
  FloatingActionBar,
} from "../components/submissions/submissionDeatails";
import { dummyApplicant } from "../dummyData/submission";

function SubmissionDetailsPage() {
  const [activeTab, setActiveTab] = useState("applicant");
  return (
    <div className="space-y-4 p-8">
      <Breadcrumb
        items={[
          {
            label: "Scholarships",
            href: "#",
          },
          {
            label: "ABC Merit Scholarship",
            href: "/scholarship/abcmeritscholarship",
          },
          {
            label: "Submissions",
            href: "/scholarship/abcmeritscholarship/submissions",
          },
          {
            label: "SETN-USR-01",
            href: "#",
          },
        ]}
      />
      <div className="flex justify-between items-center p-3">
        <ApplicantProfile applicant={dummyApplicant} />
        {activeTab === "applicant" && (
          <Button fullWidth={false} paddingClass="px-8 py-2">
            View Profile
          </Button>
        )}
      </div>

      <Tabs
        defaultTab="applicant"
        onChange={setActiveTab}
        tabs={[
          {
            id: "applicant",
            label: "About Applicant",
            content: <ApplicantOverview />,
          },
          {
            id: "scholarship",
            label: "Scholarship Application",
            content: <ScholarshipApplicationDetails />,
          },
        ]}
      />

      <div className="flex justify-center">
        <FloatingActionBar />
      </div>
    </div>
  );
}

export default SubmissionDetailsPage;

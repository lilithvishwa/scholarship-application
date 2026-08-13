import { Breadcrumb, Tabs } from "@/shared/ui";
import {
  PendingSubmissions,
  ProcessedSubmissions,
} from "../components/submissions";

function SubmissionsPage() {
  return (
    <div className="space-y-6 p-8 bg-white">
      <div className="space-y-4">
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
              href: "#",
            },
          ]}
        />
        <h2 className="field-group-heading">Submissions (10)</h2>
        <Tabs
          defaultTab="pending"
          tabs={[
            {
              id: "pending",
              label: "Pending Queue",
              content: <PendingSubmissions />,
            },
            {
              id: "processed",
              label: "Processed History",
              content: <ProcessedSubmissions />,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default SubmissionsPage;

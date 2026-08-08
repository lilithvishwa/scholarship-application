import { Breadcrumb } from "@/shared/ui";
function SubmissionsPage() {
  return (
    <div className="space-y-6 p-8">
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
      </div>
    </div>
  );
}

export default SubmissionsPage;

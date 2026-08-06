import { Input, Icon, Button, Badge } from "@shared/ui";

const templates: {
  id: number;
  tag: "postgraduate" | "undergraduate";
  title: string;
  lastUsed: string;
}[] = [
  {
    id: 1,
    tag: "postgraduate",
    title: "Community Impact Scholarship",
    lastUsed: "Jan 2024",
  },
  {
    id: 2,
    tag: "undergraduate",
    title: "Fall 2025 Tuition Grant",
    lastUsed: "Jan 2024",
  },
  {
    id: 3,
    tag: "postgraduate",
    title: "Women in STEM Scholarship",
    lastUsed: "Feb 2024",
  },
  {
    id: 4,
    tag: "undergraduate",
    title: "Merit Excellence Award",
    lastUsed: "Mar 2024",
  },
  {
    id: 5,
    tag: "undergraduate",
    title: "Fall 2026 Tuition Grant",
    lastUsed: "Jan 2025",
  },
  {
    id: 6,
    tag: "postgraduate",
    title: "Community Impact Scholarship",
    lastUsed: "Jan 2024",
  },
  {
    id: 7,
    tag: "undergraduate",
    title: "Fall 2025 Tuition Grant",
    lastUsed: "Jan 2024",
  },
  {
    id: 8,
    tag: "postgraduate",
    title: "Women in STEM Scholarship",
    lastUsed: "Feb 2024",
  },
];

export default function TemplatesList() {
  return (
    <section className="space-y-6 w-full">
      <div className="flex w-full gap-2">
        <Input
          className="flex-1"
          borderColor="border-body-muted"
          leftIcon={<Icon name="material-symbols:search" size={20} />}
          placeholder="Search by keyword, field of study, or organization..."
        />
        <Button paddingClass="py-3.2 px-8" fullWidth={false}>
          Find Scholarships
        </Button>
      </div>
      <div className="space-y-6">
        <div className="space-y-4">
          {templates.map((template) => (
            <div
              key={template.id}
              className="rounded-md border border-hairline p-4 cursor-pointer"
            >
              <div className="space-y-2">
                <Badge tag={template.tag} />

                <h3 className="field-group-heading">{template.title}</h3>

                <p className="reference-id">Last used: {template.lastUsed}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

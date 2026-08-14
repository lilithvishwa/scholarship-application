// dashboardKpiData.ts

export const kpiData = [
  {
    id: 1,
    title: "Total Submissions",
    value: "245",
  },
  {
    id: 2,
    title: "Pending Review",
    value: "82",
  },
  {
    id: 3,
    title: "Approved",
    value: "154",
  },
  {
    id: 4,
    title: "Rejected",
    value: "09",
  },
];

export const actions = [
  {
    id: 1,
    title: "All Submissions",
    description: "Review and manage all submissions.",
    icon: "lsicon:folder-files-filled",
    path: "/scholarship/abcmeritscholarship/submissions",
  },
  {
    id: 2,
    title: "Form Preview",
    description: "View the complete form definition",
    icon: "tabler:file-text",
    path: "/form-preview",
  },
  {
    id: 3,
    title: "Form Analytics",
    description: "View the analytics of the submissions",
    icon: "mdi:chart-arc",
    path: "/form-analytics",
  },
];

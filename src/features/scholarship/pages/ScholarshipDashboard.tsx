import { Breadcrumb, Badge, Icon } from "@/shared/ui";
import { kpiData, actions } from "../dummyData/kpiData ";
import { useNavigate } from "react-router-dom";

function ScholarshipDashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-8 space-y-8 bg-white ">
      <div className="space-y-2">
        <Breadcrumb
          items={[
            { label: "Scholarships", href: "/" },
            { label: "ABC Merit Scholarship" },
          ]}
        />
        <Badge tag="undergraduate" />
        <header>
          <h1 className="page-heading">ABC Merit Scholarship</h1>
          <p className="body text-body-muted">
            Offered by SETN Verified Sponsor
          </p>
        </header>
        <p className="line-clamp-2 max-w-160">
          The TechVision Excellence Scholarship supports ambitious students
          pursuing higher education in technology, engineering, computer
          science, and digital innovation. The program aims to encourage future
          professionals who demonstrate academic excellence, creativity,
          leadership skills, and a passion for solving real-world problems
          through technology. Eligibility Criteria Must be enrolled in an
          undergraduate or postgraduate program. Minimum 75% academic score or
          equivalent CGPA. Open to students in Computer Science, IT,
          Engineering, Data Science, or related fields. Applicants should
          demonstrate leadership, project experience, or participation in
          technical activities. Students from accredited institutions are
          eligible to apply. Submission of academic transcripts and proof of
          enrollment is mandatory.
        </p>
      </div>
      <div className="flex justify-between gap-6">
        {kpiData.map((kpi) => (
          <div
            key={kpi.id}
            className="space-y-1 p-8 border border-hairline w-full"
          >
            <p className="reference-id text-body-muted">{kpi.title}</p>
            <span className="form-step-heading">{kpi.value}</span>
          </div>
        ))}
      </div>
      <div className="space-y-6">
        <h1 className="application-card-heading">Actions</h1>
        <div className="grid grid-cols-4 gap-8">
          {actions.map((action) => (
            <button
              key={action.id}
              className={` w-full flex flex-col border border-hairline rounded-sm p-9 gap-3 items-center text-center  cursor-pointer `}
              onClick={() => navigate(action.path)}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-sm text-body-muted  bg-pale-blue">
                <Icon name={action.icon} size={32} />
              </div>
              <h1 className="font-public font-bold">{action.title}</h1>
              <p className="caption text-body-muted">{action.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScholarshipDashboard;

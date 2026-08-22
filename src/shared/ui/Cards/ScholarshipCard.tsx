import Badge from "../Badge/Badge";
import Icon from "../Icon/Icon";
import PanelCard from "./Panel";

function ScholarshipCard() {
  const ScholarshipDetails = [
    {
      title: "TechVision Excellence Scholarship 2026",
      sponsor: "SETN Verified Sponsor",
      educationLevel: "undergraduate",
      description:
        "The TechVision Excellence Scholarship supports ambitious students pursuing higher education in technology, engineering, computer science, and digital innovation and a passion for solving real-world problems through technology.Eligibility Criteria Must be enrolled in an undergraduate or postgraduate program.Minimum 75% academic score or equivalent CGPA.Open to students in Computerical activities.",
      eligibility: [
        "The TechVision Excellence Scholarship supports ambitious students pursuing higher education in technology, engineering, computer science...",
        "The program aims to encourage future professionals...",
        "Students must demonstrate academic excellence...",
      ],
      bookmark: true,
      scholarshipAmount: "₹1,00,000",
      deadline: "Sep 30,2026",
    },
    {
      title: "Global Innovators STEM Scholarship",
      sponsor: "SETN Verified Sponsor",
      educationLevel: "undergraduate",
      description:
        "The TechVision Excellence Scholarship supports ambitious students pursuing higher education in technology, engineering, computer science, and digital innovation and a passion for solving real-world problems through technology.Eligibility Criteria Must be enrolled in an undergraduate or postgraduate program.Minimum 75% academic score or equivalent CGPA.Open to students in Computerical activities.",

      eligibility: [
        "The TechVision Excellence Scholarship supports ambitious students pursuing higher education in technology, engineering, computer science...",
        "The program aims to encourage future professionals...",
        "Students must demonstrate academic excellence...",
      ],
      bookmark: false,
      scholarshipAmount: "₹50,000",
      deadline: "Aug 30,2026",
    },
    {
      title: "Global Innovators STEM Scholarship",
      sponsor: "SETN Verified Sponsor",
      educationLevel: "undergraduate",
      description:
        "The TechVision Excellence Scholarship supports ambitious students pursuing higher education in technology, engineering, computer science, and digital innovation and a passion for solving real-world problems through technology.Eligibility Criteria Must be enrolled in an undergraduate or postgraduate program.Minimum 75% academic score or equivalent CGPA.Open to students in Computerical activities.",

      eligibility: [
        "The TechVision Excellence Scholarship supports ambitious students pursuing higher education in technology, engineering, computer science...",
        "The program aims to encourage future professionals...",
        "Students must demonstrate academic excellence...",
      ],
      bookmark: true,
      scholarshipAmount: "₹45,000",
      deadline: "Sep 30,2026",
    },
    {
      title: "Global Innovators STEM Scholarship",
      sponsor: "SETN Verified Sponsor",
      educationLevel: "undergraduate",
      description:
        "The TechVision Excellence Scholarship supports ambitious students pursuing higher education in technology, engineering, computer science, and digital innovation and a passion for solving real-world problems through technology.Eligibility Criteria Must be enrolled in an undergraduate or postgraduate program.Minimum 75% academic score or equivalent CGPA.Open to students in Computerical activities.",

      eligibility: [
        "The TechVision Excellence Scholarship supports ambitious students pursuing higher education in technology, engineering, computer science...",
        "The program aims to encourage future professionals...",
        "Students must demonstrate academic excellence...",
      ],
      bookmark: false,
      scholarshipAmount: "₹1,00,000",
      deadline: "Sep 30,2026",
    },
  ];

  return (
    <>
      {ScholarshipDetails.slice(0, 3).map((scholarship, index) => (
        <PanelCard
          key={index}
          paddingClass="p-8"
          widthClass="w-full"
          className="space-y-6"
        >
          <div className="flex  justify-between ">
            {/*Part 1*/}
            <div className="space-y-4 w-90.5">
              <div className="space-y-1">
                <h3 className="application-card-heading">
                  {scholarship.title}
                </h3>
                <p className="reference-id text-body-muted">
                  {scholarship.sponsor}
                </p>
              </div>
              <Badge tag={scholarship.educationLevel} />
            </div>
            {/*Part 2*/}
            <div className="w-192.5 h-36 body text-ink overflow-hidden ">
              <p className="text-justify">{scholarship.description}</p>
              <p> Eligibility Criteria</p>
              <ul className=" ml-4  list-disc  ">
                <li>
                  <span className="block truncate w-140 ">
                    {scholarship.eligibility[0]}
                  </span>
                </li>
              </ul>
            </div>
            {/*Part 3*/}
            <div className="flex flex-col justify-between">
              <div className="flex justify-end">
                <Icon
                  name={
                    scholarship.bookmark
                      ? "mdi:bookmark-tick"
                      : "material-symbols:bookmark-outline"
                  }
                  size={24}
                  className={
                    scholarship.bookmark
                      ? "text-action-blue "
                      : "text-body-muted"
                  }
                />
              </div>
              <div className="space-y-2.5">
                <p className="text-end">{scholarship.scholarshipAmount}</p>
                <div className="flex text-body-muted justify-between">
                  <Icon name="fe:calendar" size={16} />
                  <p className="reference-id">{scholarship.deadline}</p>
                </div>
                <div className="flex justify-between items-center ">
                  <p className="action-button">View Details</p>
                  <Icon name="mdi:arrow-right" size={16} />
                </div>
              </div>
            </div>
          </div>
        </PanelCard>
      ))}
      {ScholarshipDetails.length > 3 && (
        <div className="flex gap-2 items-center justify-center text-action-blue ">
          <button className="action-button cursor-pointer">
            View All Recommendations{" "}
          </button>
          <Icon name="mdi:arrow-right" size={16} />
        </div>
      )}
    </>
  );
}

export default ScholarshipCard;

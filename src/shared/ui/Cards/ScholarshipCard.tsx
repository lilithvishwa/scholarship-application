import Badge from "../Badge/Badge";
import Icon from "../Icon/Icon";
import PanelCard from "./Panel";
import { ScholarshipDetails } from "@/features/dashboard/dummyData/scholarshipDetailsData";

interface Scholarship {
  id: number;
  title: string;
  sponsor: string;
  educationLevel: string;
  description: string;
  eligibility: string[];
  bookmark: boolean;
  scholarshipAmount: string;
  deadline: string;
}

interface ScholarshipCardProps {
  scholarship: Scholarship;
}

function ScholarshipCard({ scholarship }: ScholarshipCardProps) {
  return (
    <>
      <PanelCard
        key={scholarship.id}
        paddingClass="p-8"
        widthClass=""
        className="space-y-6"
      >
        <div className="flex justify-between ">
          {/*Part 1*/}
          <div className="space-y-4 shrink-0  w-90.5">
            <div className="space-y-1">
              <h3 className="application-card-heading">{scholarship.title}</h3>
              <p className="reference-id text-body-muted">
                {scholarship.sponsor}
              </p>
            </div>
            <Badge tag={scholarship.educationLevel} />
          </div>
          {/*Part 2*/}
          <div className="min-w-0 flex-1 h-35 body text-ink overflow-hidden ">
            <p className="text-justify line-clamp-6">
              {scholarship.description}
            </p>
            <p> Eligibility Criteria</p>
            <ul className=" ml-5  list-disc  ">
              <li>
                <span className="block truncate w-140 ">
                  {scholarship.eligibility[0]}
                </span>
              </li>
            </ul>
          </div>
          {/*Part 3*/}
          <div className="shrink-0 w-35 flex flex-col  justify-between">
            <div className="flex justify-end">
              <Icon
                name={
                  scholarship.bookmark
                    ? "mdi:bookmark-tick"
                    : "material-symbols:bookmark-outline"
                }
                size={24}
                className={
                  scholarship.bookmark ? "text-action-blue " : "text-body-muted"
                }
              />
            </div>
            <div className="space-y-2.5">
              <p className="text-end">{scholarship.scholarshipAmount}</p>
              <div className="flex text-body-muted justify-end  gap-3">
                <Icon name="fe:calendar" size={16} />
                <p className="reference-id">{scholarship.deadline}</p>
              </div>
              <div className="flex justify-end gap-2 items-center ">
                <p className="action-button">View Details</p>
                <Icon name="mdi:arrow-right" size={16} />
              </div>
            </div>
          </div>
        </div>
      </PanelCard>
    </>
  );
}

export default ScholarshipCard;

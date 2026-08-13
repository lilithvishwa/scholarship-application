import { DetailsCard } from "./DetailsCard";
import { scholarshipApplicationFields } from "./config";

export function ScholarshipApplicationDetails() {
  const response = {
    email: "tomholland@marvel.com",
    name: "Peter Parker",
    dateOfBirth: "15 / 09 / 1997",
    mobileNumber: "+91 98765 43210",
    country: "Unknown",
    gender: "Male",
    address: "Unknown, OuterEarth, Space",
    incomeCertificate: {
      name: "government_id_scan_2026.jpg",
      size: "2.4 MB",
      url: "",
    },
  };
  return (
    <div className="">
      <DetailsCard fields={scholarshipApplicationFields} data={response} />
    </div>
  );
}

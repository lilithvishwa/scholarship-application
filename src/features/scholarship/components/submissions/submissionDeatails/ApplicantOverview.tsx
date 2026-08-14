import { profileFields, educationalFields, financialFields } from "./config";
import { DetailsCard } from "./DetailsCard";
const response = {
  profileData: {
    legalName: "Tom Holland",
    dateOfBirth: "15 Sep 1997",
    gender: "Male",
    email: "tomholland@marvel.com",
    phone: "+91 98765 43210",
    location: "Unknown, OuterEarth, Space",
    accountStatus: "Verified",
  },

  educationalData: {
    educationLevel: "Undergraduate",
    registerNo: "422422205015",
    course: "B.Tech SpiderSense",
    institution: "Spider Development School, Newyork",
    semester: "04",
    yearOfPassing: "2027",
    percentage: "99.9%",
  },
  financialDetails: {
    guardianName: "Tony stark",
    guardianOccupation: "Iron Man - Owner of Stark Industries",
    annualFamilyIncome: "$ 3000 Billion Dollars",
  },
};

export function ApplicantOverview() {
  return (
    <div className="space-y-4">
      <div className="flex gap-6">
        <DetailsCard
          title="Profile Data"
          fields={profileFields}
          data={response.profileData}
        />
        <DetailsCard
          title="Educational Background"
          fields={educationalFields}
          data={response.educationalData}
        />
      </div>
      <DetailsCard
        title="Parental Details & Financial Details"
        fields={financialFields}
        data={response.financialDetails}
        columns={3}
      />
    </div>
  );
}

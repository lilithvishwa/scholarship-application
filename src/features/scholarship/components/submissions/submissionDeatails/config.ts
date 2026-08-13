import type {
  DetailField,
  ProfileData,
  EducationalData,
  FinancialData,
  ScholarshipApplicationData,
} from "./types";

export const profileFields: DetailField<ProfileData>[] = [
  { key: "legalName", label: "Legal Name", colSpan: 2 },
  { key: "dateOfBirth", label: "Date of Birth", colSpan: 1 },
  { key: "gender", label: "Gender", colSpan: 1 },
  { key: "email", label: "Email Address", colSpan: 1 },
  { key: "phone", label: "Phone Number", colSpan: 1 },
  { key: "location", label: "Location", colSpan: 2 },
  { key: "accountStatus", label: "Account Status", colSpan: 2 },
];

export const educationalFields: DetailField<EducationalData>[] = [
  {
    key: "educationLevel",
    label: "Current Education Level",
    colSpan: 1,
  },
  {
    key: "registerNo",
    label: "Register No",
    colSpan: 1,
  },
  {
    key: "course",
    label: "Course / Stream / Specialization",
    colSpan: 2,
  },
  {
    key: "institution",
    label: "Institution / School Name",
    colSpan: 2,
  },
  {
    key: "semester",
    label: "Semester",
    colSpan: 1,
  },
  {
    key: "yearOfPassing",
    label: "Year of Passing",
    colSpan: 1,
  },
  {
    key: "percentage",
    label: "Percentage / Grade",
    colSpan: 2,
  },
];

export const financialFields = [
  {
    key: "guardianName",
    label: "Father / Guardian Name",
    colSpan: 1,
  },
  {
    key: "guardianOccupation",
    label: "Father / Guardian Occupation",
    colSpan: 1,
  },
  {
    key: "annualFamilyIncome",
    label: "Annual Family Income",
    colSpan: 1,
  },
] satisfies DetailField<FinancialData>[];

export const scholarshipApplicationFields = [
  { key: "email", label: "Email Address", colSpan: 2 },
  { key: "name", label: "Name", colSpan: 2 },
  { key: "dateOfBirth", label: "Date of Birth", colSpan: 2 },
  { key: "mobileNumber", label: "Mobile Number", colSpan: 2 },
  { key: "country", label: "Country", colSpan: 2 },
  { key: "gender", label: "Gender", colSpan: 2 },
  { key: "address", label: "Address", colSpan: 2 },
  {
    key: "incomeCertificate",
    label: "Income Certificate",
    colSpan: 2,
    type: "file",
  },
] satisfies DetailField<ScholarshipApplicationData>[];

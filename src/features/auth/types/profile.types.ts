export interface AboutYouFormData {
  dob: string;
  gender: string;
  nationality: string;

  phone: string;
  alternatePhone: string;

  street: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
  country: string;
}

export type GradingSystem = "percentage" | "cgpa";

export interface AcademicRecord {
  id: string;
  levelOfEducation: string;
  registerNumber: string;
  institutionName: string;
  boardUniversity: string;
  courseStreamSpecialization: string;
  yearOfPassing: string;
  currentSemester: string;
  gradingSystem: GradingSystem;
  score: string;
}

export interface ParentDetails {
  isNotApplicable: boolean;
  name: string;
  occupation: string;
  mobile: string;
}

export interface GuardianDetails {
  name: string;
  occupation: string;
  mobile: string;
}

export interface FamilyDetails {
  father: ParentDetails;
  mother: ParentDetails;
  guardian: GuardianDetails;
  annualFamilyIncome: string;
}

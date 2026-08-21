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
  id?: string;
  levelOfEducation: string;
  registerNumber: string;
  institutionName: string;
  boardUniversity: string;
  courseStreamSpecialization: string;
  yearOfPassing: string;
  currentSemester: number;
  gradingSystem: GradingSystem;
  score: string;
  currentlyEnrolled: boolean;
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

export interface College {
  name: string;
  university: string;
}

export interface InitializeVerificationPayload {
  filename: string;
  fileSize: number;
  contentType: string;
}

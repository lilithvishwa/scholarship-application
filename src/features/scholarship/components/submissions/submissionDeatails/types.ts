export interface Applicant {
  name: string;
  profilePicture?: string;
  university?: string;
  universityId?: string;
}

export interface ApplicantProfileProps {
  applicant: Applicant;
}

//Applicant Overview types
export interface DetailField<T extends object> {
  key: keyof T;
  label: string;
  colSpan: 1 | 2;
  type?: "text" | "file";
}

export interface DetailsCardProps<T extends object> {
  title?: string;
  fields: DetailField<T>[];
  data: T;
  columns?: 1 | 2 | 3;
}

export interface ProfileData {
  legalName: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  phone: string;
  location: string;
  accountStatus: string;
}

export interface EducationalData {
  educationLevel: string;
  registerNo: string;
  course: string;
  institution: string;
  semester: string;
  yearOfPassing: string;
  percentage: string;
}

export interface FinancialData {
  guardianName: string;
  guardianOccupation: string;
  annualFamilyIncome: string;
}

export interface FileValue {
  name: string;
  size: string | number;
  url: string;
}

export interface ScholarshipApplicationData {
  email: string;
  name: string;
  dateOfBirth: string;
  mobileNumber: string;
  country: string;
  gender: string;
  address: string;
  incomeCertificate: FileValue;
}

// file Attachment type

export interface FileAttachmentCardProps {
  fileName: string;
  fileSizeInMB: number;
}

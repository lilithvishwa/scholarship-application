import type { ApplicantProfileProps } from "./types";

export default function ApplicationProfile({
  applicant,
}: ApplicantProfileProps) {
  return (
    <div className="flex gap-6">
      <span className="h-25 w-25 rounded-full border border-black overflow-hidden">
        <img src={applicant.profilePicture} alt="profile" />
      </span>
      <div className="flex flex-col justify-center">
        <p className="caption">{applicant.universityId}</p>
        <h2 className="application-card-heading uppercase">{applicant.name}</h2>
        <p className="reference-id">{applicant.university}</p>
      </div>
    </div>
  );
}

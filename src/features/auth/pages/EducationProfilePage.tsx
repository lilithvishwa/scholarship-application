import { Button, Icon, Panel } from "@/shared/ui";
import { useState } from "react";
import EducationProfileForm from "../components/CompleteYourProfile/EducationProfileForm";
import type { AcademicRecord } from "../components/CompleteYourProfile/types/profile.types";
import { StepFooter } from "@/features/scholarship/components";
import useAcademicDetails from "../hooks/useAcademicDetails";

function EducationProfilePage() {
  const [openForm, setOpenForm] = useState(false);
  const { educationalDetails, createEducationDetails, getEducationDetails } =
    useAcademicDetails();
  const handleSaveRecord = async (record: AcademicRecord) => {
    await createEducationDetails(record);
    setOpenForm(false);
  };

  const handleCancel = async () => {
    setOpenForm(false);
    await getEducationDetails();
  };
  console.log(educationalDetails);

  return (
    <section className="flex items-center justify-center px-10 py-8 gap-6">
      <Panel widthClass="w-175">
        <div className="flex flex-col text-center items-center gap-2 ">
          <h1 className=" form-step-heading">Education Profile</h1>
          <p className="body-large text-instructions">
            Manage your educational background and qualifications. Keep your
            academic information accurate and up to date.
          </p>
        </div>

        {!openForm && educationalDetails.length === 0 && (
          <div className="space-y-4">
            {educationalDetails.map((record) => (
              <Panel
                key={record.id}
                variant="outlined"
                widthClass="w-full"
                paddingClass="p-6"
              >
                <div className="space-y-1">
                  <h1 className="field-group-heading">
                    {record.levelOfEducation}
                  </h1>
                  <p className="body text-instructions">
                    {record.institutionName} | {record.boardUniversity}
                  </p>
                  <span className="flex gap-2  text-body-muted">
                    <Icon name="fe:calendar" size={16} />
                    <p className="reference-id text-body-muted">
                      Year of Passing: {record.yearOfPassing}
                    </p>
                  </span>
                </div>
              </Panel>
            ))}
          </div>
        )}

        {!openForm && (
          <Button
            variant="outline"
            children="+ Add Academic Record"
            className="reference-id"
            onClick={() => setOpenForm(true)}
          />
        )}

        {openForm ? (
          <EducationProfileForm
            onSave={handleSaveRecord}
            onCancel={handleCancel}
          />
        ) : (
          <StepFooter
            step="Step 2 of 3"
            action={
              <Button
                children="Save & Continue"
                fullWidth={false}
                className="cursor-pointer"
                // onClick={() => navigate("/profile/complete/family-finance")}
                // onClick={handleSubmit}
                onClick={() => {}}
              />
            }
          />
        )}
      </Panel>
    </section>
  );
}

export default EducationProfilePage;

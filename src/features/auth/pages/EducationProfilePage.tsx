import { Button, Icon, IconButton, Panel } from "@/shared/ui";
import { useState } from "react";
import EducationProfileForm from "../components/CompleteYourProfile/EducationProfileForm";
import type { AcademicRecord } from "../types/profile.types";
import { StepFooter } from "@/features/scholarship/components";
import useAcademicDetails from "../hooks/useAcademicDetails";

function EducationProfilePage() {
  const [openForm, setOpenForm] = useState(false);
  const [editingRecord, setEditingRecord] = useState<AcademicRecord | null>(
    null,
  );
  const {
    educationalDetails,
    createEducationDetails,
    getEducationDetails,
    getAcademicsStatus,
    error,
    updateEducationDetails,
    deleteEducationDetails,
  } = useAcademicDetails();

  const handleAddRecord = () => {
    setEditingRecord(null);
    setOpenForm(true);
  };

  const handleSaveRecord = async (record: AcademicRecord) => {
    if (editingRecord) {
      await updateEducationDetails(editingRecord.levelOfEducation, record);
    } else {
      await createEducationDetails(record);
    }

    setEditingRecord(null);
    setOpenForm(false);
  };

  const handleEditRecord = (record: AcademicRecord) => {
    setEditingRecord(record);
    setOpenForm(true);
  };

  const handleDeleteRecord = async (levelOfEducation: string) => {
    await deleteEducationDetails(levelOfEducation);
  };

  const handleCancel = async () => {
    setOpenForm(false);
    await getEducationDetails();
  };

  const handleContinue = async () => {
    await getAcademicsStatus();
  };

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

        {educationalDetails.length > 0 && (
          <div className="space-y-4">
            {educationalDetails.map((record, index) => (
              <Panel
                key={index}
                variant="outlined"
                widthClass="w-full"
                paddingClass="p-5"
              >
                <div className="space-y-1">
                  <div className="relative">
                    <div className="absolute right-0 flex gap-2 text-muted ">
                      <div className="pointer-events-auto">
                        <IconButton
                          icon="material-symbols:edit-outline"
                          size={20}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditRecord(record);
                          }}
                          className="hover:text-action-blue"
                        />
                      </div>

                      <div className="pointer-events-auto">
                        <IconButton
                          icon="material-symbols:delete-outline"
                          size={20}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteRecord(record.levelOfEducation);
                          }}
                          className="hover:text-red-800"
                        />
                      </div>
                    </div>
                  </div>
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
            {error && <p className="text-error disclaimer-text">{error}</p>}
          </div>
        )}

        {!openForm && educationalDetails.length < 5 && (
          <Button
            variant="outline"
            children="+ Add Academic Record"
            className="reference-id"
            onClick={handleAddRecord}
          />
        )}

        {openForm ? (
          <EducationProfileForm
            initialData={editingRecord}

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
                onClick={handleContinue}
              />
            }
          />
        )}
      </Panel>
    </section>
  );
}

export default EducationProfilePage;

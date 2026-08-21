import { StepFooter } from "@/features/scholarship/components";
import { Button, CheckboxGroup, Input, Panel, Select } from "@/shared/ui";
import SegmentedControl from "@/shared/ui/Buttons/SegmentedControl";
import { useEffect, useState } from "react";
import type { AcademicRecord, GradingSystem } from "./types/profile.types";
import useAcademicDetails from "../../hooks/useAcademicDetails";
import Autocomplete from "@/shared/ui/Inputs/AutoComplete";
import { getYearOptions } from "@/utils/getYearOptions";

import {
  academicDetailsSchema,
  type AcademicDetailsFormData,
} from "../../schemas/academicDetails.schema";

interface EducationProfileFormProps {
  initialData?: AcademicRecord | null;
  onSave: (record: AcademicRecord) => void;
  onCancel: () => void;
  isUpdating: boolean;
  isCreating: boolean;
  existingRecords: AcademicRecord[];
}

const INITIAL_ACADEMIC_RECORD: AcademicRecord = {
  id: "",
  levelOfEducation: "",
  registerNumber: "",
  institutionName: "",
  boardUniversity: "",
  courseStreamSpecialization: "",
  yearOfPassing: "",
  currentSemester: null,
  gradingSystem: "percentage",
  score: "",
  currentlyEnrolled: false,
};

const EDUCATION_LEVEL_OPTIONS = [
  {
    label: "10th Standard / (SSLC)",
    value: "10th Grade",
  },
  {
    label: "12th Standard / Higher Secondary (HSC)",
    value: "12th or Diploma",
  },
  {
    label: "Undergraduate",
    value: "Undergraduate",
  },
  {
    label: "Postgraduate",
    value: "Postgraduate",
  },
  {
    label: "Research/Ph.D",
    value: "Research or PhD",
  },
];

function EducationProfileForm({
  onSave,
  onCancel,
  initialData,
  isUpdating,
  isCreating,
  existingRecords,
}: EducationProfileFormProps) {
  const [formData, setFormData] = useState<AcademicRecord>(
    initialData ?? INITIAL_ACADEMIC_RECORD,
  );

  const [validationErrors, setValidationErrors] = useState<
    Partial<Record<keyof AcademicDetailsFormData, string>>
  >({});

  const { getCollege, colleges, loading } = useAcademicDetails();

  /**
   * Update form when editing an existing record.
   */
  useEffect(() => {
    setFormData(initialData ?? INITIAL_ACADEMIC_RECORD);
    setValidationErrors({});
  }, [initialData]);

  /**
   * Filter already selected education levels.
   */
  const educationLevelOptions = EDUCATION_LEVEL_OPTIONS.filter((option) => {
    if (initialData?.levelOfEducation === option.value) {
      return true;
    }

    return !existingRecords.some(
      (record) => record.levelOfEducation === option.value,
    );
  });

  /**
   * Education levels where college autocomplete is required.
   */
  const searchableLevels = ["Undergraduate", "Postgraduate", "Research or PhD"];

  /**
   * Whether current education is school level.
   */
  const isSchool =
    formData.levelOfEducation === "10th Grade" ||
    formData.levelOfEducation === "12th or Diploma";

  /**
   * Search colleges with debounce.
   */

  useEffect(() => {
    if (!searchableLevels.includes(formData.levelOfEducation)) {
      return;
    }

    const search = formData.institutionName.trim();

    if (!search) {
      return;
    }

    const timeout = setTimeout(() => {
      getCollege(search);
    }, 500);

    return () => clearTimeout(timeout);
  }, [formData.institutionName, formData.levelOfEducation]);

  /**
   * College autocomplete options.
   */
  const collegeOptions =
    colleges?.map((college) => ({
      value: college.name,
      label: college.name,
      university: college.university,
    })) ?? [];

  const yearOptions = getYearOptions();

  /**
   * Generic form field updater.
   */
  const updateField = <K extends keyof AcademicRecord>(
    field: K,
    value: AcademicRecord[K],
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error for the field being edited
    setValidationErrors((prev) => ({
      ...prev,
      [field]: undefined,
    }));
  };

  /**
   * Validate and submit.
   */
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = academicDetailsSchema.safeParse(formData);

    if (!result.success) {
      const errors: Partial<Record<keyof AcademicDetailsFormData, string>> = {};

      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof AcademicDetailsFormData;

        // Keep only the first error for each field
        if (!errors[field]) {
          errors[field] = issue.message;
        }
      });

      setValidationErrors(errors);

      return;
    }

    setValidationErrors({});

    const record: AcademicRecord = {
      ...formData,
      id: formData.id || crypto.randomUUID(),
    };

    await onSave(record);
  };

  return (
    <Panel variant="outlined" widthClass="w-full" paddingClass="p-6">
      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Education Level */}
        <Select
          label="Level of Education *"
          options={educationLevelOptions}
          value={formData.levelOfEducation}
          onChange={
            educationLevelOptions[0].value
              ? (e) =>
                  updateField(
                    "levelOfEducation",
                    educationLevelOptions[0].value,
                  )
              : (e) => updateField("levelOfEducation", e)
          }
          errorMessage={validationErrors.levelOfEducation}
        />

        {/* Register Number */}
        <Input
          label="Register Number"
          placeholder="e.g., 234228205015"
          value={formData.registerNumber ?? ""}
          onChange={(e) => updateField("registerNumber", e.target.value)}
          errorMessage={validationErrors.registerNumber}
        />

        {/* Institution */}
        {isSchool ? (
          <Input
            placeholder="Enter school name"
            label="School Name *"
            value={formData.institutionName}
            onChange={(e) => updateField("institutionName", e.target.value)}
            errorMessage={validationErrors.institutionName}
          />
        ) : (
          <Autocomplete
            label={"Institution *"}
            placeholder="Enter institution name"
            value={formData.institutionName}
            loading={loading.getCollege}
            options={collegeOptions}
            onChange={(value) => updateField("institutionName", value)}
            onSelect={(option) => {
              updateField("institutionName", option.value);
              updateField("boardUniversity", option.university as string);
            }}
          />
        )}

        {/* Board / University */}
        <Input
          label={isSchool ? "Board *" : "University *"}
          placeholder="Enter board or university"
          value={formData.boardUniversity}
          onChange={(e) => updateField("boardUniversity", e.target.value)}
          disabled={!isSchool}
          errorMessage={validationErrors.boardUniversity}
        />

        {/* Course / Stream */}
        <Input
          label="Course / Stream / Specialization"
          placeholder="e.g., Science, B.Sc Computer Science"
          value={formData.courseStreamSpecialization}
          onChange={(e) =>
            updateField("courseStreamSpecialization", e.target.value)
          }
          errorMessage={validationErrors.courseStreamSpecialization}
        />

        {/* Year of Passing */}
        <div>
          <Select
            label="Year of Passing *"
            options={yearOptions}
            placeholder="Select Year"
            value={formData.yearOfPassing}
            onChange={(e) => updateField("yearOfPassing", e)}
            errorMessage={validationErrors.yearOfPassing}
          />

          {/* Current Semester */}
          {!isSchool && (
            <div>
              <Input
                label="Current Semester"
                placeholder="e.g., 3"
                value={
                  formData.currentSemester === null
                    ? ""
                    : formData.currentSemester
                }
                onChange={(e) => {
                  const value = e.target.value;
                  updateField(
                    "currentSemester",
                    value === "" ? null : Number(value),
                  );
                }}
                errorMessage={validationErrors.currentSemester}
              />
            </div>
          )}
        </div>

        {/* Grading System + Score */}
        <div className="grid grid-cols-2 gap-5">
          <div>
            <SegmentedControl
              label="Grading System"
              options={[
                {
                  label: "Percentage",
                  value: "percentage",
                },
                {
                  label: "CGPA",
                  value: "cgpa",
                },
              ]}
              value={formData.gradingSystem}
              onChange={(value) =>
                updateField("gradingSystem", value as GradingSystem)
              }
            />
          </div>
          <div>
            <Input
              label="Score"
              placeholder="0.00"
              rightIcon={formData.gradingSystem === "percentage" ? "%" : "CGPA"}
              value={formData.score ?? ""}
              onChange={(e) => updateField("score", e.target.value)}
              errorMessage={validationErrors.score}
            />
          </div>
        </div>

        {/* Currently Enrolled */}
        <CheckboxGroup
          label=""
          options={["Currently Pursuing"]}
          value={formData.currentlyEnrolled ? ["Currently Pursuing"] : []}
          onChange={() =>
            updateField("currentlyEnrolled", !formData.currentlyEnrolled)
          }
          disabled={false}
        />

        <StepFooter
          action={
            <div className="space-x-4">
              <Button
                children="Cancel"
                variant="outline"
                className="border border-hairline py-2 px-6 cursor-pointer"
                fullWidth={false}
                onClick={onCancel}
                type="button"
              />
              <Button
                children={
                  isUpdating || isCreating ? "Saving..." : "Save Record"
                }
                fullWidth={false}
                className="cursor-pointer"
                type="submit"
                disabled={isUpdating || isCreating}
              />
            </div>
          }
        />
      </form>
    </Panel>
  );
}

export default EducationProfileForm;

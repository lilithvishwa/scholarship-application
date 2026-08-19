import { StepFooter } from "@/features/scholarship/components";
import { Button, CheckboxGroup, Input, Panel, Select } from "@/shared/ui";
import SegmentedControl from "@/shared/ui/Buttons/SegmentedControl";
import { useEffect, useState } from "react";
import type { AcademicRecord, GradingSystem } from "./types/profile.types";
import useAcademicDetails from "../../hooks/useAcademicDetails";
import Autocomplete from "@/shared/ui/Inputs/AutoComplete";
import { getYearOptions } from "@/utils/getYearOptions";

interface EducationProfileFormProps {
  initialData?: AcademicRecord | null;
  onSave: (record: AcademicRecord) => void;
  onCancel: () => void;
}

const INITIAL_ACADEMIC_RECORD: AcademicRecord = {
  id: "",
  levelOfEducation: "",
  registerNumber: "",
  institutionName: "",
  boardUniversity: "",
  courseStreamSpecialization: "",
  yearOfPassing: "",
  currentSemester: "",
  gradingSystem: "percentage",
  score: "",
  currentlyEnrolled: false,
};

function EducationProfileForm({
  onSave,
  onCancel,
  initialData,
}: EducationProfileFormProps) {
  const [formData, setFormData] = useState<AcademicRecord>(
    initialData ?? INITIAL_ACADEMIC_RECORD,
  );
  // console.log(formData);

  const { getCollege, colleges } = useAcademicDetails();

  useEffect(() => {
    setFormData(initialData ?? INITIAL_ACADEMIC_RECORD);
  }, [initialData]);

  useEffect(() => {
    const search = formData.institutionName.trim();
    if (!search) {
      return;
    }
    const debounce = setTimeout(() => {
      getCollege(search);
    }, 500);
    return () => clearTimeout(debounce);
  }, [formData.institutionName]);

  // console.log(colleges);

  const collegeOptions = colleges?.map((college) => ({
    value: college.name,
    label: college.name,
    university: college.university,
  }));

  const yearOptions = getYearOptions();
  const updateField = <K extends keyof AcademicRecord>(
    field: K,
    value: AcademicRecord[K],
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const record: AcademicRecord = {
      ...formData,
      id: formData.id || crypto.randomUUID(),
    };

    await onSave(record);
  };

  return (
    <Panel variant="outlined" widthClass="w-full" paddingClass="p-6">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <Select
          label="Level of Education *"
          options={[
            {
              label: "10th Standard / (SSLC)",
              value: "10th Grade",
            },
            {
              label: "12th Standard / Higher Secondary (HSC)",
              value: "12th or Diploma",
            },
            { label: "Undergraduate", value: "Undergraduate" },
            { label: "Postgraduate", value: "Postgraduate" },
            { label: "Research/Ph.D", value: "Research or PhD" },
          ]}
          value={formData.levelOfEducation}
          onChange={(e) => updateField("levelOfEducation", e)}
        />
        <Input
          label="Register Number"
          placeholder="e.g., 234228205015"
          value={formData.registerNumber}
          onChange={(e) => updateField("registerNumber", e.target.value)}
        />
        {/*<Input
          label="Institution / School Name *"
          placeholder="Enter institution name"
          value={formData.institutionName}
          onChange={(e) => updateField("institutionName", e.target.value)}
          required={true}
        />*/}
        <Autocomplete
          label="Institution / School Name *"
          placeholder="Enter institution name"
          value={formData.institutionName}
          options={collegeOptions}
          onChange={(value) => updateField("institutionName", value)}
          onSelect={(option) => {
            updateField("institutionName", option.value);
            updateField("boardUniversity", option.university as string);
          }}
        />
        <Input
          label="Board / University *"
          placeholder="Enter board or university"
          value={formData.boardUniversity}
          onChange={(e) => updateField("boardUniversity", e.target.value)}
          required={true}
          // disabled
        />
        <Input
          label="Course / Stream / Specialization *"
          placeholder="e.g., Science, B.Sc Computer Science"
          value={formData.courseStreamSpecialization}
          onChange={(e) =>
            updateField("courseStreamSpecialization", e.target.value)
          }
          required={true}
        />
        <div className="grid grid-cols-2 gap-5">
          <Select
            label="Year of Passing *"
            options={yearOptions}
            placeholder="Select Year"
            value={formData.yearOfPassing}
            onChange={(e) => updateField("yearOfPassing", e)}
          />
          {/*{formData.levelOfEducation !== "10th Grade" &&
            formData.levelOfEducation !== "12th or Diploma" && (
              <Input
                label="Current Semester"
                placeholder="e.g., 3, 2"
                value={formData.currentSemester}
                onChange={(e) => updateField("currentSemester", e.target.value)}
              />
            )}*/}
          <Input
            label="Current Semester"
            placeholder="e.g., 3, 2"
            value={formData.currentSemester}
            onChange={(e) => updateField("currentSemester", e.target.value)}
          />
        </div>

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
          <Input
            label="Score"
            placeholder="0.00"
            rightIcon={formData.gradingSystem === "percentage" ? "%" : "CGPA"}
            value={formData.score}
            onChange={(e) => updateField("score", e.target.value)}
          />
        </div>
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
              />
              <Button
                children="Save Record"
                fullWidth={false}
                className="cursor-pointer"
                type="submit"
              />
            </div>
          }
        />
      </form>
    </Panel>
  );
}

export default EducationProfileForm;

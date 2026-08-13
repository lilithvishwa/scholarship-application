import { StepFooter } from "@/features/scholarship/components";
import { Button, Input, Panel, Select } from "@/shared/ui";
import SegmentedControl from "@/shared/ui/Buttons/SegmentedControl";
import { useState } from "react";
import type { AcademicRecord, GradingSystem } from "../../types/profile.types";

interface EducationProfileFormProps {
  onSave: (record: AcademicRecord) => void;
  onCancel: () => void;
}

function EducationProfileForm({ onSave, onCancel }: EducationProfileFormProps) {
  const [formData, setFormData] = useState<AcademicRecord>({
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
  });
  console.log(formData);

  const updateField = <K extends keyof AcademicRecord>(
    field: K,
    value: AcademicRecord[K],
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const record: AcademicRecord = {
      ...formData,
      id: crypto.randomUUID(),
    };
    onSave(record);
  };

  return (
    <Panel variant="outlined" widthClass="w-full" paddingClass="p-6">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <Select
          label="Level of Education *"
          options={[
            "10th Standard / (SSLC)",
            "12th Standard / Higher Secondary (HSC)",
            "Undergraduate",
            "Postgraduate",
            "Research/Ph.D",
          ]}
          value={formData.levelOfEducation}
          onChange={(e) => updateField("levelOfEducation", e)}
          required={true}
        />
        <Input
          label="Register Number"
          placeholder="e.g., 234228205015"
          value={formData.registerNumber}
          onChange={(e) => updateField("registerNumber", e.target.value)}
        />
        <Input
          label="Institution / School Name *"
          placeholder="Enter institution name"
          value={formData.institutionName}
          onChange={(e) => updateField("institutionName", e.target.value)}
          required={true}
        />
        <Input
          label="Board / University *"
          placeholder="Enter board or university"
          value={formData.boardUniversity}
          onChange={(e) => updateField("boardUniversity", e.target.value)}
          required={true}
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
            options={["2026", "2025", "2024"]}
            placeholder="Select Year"
            value={formData.yearOfPassing}
            onChange={(e) => updateField("yearOfPassing", e)}
            required={true}
          />
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
              />
            </div>
          }
        />
      </form>
    </Panel>
  );
}

export default EducationProfileForm;

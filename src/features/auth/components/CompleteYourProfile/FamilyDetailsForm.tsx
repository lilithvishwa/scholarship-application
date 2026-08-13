import { Button, CheckboxGroup, Divider, Input, Select } from "@/shared/ui";
import { useState } from "react";
import type { FamilyDetails } from "@/features/auth/types/profile.types";
import ParentFields from "./ParentFields";
import { StepFooter } from "@/features/scholarship/components";

const INITIAL_FAMILY_DETAILS: FamilyDetails = {
  father: {
    isNotApplicable: false,
    name: "",
    occupation: "",
    mobile: "",
  },

  mother: {
    isNotApplicable: false,
    name: "",
    occupation: "",
    mobile: "",
  },

  guardian: {
    name: "",
    occupation: "",
    mobile: "",
  },

  annualFamilyIncome: "",
};

function FamilyDetailsForm() {
  const [formData, setFormData] = useState<FamilyDetails>(
    INITIAL_FAMILY_DETAILS,
  );
  console.log(formData);
  const toggleParentStatus = (parent: "father" | "mother") => {
    setFormData((prev) => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        isNotApplicable: !prev[parent].isNotApplicable,
      },
    }));
  };

  const updateParentField = (
    parent: "father" | "mother",
    field: "name" | "occupation" | "mobile",
    value: string,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value,
      },
    }));
  };

  const updateGuardianField = (
    value: string,
    field: "name" | "occupation" | "mobile",
  ) => {
    setFormData((prev) => ({
      ...prev,
      guardian: {
        ...prev.guardian,
        [field]: value,
      },
    }));
  };

  const showGuardian =
    formData.father.isNotApplicable && formData.mother.isNotApplicable;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-6">
        <div className="flex  items-center justify-between ">
          <h1 className="field-group-heading">Father's Details </h1>
          <CheckboxGroup
            label=""
            options={["Not Applicable / Deceased"]}
            value={
              formData.father.isNotApplicable
                ? ["Not Applicable / Deceased"]
                : []
            }
            onChange={() => toggleParentStatus("father")}
            disabled={false}
          />
        </div>
        {!formData.father.isNotApplicable && (
          <ParentFields
            parent="father"
            data={formData.father}
            onChange={updateParentField}
          />
        )}
      </div>
      <Divider />
      <div className="flex flex-col gap-6">
        <div className="flex  items-center justify-between ">
          <h1 className="field-group-heading">Mother's Details </h1>
          <CheckboxGroup
            label=""
            options={["Not Applicable / Deceased"]}
            value={
              formData.mother.isNotApplicable
                ? ["Not Applicable / Deceased"]
                : []
            }
            onChange={() => toggleParentStatus("mother")}
            disabled={false}
          />
        </div>
        {!formData.mother.isNotApplicable && (
          <ParentFields
            parent="mother"
            data={formData.mother}
            onChange={updateParentField}
          />
        )}
      </div>
      <Divider />
      <div className="flex flex-col gap-6">
        <h1 className="field-group-heading">Guardian's Details </h1>
        {showGuardian && (
          <>
            <Input
              label="Full Name *"
              placeholder="Enter Full Name"
              value={formData.guardian.name}
              onChange={(e) => updateGuardianField(e.target.value, "name")}
            />
            <div className="flex gap-4">
              <div className="flex-1">
                <Select
                  label="Occupation *"
                  placeholder="Select Occupation"
                  options={[
                    "Farmer",
                    "Daily Wages",
                    "Police",
                    "Doctor",
                    "Actor",
                  ]}
                  value={formData.guardian.occupation}
                  onChange={(e) => updateGuardianField(e, "occupation")}
                />
              </div>
              <div className="flex-1">
                <Input
                  label="Phone Number *"
                  placeholder="10-digit number"
                  leftIcon={<p className="text-black ">+91</p>}
                  className="rounded-sm pl-12"
                  value={formData.guardian.mobile}
                  onChange={(e) =>
                    updateGuardianField(e.target.value, "mobile")
                  }
                />
              </div>
            </div>
          </>
        )}
      </div>
      <Divider />
      <div className="flex flex-col gap-6">
        <h1 className="field-group-heading">Financial Information</h1>
        <Select
          label="Annual Family Income *"
          placeholder="Select Annual Income"
          options={[
            "Below 1 Lakhs",
            "1 Lakhs - 5 Lakhs",
            "5 Lakhs - 10 Lakhs",
            "Above 10 Lakhs",
          ]}
          value={formData.annualFamilyIncome}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              annualFamilyIncome: e,
            }))
          }
        />{" "}
      </div>
      <StepFooter
        step="Step 3 of 3"
        action={
          <Button
            children="Save & Finish"
            fullWidth={false}
            onClick={() => {}}
          />
        }
      />
    </div>
  );
}

export default FamilyDetailsForm;

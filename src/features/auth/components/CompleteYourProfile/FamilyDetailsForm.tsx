import { Button, CheckboxGroup, Divider, Input, Select } from "@/shared/ui";
import { useState } from "react";
import type { FamilyDetails } from "@/features/auth/components/CompleteYourProfile/types/profile.types";
import ParentFields from "./ParentFields";
import { StepFooter } from "@/features/scholarship/components";
import useProfileCompletion from "../../hooks/useProfileCompletion";
import { useNavigate } from "react-router-dom";

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
  const { createParentsDetails } = useProfileCompletion();
  const navigate = useNavigate();

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

  const withCountryCode = (mobile: string) => {
    const cleanedMobile = mobile.replace(/\D/g, "");
    return cleanedMobile ? `+91${cleanedMobile}` : "";
  };

  const handleSubmit = async () => {
    const payload: Partial<FamilyDetails> = {
      annualFamilyIncome: formData.annualFamilyIncome,
    };

    if (!formData.father.isNotApplicable) {
      payload.father = {
        ...formData.father,
        mobile: withCountryCode(formData.father.mobile),
      };
    }

    if (!formData.mother.isNotApplicable) {
      payload.mother = {
        ...formData.mother,
        mobile: withCountryCode(formData.mother.mobile),
      };
    }

    if (showGuardian) {
      payload.guardian = {
        ...formData.guardian,
        mobile: withCountryCode(formData.guardian.mobile),
      };
    }

    await createParentsDetails(payload);
    // await completionStatus();

    navigate("/dashboard");
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
                    { label: "Government Sector", value: "government sector" },
                    { label: "Private Sector", value: "private sector" },
                    { label: "Self-Employed", value: "self-employed" },
                    { label: "Other", value: "other" },
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
            { label: "Below 1 Lakhs", value: "below ₹1,00,000" },
            { label: "1 Lakhs - 2.5 Lakhs", value: "₹1,00,000 – ₹2,50,000" },
            { label: "2.5 Lakhs - 5 Lakhs", value: "₹2,50,000 – ₹5,00,000" },
            { label: "5 Lakhs - 8 Lakhs", value: "₹5,00,000 – ₹8,00,000" },
            { label: "Above 8 Lakhs", value: "above ₹8,00,000" },
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
            onClick={handleSubmit}
          />
        }
      />
    </div>
  );
}

export default FamilyDetailsForm;

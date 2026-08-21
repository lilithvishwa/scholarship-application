import { useState } from "react";

import { Button, CheckboxGroup, Divider, Input, Select } from "@/shared/ui";

import type { FamilyDetails } from "@/features/auth/components/CompleteYourProfile/types/profile.types";

import ParentFields from "./ParentFields";
import { StepFooter } from "@/features/scholarship/components";

import useProfileCompletion from "../../hooks/useProfileCompletion";

import {
  familyDetailsSchema,
  type FamilyDetailsFormData,
} from "../../schemas/familyDetails.schema";

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

  const [validationErrors, setValidationErrors] = useState<FamilyDetails>({});

  const { createParentsDetails, loading } = useProfileCompletion();

  const showGuardian =
    formData.father.isNotApplicable && formData.mother.isNotApplicable;

  const toggleParentStatus = (parent: "father" | "mother") => {
    setFormData((prev) => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        isNotApplicable: !prev[parent].isNotApplicable,
      },
    }));

    // Clear errors when parent is toggled
    setValidationErrors((prev) => ({
      ...prev,
      [parent]: undefined,
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

    setValidationErrors((prev) => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: undefined,
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

    setValidationErrors((prev) => ({
      ...prev,
      guardian: {
        ...prev.guardian,
        [field]: undefined,
      },
    }));
  };

  const withCountryCode = (mobile: string) => {
    const cleanedMobile = mobile.replace(/\D/g, "");

    return cleanedMobile ? `+91${cleanedMobile}` : "";
  };

  const handleSubmit = async () => {
    // Clear previous errors
    setValidationErrors({});

    const result = familyDetailsSchema.safeParse(formData);

    if (!result.success) {
      const errors: FamilyDetails = {};

      result.error.issues.forEach((issue) => {
        const [parent, field] = issue.path;

        if (parent === "annualFamilyIncome") {
          errors.annualFamilyIncome = issue.message;
          return;
        }

        if (
          parent === "father" ||
          parent === "mother" ||
          parent === "guardian"
        ) {
          if (!errors[parent]) {
            errors[parent] = {};
          }

          if (
            field === "name" ||
            field === "occupation" ||
            field === "mobile"
          ) {
            errors[parent][field] = issue.message;
          }
        }
      });

      setValidationErrors(errors);

      return;
    }

    const payload: Partial<FamilyDetails> = {
      annualFamilyIncome: formData.annualFamilyIncome,
    };

    if (!formData.father.isNotApplicable) {
      payload.father = {
        ...formData.father,
        mobile: withCountryCode(formData.father?.mobile),
      };
    }

    if (!formData.mother.isNotApplicable) {
      payload.mother = {
        ...formData.mother,
        mobile: withCountryCode(formData.mother?.mobile),
      };
    }

    if (showGuardian) {
      payload.guardian = {
        ...formData.guardian,
        mobile: withCountryCode(formData.guardian.mobile),
      };
    }

    try {
      await createParentsDetails(payload);
    } catch (error) {
      console.error("Failed to save family details:", error);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Father */}
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
            errors={validationErrors.father}
          />
        )}
      </div>

      <Divider />

      {/* Mother */}
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
            errors={validationErrors.mother}
          />
        )}
      </div>

      <Divider />

      {/* Guardian */}
      <div className="flex flex-col gap-6">
        <h1 className="field-group-heading">Guardian's Details </h1>

        {showGuardian && (
          <>
            <Input
              label="Full Name *"
              placeholder="Enter Full Name"
              value={formData.guardian.name}
              onChange={(e) => updateGuardianField(e.target.value, "name")}
              errorMessage={validationErrors.guardian?.name}
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
                  errorMessage={validationErrors.guardian?.occupation}
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
                  errorMessage={validationErrors.guardian?.mobile}
                />
              </div>
            </div>
          </>
        )}
      </div>

      <Divider />

      {/* Financial Information */}
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
          errorMessage={validationErrors.annualFamilyIncome}
        />
      </div>

      <StepFooter
        step="Step 3 of 4"
        action={
          <Button fullWidth={false} onClick={handleSubmit} type="button">
            {loading.createParentsDetails ? "Saving..." : "Save & Continue"}
          </Button>
        }
      />
    </div>
  );
}

export default FamilyDetailsForm;

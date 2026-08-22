import { useEffect, useState } from "react";

import useProfileCompletion from "../../hooks/useProfileCompletion";

import { StepFooter } from "@/features/scholarship/components";
import { Button, Divider, Input, Select, Textarea } from "@/shared/ui";

// custom api hook
import type { AboutYouFormData } from "@/features/auth/components/CompleteYourProfile/types/profile.types";

// Personal details schema
import {
  personalDetailsSchema,
  type FormData,
} from "../../schemas/AboutYou.schema";

function AboutYouForm() {
  const [formData, setFormData] = useState<AboutYouFormData>({
    dob: "",
    gender: "",
    nationality: "",
    phone: "",
    alternatePhone: "",
    street: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
    country: "india",
  });

  const [validationErrors, setValidationErrors] = useState<
    Partial<Record<keyof FormData, string>>
  >({});

  const { createProfile, getAddressDetails, address, loading } =
    useProfileCompletion();

  /**
   * Fetch address details when pincode reaches 6 digits.
   */
  useEffect(() => {
    if (formData.pincode.length !== 6) return;

    const fetchAddress = async () => {
      const result = await getAddressDetails(formData.pincode);

      if (!result.success) {
        setValidationErrors((prev) => ({
          ...prev,
          pincode: result.error,
        }));
      }
    };

    fetchAddress();
  }, [formData.pincode]);

  /**
   * Update district and state after pincode API response.
   */
  useEffect(() => {
    if (!address) return;

    setFormData((prev) => ({
      ...prev,
      district: address.district ?? "",
      state: address.state ?? "",
    }));
  }, [address]);

  /**
   * Generic field updater.
   */
  const updateField = <K extends keyof AboutYouFormData>(
    field: K,
    value: AboutYouFormData[K],
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Remove error as soon as user changes the field
    setValidationErrors((prev) => ({
      ...prev,
      [field]: undefined,
    }));
  };

  /**
   * Handle pincode.
   */
  const handlePincodeChange = (value: string) => {
    const pincode = value.replace(/\D/g, "").slice(0, 6);

    setFormData((prev) => ({
      ...prev,
      pincode,
      city: "",
      district: "",
      state: "",
    }));

    setValidationErrors((prev) => ({
      ...prev,
      pincode: undefined,
    }));
  };

  /**
   * Validate and submit form.
   */
  const handleSubmit = () => {
    const result = personalDetailsSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};

      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FormData;

        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      });

      setValidationErrors(fieldErrors);
      return;
    }

    setValidationErrors({});

    createProfile(result.data);
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Identity & Demographics Section*/}

      <div className="space-y-6 mb-2">
        <h1 className="field-group-heading">Identity & Demographics</h1>
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Date of Birth *"
            type="date"
            className="rounded-sm"
            value={formData.dob}
            onChange={(e) => updateField("dob", e.target.value)}
            errorMessage={validationErrors.dob}
          />

          <Select
            label="Gender *"
            placeholder="Select Gender"
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "other", label: "Others" },
            ]}
            value={formData.gender}
            onChange={(value) => updateField("gender", value)}
            errorMessage={validationErrors.gender}
          />
        </div>
        <Select
          label="Nationality *"
          placeholder="Select Nationality"
          options={[{ value: "indian", label: "Indian" }]}
          value={formData.nationality}
          onChange={(value) => updateField("nationality", value)}
          errorMessage={validationErrors.nationality}
        />
      </div>

      <Divider />

      {/* Contact Information Section*/}

      <div className="space-y-6">
        <h1 className="field-group-heading">Contact Information</h1>
        <div className="flex gap-4">
          <div className="flex-1">
            <Input
              label="Primary Phone Number *"
              type="tel"
              placeholder="10-digit number"
              leftIcon={<p className="text-black ">+91</p>}
              className="rounded-sm pl-12"
              value={formData.phone}
              onChange={(e) =>
                updateField(
                  "phone",
                  e.target.value.replace(/\D/g, "").slice(0, 10),
                )
              }
              errorMessage={validationErrors.phone}
            />
          </div>
          <div className="flex-1">
            <Input
              label="Alternate Phone Number "
              type="tel"
              placeholder="Optional"
              className="rounded-sm"
              value={formData.alternatePhone || ""}
              onChange={(e) =>
                updateField(
                  "alternatePhone",
                  e.target.value.replace(/\D/g, "").slice(0, 10),
                )
              }
              errorMessage={validationErrors.alternatePhone}
            />
          </div>
        </div>
      </div>

      <Divider />

      {/* Address Details Section*/}
      <div className="space-y-6">
        <h1 className="field-group-heading">Address Details</h1>
        <Textarea
          label="Street Address *"
          placeholder="Apartment, Street, Area"
          className="rounded-sm"
          value={formData.street}
          onChange={(e) => updateField("street", e.target.value)}
          errorMessage={validationErrors.street}
        />
        <div className="flex gap-4">
          <div className="flex-1">
            <Input
              label="Pincode *"
              placeholder="000000"
              className="rounded-sm"
              value={formData.pincode}
              onChange={(e) => handlePincodeChange(e.target.value)}
              errorMessage={validationErrors.pincode}
            />
          </div>
          <div className="flex-1">
            <Select
              label="City *"
              placeholder="Select City "
              options={address?.city.map((city) => ({
                label: city,
                value: city,
              }))}
              value={formData.city}
              onChange={(value) => updateField("city", value)}
              disabled={!address?.city?.length}
              errorMessage={validationErrors.city}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <Input
              label="District *"
              placeholder="Enter District"
              className="rounded-sm"
              disabled
              readOnly
              value={formData.district}
              errorMessage={validationErrors.district}
            />
          </div>
          <div className="flex-1">
            <Input
              label="State *"
              placeholder="Select State "
              className="rounded-sm"
              disabled
              readOnly
              value={formData.state}
              errorMessage={validationErrors.state}
            />
          </div>
        </div>
        <Select
          label="Country *"
          placeholder=""
          options={[
            { value: "india", label: "India" },
            // { value: "china", label: "China" },
          ]}
          value={formData.country}
          onChange={(value) => updateField("country", value)}
          errorMessage={validationErrors.country}
        />
      </div>
      {/* Footer Section*/}
      <StepFooter
        step="Step 1 of 4"
        action={
          <Button
            children={loading.createProfile ? "Saving..." : "Save & Continue"}
            fullWidth={false}
            className="cursor-pointer"
            disabled={loading.createProfile}
            onClick={handleSubmit}
          />
        }
      />
    </div>
  );
}

export default AboutYouForm;

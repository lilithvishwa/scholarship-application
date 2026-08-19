import { StepFooter } from "@/features/scholarship/components";
import { Button, Divider, Input, Select, Textarea } from "@/shared/ui";
import { useEffect, useState } from "react";
import type { AboutYouFormData } from "@/features/auth/components/CompleteYourProfile/types/profile.types";
import useProfileCompletion from "../../hooks/useProfileCompletion";

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
  console.log(formData);

  const { createProfile, getAddressDetails, address } = useProfileCompletion();
  console.log(address);
  console.log(address.city);

  useEffect(() => {
    if (formData.pincode.length === 6) {
      console.log("Api Called");
      getAddressDetails(formData.pincode);
    }
  }, [formData.pincode]);

  const handleSubmit = () => {
    createProfile(formData);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-6">
        <h1 className="field-group-heading">Identity & Demographics</h1>
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Date of Birth *"
            type="date"
            className="rounded-sm"
            value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
          />
          <Select
            label="Gender *"
            placeholder="Select Gender"
            // options={["Male", "Female"]}
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e })}
          />
        </div>
        <Select
          label="Nationality *"
          placeholder="Select Nationality"
          options={[{ value: "indian", label: "Indian" }]}
          value={formData.nationality}
          onChange={(e) => setFormData({ ...formData, nationality: e })}
        />
      </div>
      <Divider />
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
              pattern="[0-9]{10}"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="flex-1">
            <Input
              label="Alternate Phone Number "
              type="tel"
              placeholder="Optional"
              className="rounded-sm"
              value={formData.alternatePhone}
              onChange={(e) =>
                setFormData({ ...formData, alternatePhone: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <Divider />
      <div className="space-y-6">
        <h1 className="field-group-heading">Address Details</h1>
        <Textarea
          label="Street Address *"
          placeholder="Apartment, Street, Area"
          className="rounded-sm"
          value={formData.street}
          onChange={(e) => setFormData({ ...formData, street: e.target.value })}
        />
        <div className="flex gap-4">
          <div className="flex-1">
            <Input
              label="Pincode *"
              placeholder="000000"
              className="rounded-sm"
              value={formData.pincode}
              onChange={(e) =>
                setFormData({ ...formData, pincode: e.target.value })
              }
            />
          </div>
          <div className="flex-1">
            {/*<Input
              label="City *"
              placeholder="Enter City "
              className="rounded-sm"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />*/}

            <Select
              label="City *"
              placeholder="Select City "
              options={address?.city.map((city) => ({
                label: city,
                value: city,
              }))}
              value={formData.city}
              onChange={(value) => setFormData({ ...formData, city: value })}
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
              value={address.district}
              onChange={(e) =>
                setFormData({ ...formData, district: e.target.value })
              }
            />
          </div>
          <div className="flex-1">
            <Input
              label="State *"
              placeholder="Select State "
              className="rounded-sm"
              disabled
              value={address.state}
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
            />
          </div>
        </div>
        <Select
          label="Country *"
          placeholder=""
          options={[
            { value: "india", label: "India" },
            { value: "china", label: "China" },
          ]}
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e })}
        />
      </div>
      <StepFooter
        step="Step 1 of 3"
        action={
          <Button
            children="Save & Continue"
            fullWidth={false}
            className="cursor-pointer"
            onClick={handleSubmit}
          />
        }
      />
    </div>
  );
}

export default AboutYouForm;

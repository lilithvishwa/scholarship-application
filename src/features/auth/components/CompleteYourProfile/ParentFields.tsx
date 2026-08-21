import { Input, Select } from "@/shared/ui";
import type { ParentDetails } from "./types/profile.types";

const OCCUPATION_OPTIONS = [
  { label: "Government Sector", value: "government sector" },
  { label: "Private Sector", value: "private sector" },
  { label: "Self-Employed", value: "self-employed" },
  { label: "Other", value: "other" },
];

interface ParentFieldErrors {
  name?: string;
  occupation?: string;
  mobile?: string | null;
}

interface ParentFieldsProps {
  parent: "father" | "mother";
  data: ParentDetails;
  onChange: (
    parent: "father" | "mother",
    field: "name" | "occupation" | "mobile",
    value: string,
  ) => void;
  errors?: ParentFieldErrors;
}

function ParentFields({ parent, data, onChange, errors }: ParentFieldsProps) {
  return (
    <>
      <Input
        label="Full Name *"
        placeholder="Enter Full Name"
        value={data.name}
        onChange={(e) => onChange(parent, "name", e.target.value)}
        errorMessage={errors?.name}
      />

      <div className="flex gap-4">
        <div className="flex-1">
          <Select
            label="Occupation *"
            placeholder="Select Occupation"
            options={OCCUPATION_OPTIONS}
            value={data.occupation}
            onChange={(e) => onChange(parent, "occupation", e)}
            errorMessage={errors?.occupation}
          />
        </div>

        <div className="flex-1">
          <Input
            label="Phone Number *"
            placeholder="10-digit number"
            value={data.mobile}
            onChange={(e) => onChange(parent, "mobile", e.target.value)}
            leftIcon={<p className="text-black">+91</p>}
            className="rounded-sm pl-12"
            errorMessage={errors?.mobile}
          />
        </div>
      </div>
    </>
  );
}

export default ParentFields;

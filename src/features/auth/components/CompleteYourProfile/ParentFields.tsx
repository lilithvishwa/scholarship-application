import { Input, Select } from "@/shared/ui";
import type { ParentDetails } from "./types/profile.types";

const OCCUPATION_OPTIONS = [
  { label: "Government Sector", value: "government sector" },
  { label: "Private Sector", value: "private sector" },
  { label: "Self-Employed", value: "self-employed" },
  { label: "Other", value: "other" },
];

interface ParentFieldsProps {
  parent: "father" | "mother";
  data: ParentDetails;
  onChange: (
    parent: "father" | "mother",
    field: "name" | "occupation" | "mobile",
    value: string,
  ) => void;
}

function ParentFields({ parent, data, onChange }: ParentFieldsProps) {
  return (
    <>
      <Input
        label="Full Name *"
        placeholder="Enter Full Name"
        value={data.name}
        onChange={(e) => onChange(parent, "name", e.target.value)}
      />

      <div className="flex gap-4">
        <div className="flex-1">
          <Select
            label="Occupation *"
            placeholder="Select Occupation"
            options={OCCUPATION_OPTIONS}
            value={data.occupation}
            onChange={(e) => onChange(parent, "occupation", e)}
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
          />
        </div>
      </div>
    </>
  );
}

export default ParentFields;

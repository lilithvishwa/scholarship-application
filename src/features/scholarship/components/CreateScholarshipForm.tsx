import { Button, Input, Textarea } from "@/shared/ui";
import StepFooter from "./StepFooter";
import RichTextEditor from "@/shared/ui/TextEditor/RichTextEditor";
import { useState } from "react";
import TagSelect from "@/shared/ui/Inputs/TagSelect";
import { useNavigate } from "react-router-dom";

interface dataProps {
  title: string;
  description: string;
  eligibility: string;
  date: string;
  tags: string[];
}

function CreateScholarshipForm() {
  const [data, setData] = useState<dataProps>({
    title: "",
    description: "",
    eligibility: "",
    date: "",
    tags: [],
  });
  console.log(data);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col w-full gap-2 items-center text-center justify-center">
        <h1 className="form-step-heading">Create New Scholarship</h1>
        <p className="body-large text-instructions">
          Let's start with the public-facing details that applicants will see
          before they apply.
        </p>
      </div>

      <div className="flex flex-col gap-6 ">
        <Input
          label="Title"
          placeholder="Enter title of the scholarship"
          className="rounded-sm"
          value={data.title || ""}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <Textarea
          label="Description"
          className="rounded-sm"
          placeholder="Briefly describe the purpose of this scholarship..."
          value={data.description || ""}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />

        <RichTextEditor
          label="Eligibility Criteria"
          value={data?.eligibility || ""}
          onChange={(eligibility) => setData({ ...data, eligibility })}
          placeholder={
            data?.eligibility
              ? ""
              : ["Minimum GPA of 3.5", "Currently enrolled in a STEM "]
            // "<ul><li><p>Minimum GPA of 3.5</p></li><li><p>Currently enrolled in a STEM</p></li></ul>"
          }
        />

        <Input
          label="Deadline"
          type="date"
          className="rounded-sm"
          value={data.date || ""}
          onChange={(e) => setData({ ...data, date: e.target.value })}
        />

        <TagSelect
          label="Tags"
          placeholder="for whom"
          options={[
            { id: "undergraduate", label: "Undergraduate" },
            { id: "postgraduate", label: "Postgraduate" },
            { id: "be-btech", label: "B.E / B.Tech" },
          ]}
          value={data?.tags || []}
          onChange={(tags) => setData({ ...data, tags })}
        />

        <StepFooter
          step="Step 1 of 2"
          action={
            <Button
              fullWidth={false}
              className="px-8 py-4 cursor-pointer"
              children="Save & Continue"
              onClick={() => navigate("/scholarship/choose")}
            />
          }
        />
      </div>
    </div>
  );
}

export default CreateScholarshipForm;

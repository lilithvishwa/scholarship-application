import { Input } from "@shared/ui";

interface TextValidationProps {
  showFormat: boolean;
}

function TextValidation({ showFormat }: TextValidationProps) {
  return (
    <div className="flex flex-col gap-6">
      <p className="body">VALIDATION RULES</p>

      {showFormat && (
        <div>
          <label className="caption text-body-muted">FORMAT</label>

          <select className="w-full h-12 border border-hairline px-4 mt-2">
            <option>Any Text</option>
            <option>Email</option>
            <option>Phone Number</option>
            <option>URL</option>
          </select>
        </div>
      )}

      <Input label="MINIMUM LENGTH" placeholder="3" />

      <Input label="MAXIMUM LENGTH" placeholder="20" />
    </div>
  );
}

export default TextValidation;

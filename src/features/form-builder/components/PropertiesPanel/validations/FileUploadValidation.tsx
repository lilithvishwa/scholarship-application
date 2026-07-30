import type { FormField } from "@/features/form-builder/types/FieldType";

interface Props {
  field: FormField;
  updateValidation: (
    fieldId: string,
    validation: Partial<FormField["validation"]>,
  ) => void;
}

function FileUploadValidation({ field, updateValidation }: Props) {
  const acceptedFiles = field.validation?.acceptedFileTypes ?? [];
  // console.log(acceptedFiles);

  const toggleFileType = (type: string) => {
    const exists = acceptedFiles.includes(type);

    const updated = exists
      ? acceptedFiles.filter((item) => item !== type)
      : [...acceptedFiles, type];

    updateValidation(field.id, { acceptedFileTypes: updated });
  };

  return (
    <div className="flex flex-col gap-6">
      <p className="body">VALIDATION RULES</p>

      <div>
        <label className="caption text-body-muted">ACCEPTED FILE TYPES</label>

        <div className="flex gap-4 mt-2">
          <label>
            <input
              type="checkbox"
              checked={acceptedFiles.includes("pdf")}
              onChange={() => toggleFileType("pdf")}
            />{" "}
            PDF
          </label>

          <label>
            <input
              type="checkbox"
              checked={acceptedFiles.includes("jpg")}
              onChange={() => toggleFileType("jpg")}
            />{" "}
            JPG / PNG
          </label>

          <label>
            <input
              type="checkbox"
              checked={acceptedFiles.includes("docx")}
              onChange={() => toggleFileType("docx")}
            />{" "}
            DOCX
          </label>
        </div>
      </div>

      <div>
        <label className="caption text-body-muted">MAXIMUM FILE SIZE</label>

        <select
          className="w-full h-12 border border-hairline px-4 mt-2"
          value={field.validation?.maxFileSize ?? ""}
          onChange={(e) =>
            updateValidation(field.id, {
              maxFileSize: Number(e.target.value),
            })
          }
        >
          <option value={5}>5 MB</option>
          <option value={10}>10 MB</option>
          <option value={20}>20 MB</option>
        </select>
      </div>
    </div>
  );
}

export default FileUploadValidation;

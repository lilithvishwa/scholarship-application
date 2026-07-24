function FileUploadValidation() {
  return (
    <div className="flex flex-col gap-6">
      <p className="body">VALIDATION RULES</p>

      <div>
        <label className="caption text-body-muted">ACCEPTED FILE TYPES</label>

        <div className="flex gap-4 mt-2">
          <label>
            <input type="checkbox" /> PDF
          </label>

          <label>
            <input type="checkbox" /> JPG / PNG
          </label>

          <label>
            <input type="checkbox" /> DOCX
          </label>
        </div>
      </div>

      <div>
        <label className="caption text-body-muted">MAXIMUM FILE SIZE</label>

        <select className="w-full h-12 border border-hairline px-4 mt-2">
          <option>5 MB</option>
          <option>10 MB</option>
          <option>20 MB</option>
        </select>
      </div>
    </div>
  );
}

export default FileUploadValidation;

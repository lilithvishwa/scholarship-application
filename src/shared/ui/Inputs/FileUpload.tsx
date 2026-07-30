import { useDropzone } from "react-dropzone";

import Icon from "../Icon/Icon";

interface FileUploadProps {
  label: string;
}

function FileUpload({ label }: FileUploadProps) {
  const onDrop = (acceptedFiles: File[]): void => {
    console.log(acceptedFiles);
  };

  const { isDragActive, getInputProps, getRootProps } = useDropzone({ onDrop });

  return (
    <div>
      <div>
        <label className="caption text-ink">{label}</label>
      </div>
      <div
        {...getRootProps()}
        className={`flex h-40 w-full items-center justify-center border-2 border-hairline border-dashed ${isDragActive ? "border-focus-blue bg-blue-50 cursor-grab" : "cursor-pointer"} `}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center space-y-2">
          <Icon
            name="mdi:cloud-upload-outline"
            size={32}
            className="text-body-muted"
          />

          <div className="text-center">
            <p className="text-body">
              {isDragActive
                ? "Drop your files here"
                : "Drag & drop your file here"}
            </p>
            <p className="text-focus-blue">Browse Files</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FileUpload;

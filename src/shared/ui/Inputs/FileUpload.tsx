import { useState } from "react";
import { useDropzone, type Accept, type FileRejection } from "react-dropzone";

import Icon from "../Icon/Icon";
import { FileAttachmentCard } from "../Cards/FileAttachmentCard";

interface FileUploadProps {
  label: string;
  supportedFormats?: string;
  maxSizeInMB?: number;
  onFileChange?: (file: File | null) => void;
  accept?: Accept;
  uploadSuccess?: boolean;
}

function FileUpload({
  label,
  supportedFormats,
  maxSizeInMB = 10,
  onFileChange,
  accept,
  uploadSuccess = false,
}: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onDrop = (acceptedFiles: File[], fileRejections: FileRejection[]) => {
    setError(null);

    // Invalid file
    if (fileRejections.length > 0) {
      const rejectedFile = fileRejections[0]?.file;

      if (!rejectedFile) return;

      setSelectedFile(rejectedFile);

      setError("Unsupported file format");
      onFileChange?.(null);

      return;
    }
    const file = acceptedFiles[0];

    if (!file) return;

    setSelectedFile(file);
    setError(null);

    onFileChange?.(file);
  };

  const handleRemove = () => {
    setSelectedFile(null);
    setError(null);

    onFileChange?.(null);
  };

  const { isDragActive, getInputProps, getRootProps } = useDropzone({
    onDrop,
    multiple: false,
    maxSize: maxSizeInMB * 1024 * 1024,
    accept,
  });

  const fileSizeInMB = selectedFile ? selectedFile.size / (1024 * 1024) : 0;

  return (
    <div>
      <div className="mb-2">
        <label className="caption text-ink">{label}</label>
      </div>

      {!selectedFile ? (
        <>
          <div
            {...getRootProps()}
            className={`flex h-40 w-full items-center justify-center border-2 border-hairline border-dashed ${
              isDragActive ? "border-focus-blue bg-blue-50" : "cursor-pointer"
            }`}
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
                    ? "Drop your file here"
                    : "Drag & drop your file here"}
                </p>

                <p className="text-focus-blue">Browse Files</p>
              </div>
            </div>
          </div>

          <div className="mt-2">
            <p className="text-center disclaimer-text text-body-muted">
              {supportedFormats}
            </p>
          </div>
        </>
      ) : (
        <FileAttachmentCard
          fileName={selectedFile.name}
          fileSizeInMB={fileSizeInMB}
          error={error}
          onRemove={handleRemove}
          uploadSuccess={uploadSuccess}
        />
      )}
    </div>
  );
}

export default FileUpload;

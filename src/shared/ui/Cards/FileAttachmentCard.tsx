import Icon from "../Icon/Icon";

interface FileAttachmentCardProps {
  fileName: string;
  fileSizeInMB: number;
  onRemove?: () => void;
  error?: string | null;
  uploadSuccess?: boolean;
}

export function FileAttachmentCard({
  fileName,
  fileSizeInMB,
  onRemove,
  error,
  uploadSuccess = false,
}: FileAttachmentCardProps) {
  const hasError = Boolean(error);

  // SUCCESS STATE
  if (uploadSuccess) {
    return (
      <div className="border-2 border-on-green bg-pale-green p-8">
        <div className="flex flex-col items-center text-center gap-2">
          <Icon name="mdi:tick-circle" size={24} className="text-on-green" />

          <h2 className="body text-on-green">Document Uploaded Successfully</h2>

          <p className="caption  text-body-muted">
            Our volunteers are reviewing your ID. You will be notified within 24
            hours. You can now explore your dashboard!
          </p>
        </div>
      </div>
    );
  }

  // ERROR STATE
  if (hasError) {
    return (
      <div className="flex items-center justify-between gap-4 rounded-xs border-2 border-error bg-light-red p-4">
        <div className="flex min-w-0 items-center gap-4">
          <span className="shrink-0 text-error">
            <Icon name="material-symbols:warning-outline" size={24} />
          </span>

          <div>
            <p className="mt-1 body text-error">{error}</p>

            <p className="caption text-body-muted">
              Please select a PDF, JPG, or PNG under 5MB.
            </p>
          </div>
        </div>

        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="cursor-pointer text-body-muted hover:text-error"
            aria-label={`Remove ${fileName}`}
          >
            <Icon name="mdi:close" size={22} />
          </button>
        )}
      </div>
    );
  }

  // NORMAL STATE
  return (
    <div className="flex items-center justify-between gap-4 rounded-xs border-2 border-hairline bg-white p-4 hover:border-focus-blue hover:bg-light-blue">
      <div className="flex min-w-0 items-center gap-4">
        <span className="shrink-0 rounded-sm border border-hairline p-2 text-action-blue">
          <Icon name="mdi:file-document" size={24} />
        </span>

        <div className="min-w-0">
          <p className="truncate">{fileName}</p>

          <p className="disclaimer-text text-body-muted">
            {fileSizeInMB.toFixed(1)} MB
          </p>
        </div>
      </div>

      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="cursor-pointer text-body-muted hover:text-error"
          aria-label={`Remove ${fileName}`}
        >
          <Icon name="mdi:close" size={22} />
        </button>
      )}
    </div>
  );
}

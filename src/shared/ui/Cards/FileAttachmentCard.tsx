import Icon from "../Icon/Icon";

interface FileAttachmentCardProps {
  fileName: string;
  fileSizeInMB: number;
}

export function FileAttachmentCard({
  fileName,
  fileSizeInMB,
}: FileAttachmentCardProps) {
  return (
    <div className="flex items-center border border-hairline p-4 bg-white gap-4 cursor-pointer">
      <span className="border border-hairline text-action-blue rounded-sm p-2 shrink-0">
        <Icon name="mdi:file-document" size={24} />
      </span>
      <div className="min-w-0">
        <p className="truncate">{fileName}</p>
        <p className="disclaimer-text text-body-muted">
          {fileSizeInMB.toFixed(1)} MB
        </p>
      </div>
    </div>
  );
}

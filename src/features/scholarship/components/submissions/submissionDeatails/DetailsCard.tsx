import { Panel, DetailItem, FileAttachmentCard } from "@/shared/ui";
import type { DetailsCardProps, FileValue } from "./types";
import clsx from "clsx";

export function DetailsCard<T extends object>({
  title,
  fields,
  data,
  columns = 2,
}: DetailsCardProps<T>) {
  return (
    <Panel variant="outlined" widthClass="w-full" className="space-y-4">
      <h2 className="field-group-heading">{title}</h2>
      <div className="h-px bg-hairline" />
      <div
        className={clsx(
          "grid gap-8",
          columns === 1 && "grid-cols-1",
          columns === 2 && "grid-cols-2",
          columns === 3 && "grid-cols-3",
        )}
      >
        {fields.map((field) => (
          <div
            key={String(field.key)}
            className={field.colSpan === 2 ? "col-span-2" : ""}
          >
            {field.type === "file" ? (
              (() => {
                const file = data[field.key] as FileValue;
                const sizeInMB =
                  typeof file.size === "number"
                    ? file.size
                    : parseFloat(file.size);
                return (
                  <div className="space-y-2">
                    <p className="body text-body-muted ">{field.label}</p>
                    <FileAttachmentCard
                      fileName={file.name}
                      fileSizeInMB={sizeInMB}
                    />
                  </div>
                );
              })()
            ) : (
              <DetailItem label={field.label} value={String(data[field.key])} />
            )}
          </div>
        ))}
      </div>
    </Panel>
  );
}

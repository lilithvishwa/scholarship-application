import { Icon } from "@/shared/ui";

export function DragHandle() {
  return (
    <div className="flex min-h-27">
      <div className="flex w-6 cursor-grab items-center justify-center rounded-s-xs bg-cohere-black active:cursor-grabbing">
        <Icon
          name="fluent:re-order-dots-vertical-16-filled"
          size={16}
          className="text-white"
        />
      </div>
      <div className="relative flex-1 rounded-e-xs border border-l-0 border-hairline">
        <div className="absolute right-0 flex gap-2 text-body-muted p-4">
          <Icon
            name="material-symbols:content-copy-outline-rounded"
            size={16}
          />
          <Icon name="material-symbols:delete-outline" size={16} />
        </div>
      </div>
    </div>
  );
}

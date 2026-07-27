import { Icon } from "@/shared/ui";

export function DragHandle() {
  return (
    <div className="absolute left-0 top-0 flex h-full w-full items-center opacity-0 transition-opacity duration-450 group-hover:opacity-100">
      <div className="flex w-6 h-full cursor-grab items-center justify-center rounded-s-xs bg-cohere-black active:cursor-grabbing">
        <Icon
          name="fluent:re-order-dots-vertical-16-filled"
          size={16}
          className="text-white"
        />
      </div>
      <div className="relative w-full h-full flex-1 rounded-e-xs border border-l-0 border-hairline">
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

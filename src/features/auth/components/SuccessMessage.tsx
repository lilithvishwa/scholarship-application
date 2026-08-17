import { Icon } from "@/shared/ui";

type SuccessMessageProps = {
  message: string;
};

function SuccessMessage({ message }: SuccessMessageProps) {
  return (
    <div className="flex items-center justify-center gap-2 text-center bg-light-green text-on-green border border-on-green rounded-xs p-2 mb-4 mt-2">
      <Icon name="mdi:checkbox-marked-circle" size={28} />
      <p className="disclaimer-text leading-5 max-w-xs ">{message}</p>
    </div>
  );
}

export default SuccessMessage;

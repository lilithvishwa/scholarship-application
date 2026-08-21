interface StepFooterProps {
  step?: string;
  action: React.ReactNode;
  border?: boolean;
  className?: string;
  borderPadding?: string;
}

function StepFooter({
  step,
  action,
  border = true,
  borderPadding,
}: StepFooterProps) {
  return (
    <div
      className={` ${borderPadding ? borderPadding : "py-6"}  border-white ${border ? "border-t border-t-[#c8c5cb]" : ""}`}
    >
      <div className="flex items-center justify-between">
        <p className="disclaimer-text text-muted">{step}</p>
        {action}
      </div>
    </div>
  );
}

export default StepFooter;

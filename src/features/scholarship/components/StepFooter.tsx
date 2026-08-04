interface StepFooterProps {
  step?: string;
  action: React.ReactNode;
}

function StepFooter({ step, action }: StepFooterProps) {
  return (
    <div className="py-6 border-t border-t-[#c8c5cb] border-white">
      <div className="flex items-center justify-between">
        <p className="disclaimer-text text-muted">{step}</p>
        {action}
      </div>
    </div>
  );
}

export default StepFooter;

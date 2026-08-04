import type React from "react";

interface PageHeaderProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
}

function PageHeader({ left, center, right }: PageHeaderProps) {
  return (
    <header className="flex h-18 items-center justify-between border-b border-hairline bg-white px-6">
      {/* Left */}
      <div className="flex items-center gap-4">{left}</div>

      {/* Center */}
      <div className="flex items-center gap-2">{center}</div>

      {/* Right */}
      <div className="flex items-center gap-4">{right}</div>
    </header>
  );
}

export default PageHeader;

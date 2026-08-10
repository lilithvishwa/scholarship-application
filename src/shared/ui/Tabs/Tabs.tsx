import clsx from "clsx";
import { useState } from "react";

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultTab?: string;
}

export default function Tabs({ tabs, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab ?? tabs[0]?.id);

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div>
      <div className="flex border-b border-hairline">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "body relative px-4 py-3 text-sm",
                isActive ? "text-primary" : "text-body-muted",
              )}
            >
              {tab.label}

              {isActive && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-action-blue" />
              )}
            </button>
          );
        })}
      </div>

      <div className="pt-4">{activeContent}</div>
    </div>
  );
}

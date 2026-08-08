// import { href } from "react-router-dom";

import Icon from "../Icon/Icon";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function ({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb">
      <ol
        style={{
          display: "flex",
          gap: "6px",
          listStyle: "none",
          padding: 0,
        }}
        className="caption"
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={index}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              {item.href && !isLast ? (
                <a href={item.href} className="text-body-muted">
                  {item.label}
                </a>
              ) : (
                <span aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && <Icon name="weui:arrow-filled" size={20} />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

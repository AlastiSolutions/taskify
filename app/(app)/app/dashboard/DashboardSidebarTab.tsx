import Link from "next/link";

import {
  DashboardSidebarTabProps,
  SidebarTabTypes,
} from "@/constants/dashboard.types";

const DashboardSidebarTab: React.FC<DashboardSidebarTabProps> = ({
  link,
  emoji,
  title,
  selected,
  type,
  onClick,
}) => {
  return (
    <li
      className={selected === type ? "mb-4 bg-gray-900 p-2 rounded-md" : "mb-4"}
      onClick={onClick}
    >
      <Link href={link}>
        <p className="flex items-center">
          <span className="mr-2">{emoji}</span>
          {title}
        </p>
      </Link>
    </li>
  );
};

export default DashboardSidebarTab;

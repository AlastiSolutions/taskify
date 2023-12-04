"use client";

import Link from "next/link";
import { useState } from "react";

import DashboardSidebarTab from "./DashboardSidebarTab";
import { SidebarTabTypes } from "@/constants/dashboard.types";

export default function DashboardSidebar() {
  const [selectedTab, setSelectedTab] = useState(SidebarTabTypes.Dashboard);

  const testUser = {
    name: "Jane Doe",
    email: "jane@example.com",
  };

  const testProjects = ["Project 1", "Project 2", "Project 3"];
  const testTasks = ["Task 1", "Task 2", "Task 3"];

  const handleSidebarTabClick = (sidebarTab: SidebarTabTypes) => {
    setSelectedTab(sidebarTab);
  };

  return (
    <aside className="flex flex-col bg-neutral-800 text-white min-h-full w-64 p-8">
      <div className="mb-4">
        <Link href="/">
          <p className="text-xs text-gray-100">{"<< Go back to site"}</p>
        </Link>
      </div>
      {/* User Info */}
      <div className="mb-6">
        <h2 className="text-xl font-bold">{testUser.name}</h2>
        <p className="text-sm">{testUser.email}</p>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul>
          <DashboardSidebarTab
            link="/dashboard"
            title="Dashboard"
            emoji="🏠"
            type={SidebarTabTypes.Dashboard}
            selected={selectedTab}
            onClick={() => handleSidebarTabClick(SidebarTabTypes.Dashboard)}
          />
          <DashboardSidebarTab
            link="/dashboard/projects"
            title="Projects"
            emoji="🚀"
            type={SidebarTabTypes.Projects}
            selected={selectedTab}
            onClick={() => handleSidebarTabClick(SidebarTabTypes.Projects)}
          />
          <DashboardSidebarTab
            link="/dashboard/tasks"
            title="Tasks"
            emoji="✅"
            type={SidebarTabTypes.Tasks}
            selected={selectedTab}
            onClick={() => handleSidebarTabClick(SidebarTabTypes.Tasks)}
          />
          <DashboardSidebarTab
            link="/dashboard/profile"
            title="Profile"
            emoji="👤"
            type={SidebarTabTypes.Profile}
            selected={selectedTab}
            onClick={() => handleSidebarTabClick(SidebarTabTypes.Profile)}
          />
        </ul>
      </nav>
      <div className="mt-8">
        <h3 className="text-lg font-bold mb-4">Your Projects</h3>
        <ul>
          {testProjects.map((project, index) => (
            <li key={index} className="mb-2">
              {project}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-bold mb-4">Tasks</h3>
        <ul>
          {testTasks.map((task, index) => (
            <li key={index} className="mb-2">
              {task}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

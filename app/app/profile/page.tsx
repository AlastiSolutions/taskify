import DashboardProfileSettingsTab from "@/app/app/dashboard/DashboardProfileSettingsTab";

export default function ProfilePage() {
  return (
    <div className="flex flex-row gap-4 min-h-full">
      <div className="container flex-1 p-6 w-[50%] border border-white rounded  ">
        <h1 className="text-2xl">Profile Settings</h1>
        <DashboardProfileSettingsTab title="Name" />
        <DashboardProfileSettingsTab title="Date of Birth" />
      </div>
      <div className="container flex-1 p-6 w-[50%] border border-white rounded">
        <h1 className="text-2xl">Taskify Settings</h1>
      </div>
    </div>
  );
}

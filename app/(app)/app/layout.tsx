import DashboardSidebar from "@/app/(app)/app/dashboard/DashboardSidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <section id="dashboard" className="flex min-h-screen">
      <DashboardSidebar />
      <div id="dashboard_children" className="p-4 bg-neutral-700 w-full">
        {children}
      </div>
    </section>
  );
};

export default DashboardLayout;

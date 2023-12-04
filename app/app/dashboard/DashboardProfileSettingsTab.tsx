import { DashboardProfileSettingsTabProps } from "@/constants/dashboard.types";

const DashboardProfileSettingsTab: React.FC<
  DashboardProfileSettingsTabProps
> = ({ title }) => {
  return (
    <>
      <div className="flex mt-6 mb-4 justify-between">
        <h3 className="mr-4 text-md self-center ">{title + ":"}</h3>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-neutral-700 border-2 border-t-neutral-700 border-x-neutral-700 border-b-white focus:border-x-white focuse:border-y-white active:border-x-white focus:border-y-white outline-none p-1 w-[50%]"
        />
      </div>
    </>
  );
};

export default DashboardProfileSettingsTab;

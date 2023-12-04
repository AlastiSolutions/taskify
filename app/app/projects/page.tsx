import ProjectDetailView from "./ProjectDetailView";
import ProjectsListView from "./ProjectsListView";
import UpcomingDataView from "./UpcomingDataView";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-full min-w-full w-full h-full gap-4">
      <div className="flex flex-col flex-2 gap-4 min-h-full w-[75%]">
        <ProjectsListView />
        <ProjectDetailView />
      </div>
      <UpcomingDataView />
    </div>
  );
}

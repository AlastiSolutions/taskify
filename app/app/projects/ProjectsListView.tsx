export default function ProjectsListView() {
  const testProjects = [
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 1",
    "Project 2",
    "Project 3",
  ];

  return (
    <div className=" flex flex-col flex-wrap  flex-1  p-6 border border-white rounded h-[25%] ">
      <h1 className="text-2xl mb-6">Projects</h1>
      {testProjects.map((project, index) => (
        <div
          key={index}
          className="flex flex-row rounded-md items-center justify-between w-[15%] bg-gray-800 hover:bg-gray-200 hover:text-gray-800 mb-4 p-2"
        >
          <h1 className="text-md overflow-auto">{project}</h1>
          <p className="text-sm xl:block hidden">Task Count: {index}</p>
        </div>
      ))}
    </div>
  );
}

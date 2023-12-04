export default function ProjectDetailView() {
  const testTasks = [
    "task1",
    "task1",
    "task1",
    "task1",
    "task1",
    "task1",
    "task1",
    "task1",
    "task1",
    "task1",
    "task1",
    "task1",
    "task1",
    "task1",
    "task1",
    "task1",
  ];

  return (
    <div className=" flex flex-col gap-2 flex-2 p-6 border border-white rounded h-[75%] w-full ">
      <h1 className="text-2xl mb-4">Project View</h1>
      <div className="flex flex-row p-8 border border-white ">
        <div className="flex flex-row flex-[2] p-4 gap-6 border border-white`">
          <div className="flex flex-col self-start border border-white p-2 w-[50%]">
            <h1 className="mb-4">Tasks</h1>
            {testTasks.map((task, index) => (
              <div className="flex flex-row gap-2" key={index}>
                <h1 className="text-md">task</h1>
              </div>
            ))}
          </div>
          <div className="w-[50%] flex flex-col self-end border border-white p-2">
            <h1>Collaborators</h1>
          </div>
        </div>
        <div className="flex flex-col flex-1 p-4 border border-white">
          <h1>Actions</h1>
        </div>
      </div>
    </div>
  );
}

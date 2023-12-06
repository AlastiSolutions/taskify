import Navbar from "@/components/ui/Navbar";

export default function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full flex flex-col items-center justify-center mt-80">
        <h1 className="text-3xl">Welcome to Taskify</h1>
        <h3 className="text-xl">Your last project managment solution</h3>
        <button className="mt-12 bg-blue-500 p-4 rounded hover:bg-blue-800">
          Get Started
        </button>
      </div>
    </>
  );
}

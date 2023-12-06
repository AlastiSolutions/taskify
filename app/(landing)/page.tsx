import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full flex flex-col items-center justify-center mt-80">
        <h1 className="text-4xl">Welcome to Taskify</h1>
        <h3 className="text-xl">Your last project managment solution</h3>
        <Link
          href="/login"
          className="mt-12 bg-blue-500 p-4 rounded hover:bg-blue-800"
        >
          Get Started
        </Link>
      </div>
    </>
  );
}

import Link from "next/link";

export default function Pricing() {
  return (
    <div className="container m-10 mx-auto">
      {/* FREE Plan */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black p-12">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className=" text-2xl font-semibold text-center mb-4">Basic</h2>
          <p className="text-gray-600 mb-4">Basic Features included</p>
          <ul className="list-disc pl-4 mb-6">
            <li>Limited Projects</li>
            <li>Basic Task Management</li>
            <li>Community Support</li>
          </ul>
          <p className="text-2xl text-center font-bold">Free</p>
          <p className="text-gray-600 text-center">For Life</p>
          <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            <Link href="/signup/free/01">Sign Up</Link>
          </button>
        </div>

        {/* Standard Plan */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-4">Standard</h2>
          <p className="text-gray-600 mb-4">Additional features:</p>
          <ul className="list-disc pl-4 mb-6">
            <li>Unlimited projects</li>
            <li>Advanced task management</li>
            <li>Email support</li>
          </ul>
          <p className="text-2xl text-center font-bold">$9.99</p>
          <p className="text-gray-600 text-center">per month</p>
          <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            <Link href="/signup/standard/01">Sign Up</Link>
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-4">Premium</h2>
          <p className="text-gray-600 mb-4">All features included:</p>
          <ul className="list-disc pl-4 mb-6">
            <li>Priority support</li>
            <li>Customization options</li>
            <li>Enhanced collaboration tools</li>
          </ul>
          <p className="text-2xl text-center font-bold">$19.99</p>
          <p className="text-gray-600 text-center">per month</p>
          <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            <Link href="/signup/premium/02">Sign Up</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

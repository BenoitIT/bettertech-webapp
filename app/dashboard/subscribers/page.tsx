import Link from "next/link";
import SubscriptionUpdates from "../(pageContents)/sub";

const Page = () => {
  return (
    <div>
      <div className=" m-4 flex flex-row gap-2 font-semibold text-sm">
        <Link href="/dashboard" className="hover:text-emerald-700">
          Home
        </Link>
        <h2 className="text-emerald-700">Better Technology Subscribles</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-6">
      <p className="p-2 rounded text-sm bg-white text-gray-700 border border-gray-400">email@example.com</p>
      <p className="p-2 rounded text-sm bg-white text-gray-700 border border-gray-400">email@example.com</p>
      <p className="p-2 rounded text-sm bg-white text-gray-700 border border-gray-400">email@example.com</p>
      <p className="p-2 rounded text-sm bg-white text-gray-700 border border-gray-400">email@example.com</p>
      <p className="p-2 rounded text-sm bg-white text-gray-700 border border-gray-400">email@example.com</p>
      <p className="p-2 rounded text-sm bg-white text-gray-700 border border-gray-400">email@example.com</p>
      <p className="p-2 rounded text-sm bg-white text-gray-700 border border-gray-400">email@example.com</p>
      <p className="p-2 rounded text-sm bg-white text-gray-700 border border-gray-400">email@example.com</p>
      <p className="p-2 rounded text-sm bg-white text-gray-700 border border-gray-400">email@example.com</p>
      <p className="p-2 rounded text-sm bg-white text-gray-700 border border-gray-400">email@example.com</p>
      <p className="p-2 rounded text-sm bg-white text-gray-700 border border-gray-400">email@example.com</p>
      </div>
      <SubscriptionUpdates/>
    </div>
  );
};
export default Page;

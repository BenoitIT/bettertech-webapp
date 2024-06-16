import Link from "next/link";
import Messages from "../(pageContents)/message";

const Page = () => {
  return (
    <div>
      <div className=" m-4 flex flex-row gap-2 font-semibold text-sm">
        <Link href="/dashboard" className="hover:text-emerald-700">
          Home
        </Link>
        <h2 className="text-emerald-700">Messages</h2>
      </div>
      <Messages />
    </div>
  );
};
export default Page;

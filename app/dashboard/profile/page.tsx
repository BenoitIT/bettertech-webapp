"use server";
import Link from "next/link";
import Profile from "../(pageContents)/profile";
const Page = async () => {

  return (
    <div>
      <div className=" m-4 flex flex-row gap-2 font-semibold text-sm">
        <Link href="/dashboard" className="hover:text-emerald-700">
          Home
        </Link>
        <h2 className="text-emerald-700">Profile</h2>
      </div>
      <Profile/>
    </div>
  );
}
export default Page;

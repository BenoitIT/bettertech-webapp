"use server"
import Link from "next/link";
import Messages from "../(pageContents)/message";

const Page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/messages`, {
    cache: "no-store",
  });
  const data = await response.json();
  if (data.status == 200) {
    const messages = data.data;
    return (
      <div>
        <div className=" m-4 flex flex-row gap-2 font-semibold text-sm">
          <Link href="/dashboard" className="hover:text-emerald-700">
            Home
          </Link>
          <h2 className="text-emerald-700">Messages</h2>
        </div>
        <Messages messages={messages}/>
      </div>
    );
  }
};
export default Page;

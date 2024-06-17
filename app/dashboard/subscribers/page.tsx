"use server";
import Link from "next/link";
import SubscriptionUpdates from "../(pageContents)/sub";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/subscribers`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  if (data.status == 200) {
    const emails: string[] = [];
    data.data.map((sub: { id: number; email: string }) =>
      emails.push(sub?.email)
    );
    return (
      <div>
        <div className=" m-4 flex flex-row gap-2 font-semibold text-sm">
          <Link href="/dashboard" className="hover:text-emerald-700">
            Home
          </Link>
          <h2 className="text-emerald-700">Better Technology Subscribles</h2>
        </div>
        {data.data.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 my-6">
              {data.data.map((sub: any) => (
                <p
                  className="p-2 rounded text-sm bg-white text-gray-700 border border-gray-400"
                  key={sub.id}
                >
                  {sub?.email}
                </p>
              ))}
            </div>
            <SubscriptionUpdates emails={emails} />
          </>
        ) : (
          <div className="w-full flex justify-center">
            <p className="p-2 rounded text-sm bg-white text-gray-700 border border-gray-400">
              No one has subscribed the contents..
            </p>
          </div>
        )}
      </div>
    );
  }
};
export default Page;

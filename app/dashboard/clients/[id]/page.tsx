import Link from "next/link";
import ClientDetail from "../../(pageContents)/SingleClient";

const Page = async ({ params }: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/clients/${params.id}`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  if (data.status == 200) {
    return (
      <div>
        <div className=" m-4 flex flex-row gap-2 font-semibold text-sm">
          <Link href="/dashboard" className="hover:text-emerald-700">
            Home
          </Link>
          <Link href="/dashboard/clients" className="hover:text-emerald-700">
            Our Clients
          </Link>
          <h2 className="text-emerald-700">Client Info</h2>
        </div>
        <ClientDetail client={data.data} />
      </div>
    );
  } else {
    return <p>Could not display client.</p>;
  }
};
export default Page;

import Link from "next/link";
import ActivitiesList from "../(pageContents)/activities";

const Page = () => {
  return (
    <div>
      <div className=" m-4 flex flex-row gap-2 font-semibold text-sm"><Link href="/dashboard" className="hover:text-emerald-700">Home</Link>
       <h2 className="text-emerald-700">Our Activities</h2>
      </div>
      <ActivitiesList/>
    </div>
  );
};
export default Page;
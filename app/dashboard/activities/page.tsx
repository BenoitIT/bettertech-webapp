import Link from "next/link";
import ActivitiesList from "../(pageContents)/activities";

const Page = async() => {
  const response=await fetch(`${process.env.NEXT_PUBLIC_URL}/api/activities`,{cache:"no-store"});
  const data=await response.json();
  if(data.status==200){
  return (
    <div>
      <div className=" m-4 flex flex-row gap-2 font-semibold text-sm"><Link href="/dashboard" className="hover:text-emerald-700">Home</Link>
       <h2 className="text-emerald-700">Our Activities</h2>
      </div>
      <ActivitiesList activities={data.data}/>
    </div>
  );
}else{
  return <p>Could not load activities</p>
}
};
export default Page;
"use server"
import Link from "next/link";
import ClientContents from "../(pageContents)/clients";

const Page = async() => {
  const response=await fetch(`${process.env.NEXT_PUBLIC_URL}/api/clients`,{cache:"no-store"});
  const data=await response.json();
  if(data.status==200){
  return (
    <div>
      <div className=" m-4 flex flex-row gap-2 font-semibold text-sm"><Link href="/dashboard" className="hover:text-emerald-700">Home</Link>
       <h2 className="text-emerald-700">Our Clients</h2>
      </div>
      <ClientContents clients={data.data} />
    </div>
  );
}else{
  return ( <div className="text-xl font-thin h-[90vh] flex justify-center w-full items-center">
    <div className="p-4 w-fit text-white bg-red-400 rounded shadow">
      The requested clients list is not found
    </div>
  </div>)
}
};
export default Page;
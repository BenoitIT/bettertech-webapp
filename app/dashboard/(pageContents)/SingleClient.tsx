"use client";

import { BasicBtn } from "@/app/(comps)/buttons/button";

const ClientDetail = ({ client }: any) => {
  return (
    <div className="w-full bg-white p-14 rounded-sm">
      <div className="flex justify-between">
        <div className="w-fit flex flex-col">
          <div className="h-16 w-16 rounded-full bg-blue-200 flex  text-xl justify-center items-center uppercase font-bold text-blue-950">
            {client?.clientNames[0] +
              "" +
              client?.clientNames[client?.clientNames.length - 1]}
          </div>
          <h1 className="font-medium text-blue-600 my-6 text-base capitalize">
            {client?.clientNames}
          </h1>
        </div>
      </div>
      <div className="text-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <AppField title="Client Category" decription={client?.clientType} />
        <AppField title="Client Industry" decription={client?.industry} />

        <AppField title="Email Address" decription={client?.email} />
        <AppField title="Province" decription={client?.province} />
        <AppField title="Phone Number" decription={client.phoneNumber} />
        <AppField title="District" decription={client?.district} />
      </div>
      <div className="flex w-full justify-center items-center h-[100px]">
        <div className="w-[250px] mt-[70px]">
          <BasicBtn label={"Edit client Info"} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};
export default ClientDetail;

const AppField = ({ title, decription }: any) => {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="font-medium">{title}</h3>
      <p className="text-gray-600">{decription}</p>
    </div>
  );
};

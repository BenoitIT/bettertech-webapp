"use client";

import { BasicBtn } from "@/app/(comps)/buttons/button";
import { useRouter } from "next/navigation";
const TransactionDetails = ({ transaction }: any) => {
  const router = useRouter();
  const handleMarkAsPaid = async () => {
    try {
      const response = await fetch(`/api/transactions/${transaction?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.status == 200) {
        router.refresh();
      }
    } catch (err) {
      return;
    }
  };
  return (
    <div className="w-full bg-white p-14 rounded-sm">
      <div className="flex justify-between">
        <div className="w-fit flex flex-col">
          <div className="h-16 w-16 rounded-full bg-blue-200 flex  text-xl justify-center items-center uppercase font-bold text-blue-950">
            {transaction?.client?.clientNames[0] +
              "" +
              transaction?.client?.clientNames[1]}
          </div>
          <h1 className="font-medium text-blue-600 my-6 text-base capitalize">
            {transaction?.activity?.activityName}
          </h1>
        </div>
      </div>
      <div className="text-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <AppField
          title="Client Names"
          decription={transaction?.client?.clientNames}
        />
        <AppField
          title="Client Category"
          decription={transaction?.client?.clientType}
        />
        <AppField
          title="Client Industry"
          decription={transaction?.client?.industry}
        />
        <AppField
          title="Email Address"
          decription={transaction?.client?.email}
        />
        <AppField title="Province" decription={transaction?.client?.province} />
        <AppField
          title="Phone Number"
          decription={transaction?.client?.phoneNumber}
        />
        <AppField title="District" decription={transaction?.client?.district} />
        <AppField
          title="Activity Name"
          decription={transaction?.activity?.activityName}
        />
        <AppField
          title="Activity Base price"
          decription={`RWF ${new Intl.NumberFormat("en-US").format(
            transaction?.activity?.price
          )}`}
        />
        <AppField
          title="Quantity of Work delivered"
          decription={transaction?.quantity}
        />
        <AppField title="Activity measured in" decription={transaction?.unit} />
        <AppField
          title="Total Amount Earned"
          decription={`RWF ${new Intl.NumberFormat("en-US").format(
            transaction?.amountearned
          )}`}
        />
        <AppField
          title="Date of action"
          decription={new Date(transaction?.doneAt)?.toDateString()}
        />
      </div>
      <div className="flex w-full justify-center items-center h-[100px]">
        <div className="w-[250px] mt-[70px]">
          <BasicBtn
            label={transaction?.status == "paid" ? "Paid" : "Mark as Paid"}
            onClick={handleMarkAsPaid}
            disabled={transaction?.status == "paid"}
          />
        </div>
      </div>
    </div>
  );
};
export default TransactionDetails;

const AppField = ({ title, decription }: any) => {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="font-medium">{title}</h3>
      <p className="text-gray-600">{decription}</p>
    </div>
  );
};

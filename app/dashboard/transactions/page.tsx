import Link from "next/link";
import Transactions from "../(pageContents)/transactions";
const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/transactions`,
    { cache: "no-store" }
  );
  const data = await response.json();
  if (data.status == 200) {
    const transactions = data.data.map((transaction: any) => {
      return {
        id: transaction?.id,
        date: new Date(transaction?.doneAt)?.toDateString(),
        clientName: transaction.client?.clientNames,
        activityName: transaction.activity?.activityName,
        price: `RWF ${new Intl.NumberFormat("en-US").format(
          transaction?.amountEarned
        )}`,
        status: transaction?.status,
      };
    });
    return (
      <div>
        <div className=" m-4 flex flex-row gap-2 font-semibold text-sm">
          <Link href="/dashboard" className="hover:text-emerald-700">
            Home
          </Link>
          <h2 className="text-emerald-700">Transactions</h2>
        </div>
        <Transactions transactions={transactions} />
      </div>
    );
  }
};
export default Page;

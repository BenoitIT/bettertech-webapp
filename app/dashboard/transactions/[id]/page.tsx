import Link from "next/link";
import TransactionDetails from "../../(pageContents)/transactionDetails";

const Page = async ({ params }: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/transactions/${params?.id}`,
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
          <Link
            href="/dashboard/transactions"
            className="hover:text-emerald-700"
          >
            Transactions
          </Link>
          <h2 className="text-emerald-700">Transaction Details</h2>
        </div>
        <TransactionDetails transaction={data.data}/>
      </div>
    );
  }
};
export default Page;

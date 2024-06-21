"use client";
import {
  handleAllDataRowsSelection,
  handleSelectedRow,
} from "@/app/utils/table";
import { lazy, useEffect } from "react";
import { transactionsColumns } from "../(components)/tables/columns/clients";
import { useState } from "react";
import SearchInput from "../(components)/inputs/search";
import { IconifiedBtn } from "@/app/(comps)/buttons/button";
import { HandleTransactionsSearch } from "@/app/utils/search";
import { useRouter } from "next/navigation";
const AddNewTransction = lazy(
  () => import("../(components)/modals/newTransactions")
);
const Table = lazy(() => import("../(components)/tables/table"));
interface TransactionProps {
  transactions: any[];
}
const Transactions = ({ transactions }: TransactionProps) => {
  const router=useRouter()
  const [selectedTableRow, setSelectedTableRow] = useState<number[]>([]);
  const [openAddModal, setAddModal] = useState<boolean>(false);
  const [allSelected, setAllSelected] = useState(false);
  const [transactionData, setTransactionData] = useState<any[]>([]);
  const [availableActivities, setActivities] = useState<any>([]);
  const [availableClients, setClients] = useState<any>([]);
  const [searchValues, setSearchValues] = useState("");
  const handleSelectedRows = (id: number) => {
    handleSelectedRow(id, selectedTableRow, setSelectedTableRow);
  };
  const handleAllRowsSelection = (data: any) => {
    handleAllDataRowsSelection(
      data,
      setSelectedTableRow,
      selectedTableRow,
      setAllSelected
    );
  };
  useEffect(() => {
    const fetchClientAndActivities = async () => {
      setTransactionData(transactions);
      const activitiesRes = await fetch(`/api/activities`, {
        cache: "no-store",
      });
      const clientRes = await fetch(`/api/clients`, { cache: "no-store" });
      const activities = await activitiesRes.json();
      const clients = await clientRes.json();
      if (activities || clients) {
        const actions = activities.data.map((activity: any) => {
          return {
            id: activity?.id,
            name: activity?.activityName,
          };
        });
        setActivities(actions);
        const clientsInfo = clients.data.map((client: any) => {
          return {
            id: client?.id,
            name: client?.clientNames,
          };
        });
        setClients(clientsInfo);
      }
    };
    fetchClientAndActivities();
  }, [transactions]);
  const handleAddClient = () => setAddModal(true);
  useEffect(() => {
    if (searchValues == "") {
      setTransactionData(transactions);
    }
  }, [transactions, searchValues]);
  const handleDataSearch = (e:any) => {
    e?.preventDefault();
    HandleTransactionsSearch(searchValues, transactions, setTransactionData);
  };
  const handleView = (id: any) => router.push(`/dashboard/transactions/${id}`);
  return (
    <div className="mt-4">
      <div className="p-4">
        <div className="mb-4 flex flex-col lg:flex-row justify-between gap-2">
          <SearchInput
            placeholder="Search for transactions..."
            value={searchValues}
            onClick={handleDataSearch}
            onChange={setSearchValues}
          />
          <IconifiedBtn onClick={handleAddClient} />
        </div>
        <Table
          columns={transactionsColumns}
          data={transactionData}
          onSelectingRow={handleSelectedRows}
          selectAllRow={handleAllRowsSelection}
          isSelectAll={allSelected}
          selectedRow={selectedTableRow}
          handleView={handleView}
        />
      </div>
      <AddNewTransction
        open={openAddModal}
        setOpen={setAddModal}
        availableActivities={availableActivities}
        availableClients={availableClients}
      />
    </div>
  );
};
export default Transactions;

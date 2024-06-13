"use client";
import {
  handleAllDataRowsSelection,
  handleSelectedRow,
} from "@/app/utils/table";
import { lazy } from "react";
import { dummyTrans, transactionsColumns } from "../(components)/tables/columns/clients";
import { useState } from "react";
import SearchInput from "../(components)/inputs/search";
import { IconifiedBtn } from "@/app/(comps)/buttons/button";
const AddNewTransction = lazy(() => import("../(components)/modals/newTransactions"));
const Table = lazy(() => import("../(components)/tables/table"));

const Transactions = () => {
  const [selectedTableRow, setSelectedTableRow] = useState<number[]>([]);
  const [openAddModal, setAddModal] = useState<boolean>(false);
  const [allSelected, setAllSelected] = useState(false);
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
  const handleAddClient = () => setAddModal(true);

  return (
    <div className="mt-4">
      <div className="p-4">
        <div className="mb-4 flex flex-col lg:flex-row justify-between gap-2">
          <SearchInput placeholder="Search for transactions..." />
          <IconifiedBtn onClick={handleAddClient} />
        </div>
        <Table
          columns={transactionsColumns}
          data={dummyTrans}
          onSelectingRow={handleSelectedRows}
          selectAllRow={handleAllRowsSelection}
          isSelectAll={allSelected}
          selectedRow={selectedTableRow}
          handleView={() => {}}
        />
      </div>
      <AddNewTransction open={openAddModal} setOpen={setAddModal} />
    </div>
  );
};
export default Transactions;

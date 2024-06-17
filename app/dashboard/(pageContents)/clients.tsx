"use client";
import {
  handleAllDataRowsSelection,
  handleSelectedRow,
} from "@/app/utils/table";
import { lazy } from "react";
import { clientsColumns } from "../(components)/tables/columns/clients";
import { useState, useEffect } from "react";
import SearchInput from "../(components)/inputs/search";
import { IconifiedBtn } from "@/app/(comps)/buttons/button";
import { HandleClientSearch } from "@/app/utils/search";
import { useRouter } from "next/navigation";
const AddNewClient = lazy(() => import("../(components)/modals/newClient"));
const Table = lazy(() => import("../(components)/tables/table"));
interface pageProps {
  clients: any[];
}
const ClientContents = ({ clients }: pageProps) => {
  const router = useRouter();
  const [selectedTableRow, setSelectedTableRow] = useState<number[]>([]);
  const [clientData, setClientData] = useState<any[]>([]);
  const [openAddModal, setAddModal] = useState<boolean>(false);
  const [allSelected, setAllSelected] = useState(false);
  const [searchValues, setSearchValues] = useState<string>("");
  useEffect(() => {
    if (searchValues == "") {
      setClientData(clients);
    }
  }, [clients, searchValues]);
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
  const handleDataSearch = (e: any) => {
    e?.preventDefault();
    HandleClientSearch(searchValues, clients, setClientData);
  };
  const handleView = (id: any) => router.push(`/dashboard/clients/${id}`);
  return (
    <div className="mt-4">
      <div className="p-4">
        <div className="mb-4 flex flex-col lg:flex-row justify-between gap-2">
          <SearchInput
            placeholder="Search for client..."
            value={searchValues}
            onClick={handleDataSearch}
            onChange={setSearchValues}
          />
          <IconifiedBtn onClick={handleAddClient} />
        </div>
        <Table
          columns={clientsColumns}
          data={clientData}
          onSelectingRow={handleSelectedRows}
          selectAllRow={handleAllRowsSelection}
          isSelectAll={allSelected}
          selectedRow={selectedTableRow}
          handleView={handleView}
        />
      </div>
      <AddNewClient open={openAddModal} setOpen={setAddModal} />
    </div>
  );
};
export default ClientContents;

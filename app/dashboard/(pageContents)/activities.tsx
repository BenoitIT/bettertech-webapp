"use client";
import { lazy, useState } from "react";
import { IconifiedBtn } from "@/app/(comps)/buttons/button";
import Activity from "../(components)/cards/activity";
import SearchInput from "../(components)/inputs/search";
const AddNewActivity = lazy(() => import("../(components)/modals/newActivity"));

const ActivitiesList = () => {
  const [openNewModal, setNewModal] = useState<boolean>(false);
  const handleAddActivity = () => setNewModal(true);
  return (
    <div className="w-full">
      <div className="mb-4 flex flex-col lg:flex-row justify-between gap-2">
        <SearchInput placeholder="Search for an activity..." />
        <IconifiedBtn onClick={handleAddActivity} />
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
      </div>
      <AddNewActivity open={openNewModal} setOpen={setNewModal} />
    </div>
  );
};
export default ActivitiesList;

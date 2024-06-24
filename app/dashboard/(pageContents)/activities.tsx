"use client";
import { lazy, useEffect, useState } from "react";
import { IconifiedBtn } from "@/app/(comps)/buttons/button";
import Activity from "../(components)/cards/activity";
import SearchInput from "../(components)/inputs/search";
import { HandleActivitytSearch } from "@/app/utils/search";
const AddNewActivity = lazy(() => import("../(components)/modals/newActivity"));
interface PageProps {
  activities: any[];
}
const ActivitiesList = ({ activities }: PageProps) => {
  const [openNewModal, setNewModal] = useState<boolean>(false);
  const [searchValues, setSearchValues] = useState<string>("");
  const [activitiesData, setActivities] = useState<any[]>([]);
  const handleAddActivity = () => setNewModal(true);
  const handleDataSearch = (e: any) => {
    e?.preventDefault();
    HandleActivitytSearch(searchValues, activities, setActivities);
  };
  useEffect(() => {
    if (searchValues == "") {
      setActivities(activities);
    }
  }, [activities, searchValues]);
  return (
    <div className="w-full">
      <div className="mb-4 flex flex-col lg:flex-row justify-between gap-2">
        <SearchInput
          placeholder="Search for an activity..."
          value={searchValues}
          onClick={handleDataSearch}
          onChange={setSearchValues}
        />
        <IconifiedBtn onClick={handleAddActivity} />
      </div>
      {activitiesData.length < 1 ? (
        <div className="h-[100px] w-full flex items-center justify-center font-medium text-sm">
          No activity has been registered!
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
          {activitiesData.map((activity, index) => (
            <Activity props={activity} key={index} />
          ))}
        </div>
      )}
      <AddNewActivity open={openNewModal} setOpen={setNewModal} />
    </div>
  );
};
export default ActivitiesList;

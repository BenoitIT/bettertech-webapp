import { DatePicker, DatePickerProps, Modal } from "antd";
import { Selector } from "../inputs/basic";
import { BasicBtn } from "@/app/(comps)/buttons/button";
import { businessTypes, industries } from "../../(pageContents)/staticdata";
interface modalProps {
  open: boolean;
  setOpen: (val: boolean) => void;
}
const AddNewTransction = ({ open, setOpen }: modalProps) => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      centered
      footer={null}
      width={800}
      title="Record New Transaction"
    >
      <div className="w-full p-6">
        <div className="w-full grid grid-cols-1 gap-3">
          <Selector label="Client Name" name="client" options={businessTypes} />
          <Selector label="Activity" name="activity" options={industries} />
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Date
            </label>
            <DatePicker
              onChange={onChange}
              className="bg-gray-50 border  text-gray-900 text-sm rounded block w-full p-2.5 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400 focus:border-emerald-700 placeholder:text-gray-900"
            />
          </div>
          <div className="w-full flex justify-center items-center ml-1 mt-2">
            <BasicBtn label="Record Transaction" />
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default AddNewTransction;

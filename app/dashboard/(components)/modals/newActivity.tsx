import { Modal } from "antd";
import { Input } from "../inputs/basic";
import { BasicBtn } from "@/app/(comps)/buttons/button";
interface modalProps {
  open: boolean;
  setOpen: (val: boolean) => void;
}
const AddNewActivity = ({ open, setOpen }: modalProps) => {
  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      centered
      footer={null}
      width={800}
      title="Register New Activity"
    >
      <div className="w-full p-6">
        <div className="w-full grid grid-cols-1 gap-3">
          <Input
            label="Activity Name"
            placeholder="type names..."
            name="activityName"
          />
          <Input
            label="Operation Price"
            placeholder="type price..."
            name="price"
          />
          <div className="flex gap-2 w-full">
            <div className="w-full">
              <Input
                label="Main Requirements"
                placeholder="type here..."
                name="requirements"
              />
            </div>
            <div className="w-fit flex h-[55px] mt-[30px]">
              <BasicBtn label="Next" />
            </div>
          </div>
          <div className="w-full flex justify-center items-center ml-1 mt-2">
            <BasicBtn label="Save Activity info." />
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default AddNewActivity;

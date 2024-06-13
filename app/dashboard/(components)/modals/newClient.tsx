import { Modal } from "antd";
import { Input, Selector } from "../inputs/basic";
import { BasicBtn } from "@/app/(comps)/buttons/button";
import { businessTypes,industries,provinces } from "../../(pageContents)/staticdata";
interface modalProps{
  open:boolean;
  setOpen:(val:boolean)=>void
}
const AddNewClient = ({open,setOpen}:modalProps) => {
  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      centered
      footer={null}
      width={800}
      title="Register New Client"
    >
      <div className="w-full p-6">
        <div className="w-full grid grid-cols-1 gap-3">
          <Input
            label="Client Names"
            placeholder="type names..."
            name="clientName"
          />
          <Input label="Email" placeholder="type email..." name="email" />
          <Input
            label="Phone Number"
            placeholder="type phone number..."
            name="phoneNumber"
          />
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
            <Selector label="Client Type" name="clientType" options={businessTypes}/>
            <Selector label="Industry" name="industry" options={industries}/>
            <Selector label="Province" name="province" options={provinces}/>
            <Input
              label="District"
              placeholder="type district..."
              name="district"
            />
          </div>
          <div className="w-full flex justify-center items-center ml-1 mt-2">
            <BasicBtn label="Registre info." />
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default AddNewClient;

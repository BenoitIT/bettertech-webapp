import { Modal } from "antd";
import { Input, Selector } from "../inputs/basic";
import { BasicBtn } from "@/app/(comps)/buttons/button";
import {
  businessTypes,
  industries,
  provinces,
} from "../../(pageContents)/staticdata";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
interface modalProps {
  open: boolean;
  setOpen: (val: boolean) => void;
  id:number|string,
  currentInfo:{
    clientNames:string,
    email: string,
    phoneNumber: string,
    clientType: string,
    industry: string,
    province: string,
    district: string,
  }
}
const UpdateClient = ({ open, setOpen,currentInfo,id }: modalProps) => {
  const router = useRouter();
  const [clientInfo, setClientInfo] = useState(currentInfo);
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await fetch(`/api/clients/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clientInfo),
      });
      const responseData = await response.json();
      if (responseData.status === 200) {
        toast.success(responseData.message);
        router.refresh();
        setLoading(false);
        setOpen(false);
      } else if (responseData.status === 400) {
        toast.error(responseData.message);
        setLoading(false);
      } else {
        toast.error(responseData[0]?.path[0] + " " + responseData[0].message);
        setLoading(false);
      }
    } catch (err) {
      return;
    }
  };
  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      centered
      footer={null}
      width={800}
      title="Update Client Info"
    >
      <div className="w-full p-6">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="w-full grid grid-cols-1 gap-3">
            <Input
              label="Client Names"
              placeholder="type names..."
              name="clientName"
              onChange={(e: any) =>
                setClientInfo((prev) => {
                  return { ...prev, clientNames: e.target.value };
                })
              }
              value={clientInfo.clientNames}
            />
            <Input
              label="Email"
              placeholder="type email..."
              name="email"
              onChange={(e: any) =>
                setClientInfo((prev) => {
                  return { ...prev, email: e.target.value };
                })
              }
              value={clientInfo.email}
            />
            <Input
              label="Phone Number"
              placeholder="type phone number..."
              name="phoneNumber"
              onChange={(e: any) =>
                setClientInfo((prev) => {
                  return { ...prev, phoneNumber: e.target.value };
                })
              }
              value={clientInfo.phoneNumber}
            />
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
              <Selector
                label="Client Type"
                name="clientType"
                options={businessTypes}
                onChange={(e: any) =>
                  setClientInfo((prev) => {
                    return { ...prev, clientType: e.target.value };
                  })
                }
                value={clientInfo.clientType}
              />
              <Selector
                label="Industry"
                name="industry"
                options={industries}
                onChange={(e: any) =>
                  setClientInfo((prev) => {
                    return { ...prev, industry: e.target.value };
                  })
                }
                value={clientInfo.industry}
              />
              <Selector
                label="Province"
                name="province"
                options={provinces}
                onChange={(e: any) =>
                  setClientInfo((prev) => {
                    return { ...prev, province: e.target.value };
                  })
                }
                value={clientInfo.province}
              />
              <Input
                label="District"
                placeholder="type district..."
                name="district"
                onChange={(e: any) =>
                  setClientInfo((prev) => {
                    return { ...prev, district: e.target.value };
                  })
                }
                value={clientInfo.district}
              />
            </div>
            <div className="w-full flex justify-center items-center ml-1 mt-2">
              <BasicBtn
                label={loading ? "Loading..." : "Update Info."}
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};
export default UpdateClient;

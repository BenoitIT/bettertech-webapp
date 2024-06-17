import { DatePicker, DatePickerProps, Modal, Alert } from "antd";
import { Input, Selector, SelectorV2 } from "../inputs/basic";
import { BasicBtn } from "@/app/(comps)/buttons/button";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { format } from "date-fns-tz";
interface modalProps {
  open: boolean;
  setOpen: (val: boolean) => void;
  availableActivities: any[];
  availableClients: any[];
}
const AddNewTransction = ({
  open,
  setOpen,
  availableActivities,
  availableClients,
}: modalProps) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState<number>(0);
  const [clientId, setClientId] = useState("");
  const [activId, setActivityId] = useState("");
  const [unit, setUnit] = useState("");
  const [error, setError] = useState<string>("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const onChange: DatePickerProps["onChange"] = (date) => {
    setDate(date.toISOString());
  };
  const handleSubmit = async (e: any) => {
    e?.preventDefault();
    if (clientId == "") {
      setError("Select the client please!");
    } else if (activId == "") {
      setError("Select the activity please!");
    } else if (date == "") {
      setError("Please provide the date,an activity done on!");
    } else {
      setError("");
      const response = await fetch(`/api/transactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientId: Number(clientId),
          actId: Number(activId),
          quantity: Number(quantity),
          unit: unit,
          doneAt: date,
        }),
      });
      const responseData = await response.json();
      if (responseData.status === 201) {
        toast.success(responseData.message);
        router.refresh();
        setClientId("");
        setActivityId(" ");
        setUnit("");
        setLoading(false);
        setOpen(false);
      } else if (responseData.status === 400) {
        toast.error(responseData.message);
        setLoading(false);
      } else {
        toast.error(responseData[0]?.path[0] + " " + responseData[0].message);
        setLoading(false);
      }
    }
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
        {error.length > 0 ? (
          <Alert
            type="warning"
            message={error}
            className="text-center"
            closable
          />
        ) : (
          ""
        )}
        <div className="w-full grid grid-cols-1 gap-3">
          <SelectorV2
            label="Client Name"
            name="client"
            options={availableClients}
            onChange={(e: any) => setClientId(e.target.value)}
            value={clientId}
          />
          <SelectorV2
            label="Activity"
            name="activity"
            options={availableActivities}
            onChange={(e: any) => setActivityId(e.target.value)}
            value={activId}
          />
          <div className="w-full flex gap-2">
            <div className="w-full">
              <Input
                label="Quantity Delivered"
                placeholder="type quantity..."
                name="quantiy"
                onChange={(e: any) => setQuantity(e.target.value)}
                value={quantity}
                type="number"
              />
            </div>
            <div className="w-[200px]">
              <Selector
                label="Kg,Numbers,Area"
                name="activity"
                options={["Select...", "kg", "m2", "count"]}
                onChange={(e: any) => setUnit(e.target.value)}
                value={unit}
              />
            </div>
          </div>
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
            <BasicBtn
              label={loading ? "Loading..." : "Record Transaction"}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default AddNewTransction;

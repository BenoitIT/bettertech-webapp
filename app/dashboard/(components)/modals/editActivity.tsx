import { Modal } from "antd";
import { Input } from "../inputs/basic";
import { BasicBtn } from "@/app/(comps)/buttons/button";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
interface modalProps {
  open: boolean;
  setOpen: (val: boolean) => void;
  id: number;
}
const EditActivity = ({ open, setOpen, id }: modalProps) => {
  const router = useRouter();
  const [activityName, setActivityName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [requirement, setRequirement] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [requirements, setRequirements] = useState<string[]>([]);
  const handleNextRequirement = () => {
    setRequirements((prev) => [...prev, requirement]);
    setRequirement("");
  };
  useEffect(() => {
    const fetchActivityInfo = async () => {
      const response = await fetch(`/api/activities/${id}`, {
        cache: "no-store",
      });
      const data = await response.json();
      if (data.status == 200) {
        setActivityName(data.data.activityName);
        setPrice(data.data.price);
        setRequirements(data.data.requirements);
      }
    };
    fetchActivityInfo();
  }, [id]);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await fetch(`/api/activities/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          activityName,
          price: Number(price),
          requirements,
        }),
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
      title="Update Activity Info"
    >
      <div className="w-full p-6">
        <form className="w-full">
          <div className="w-full grid grid-cols-1 gap-3">
            <Input
              label="Activity Name"
              placeholder="type names..."
              name="activityName"
              onChange={(e: any) => setActivityName(e.target.value)}
              value={activityName}
            />
            <Input
              label="Base Operation Price"
              placeholder="type price..."
              name="price"
              onChange={(e: any) => setPrice(e.target.value)}
              value={price}
              type="number"
            />
            <div className="flex gap-2 w-full">
              <div className="w-full">
                <Input
                  label="Main Requirements"
                  placeholder="type here..."
                  name="requirements"
                  onChange={(e: any) => setRequirement(e.target.value)}
                  value={requirement}
                />
              </div>
              <div className="w-fit flex h-[55px] mt-[30px]">
                <BasicBtn
                  label="Next"
                  onClick={handleNextRequirement}
                  disabled={requirement == ""}
                />
              </div>
            </div>
            <div className="w-full grid lg:grid-cols-3 gap-4 grid-cols-1">
              {requirements.map((requirement, index) => (
                <p
                  className="px-4 py-2 text-sm rounded-3xl shadow shadow-gray-300 bg-gray-100 text-center"
                  key={index}
                >
                  {requirement}
                </p>
              ))}
            </div>
            <div className="w-full flex justify-center items-center ml-1 mt-2">
              <BasicBtn
                label={loading ? "Loading..." : "Update"}
                onClick={handleSubmit}
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};
export default EditActivity;

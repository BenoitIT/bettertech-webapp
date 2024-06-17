"use client";
import { BasicBtn } from "@/app/(comps)/buttons/button";
import { useState } from "react";
import { Modal } from "antd";
import { toast } from "react-toastify";

const SubscriptionUpdates = ({emails}:{emails:string[]}) => {
  const [openModal, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className="w-full flex justify-end relative">
        <div>
          <BasicBtn label="Send Updates" onClick={() => setOpen(true)} />
        </div>
      </div>
      <SubMessage open={openModal} setOpen={setOpen} emails={emails}/>
    </>
  );
};
export default SubscriptionUpdates;

const SubMessage = ({ open, setOpen,emails }: any) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  console.log('emails',emails)
  const handleSubmitMessage = async (e: any) => {
    try {
      e?.preventDefault();
      if (message == "") {
        toast.error("Type your message!");
      } else {
        setLoading(true);
        const response = await fetch(`/api/messages/subscribers`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            emails,
            message: message,
          }),
        });
        const data = await response.json();
        if (data.status == 200) {
          toast.success(data.message);
          setLoading(false);
          setMessage("");
          setOpen(false);
        } else if (data.status == 400) {
          toast.error(data.message);
          setLoading(false);
        }
      }
    } catch (err) {
      toast.error("Unexpected issue occurs");
      setLoading(false);
    }
  };
  return (
    <Modal
      title="Message"
      footer={null}
      open={open}
      width={700}
      onCancel={() => setOpen(false)}
    >
      <div className="w-full">
        <h6 className="text-sm text-gray-700 py-2">
          <span className="font-medium text-gray-400">
            Write for subscribers ....
          </span>
        </h6>
        <textarea
          className="h-[240px] w-full  pl-2 outline-none rounded bg-gray-100 placeholder:text-xs placeholder:p-2 border border-gray-400 text-sm"
          placeholder="Type response here...."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div className="w-full flex justify-end gap-3">
          <button
            className="mt-2 inline-flex items-center py-1 px-6 rounded text-sm  text-white disabled:opacity-50 bg-red-500"
            onClick={() => setOpen(false)}
          >
            cancel
          </button>
          <button
            className="mt-2 inline-flex items-center py-1 px-6 rounded text-sm  text-white disabled:opacity-50 bg-emerald-700"
            onClick={handleSubmitMessage}
          >
            {loading ? "sending..." : "send"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

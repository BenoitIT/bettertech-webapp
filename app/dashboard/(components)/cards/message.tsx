import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaCheckDouble } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { toast } from "react-toastify";
interface messageProps {
  id: number;
  email: string;
  subject: string;
  body: string;
  messageToReply: number;
  onClick: (val: number) => void;
  responded: boolean;
}
const Message = ({
  email,
  subject,
  body,
  id,
  messageToReply,
  responded,
  onClick,
}: messageProps) => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmitMessage = async (e: any) => {
    try {
      e?.preventDefault();
      if (message == "") {
        toast.error("Type your message!");
      } else {
        setLoading(true);
        const response = await fetch(`/api/messages/replay/${messageToReply}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            message: message,
          }),
        });
        const data = await response.json();
        if (data.status == 200) {
          toast.success(data.message);
          setLoading(false);
          setMessage("");
          router.refresh();
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
    <div className="flex flex-col bg-white border shadow-sm rounded p-4 md:p-5 border-gray-300 w-full relative">
      <h3 className="text-sm font-semibold text-gray-800">{email}</h3>
      <p className="mt-1 text-xs font-medium text-gray-500">{subject}</p>
      <p className="mt-2 text-gray-500 text-sm">{body}</p>
      <div className="w-full flex justify-end">
        {!responded ? (
          <button
            className="mt-2 inline-flex items-center gap-x-1 text-sm  text-emerald-700 disabled:opacity-50"
            onClick={() => onClick(id)}
          >
            <IoIosArrowForward />
            Reply
          </button>
        ) : (
          <button
            className="mt-2 inline-flex items-center gap-x-1 text-sm  text-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled
          >
            <FaCheckDouble />
            replyed
          </button>
        )}
      </div>
      <div
        className={
          messageToReply == id
            ? "w-3/4 absolute top-[40px] z-10 right-1 bg-white shadow rounded p-4 shadow-emerald-700 "
            : "hidden"
        }
      >
        <h6 className="text-sm text-gray-700 py-2">
          Respond to <span className="font-medium text-gray-400">{email}</span>
        </h6>
        <textarea
          className="h-[120px] w-full  pl-2 outline-none rounded bg-gray-100 placeholder:text-xs placeholder:p-2 border border-gray-400 text-sm"
          placeholder="Type response here...."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div className="w-full flex justify-end gap-3">
          <button
            className="mt-2 inline-flex items-center py-1 px-6 rounded text-sm  text-white disabled:opacity-50 bg-red-500"
            onClick={() => onClick(0)}
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
    </div>
  );
};
export default Message;

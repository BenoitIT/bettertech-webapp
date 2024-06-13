import { IoIosArrowForward } from "react-icons/io";
const Message = () => {
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded p-4 md:p-5 border-gray-300 w-full">
      <h3 className="text-base font-semibold text-gray-800">Card title</h3>
      <p className="mt-1 text-xs font-medium text-gray-500">Card subtitle</p>
      <p className="mt-2 text-gray-500 text-sm">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <div className="w-full flex justify-end">
        <button className="mt-2 inline-flex items-center gap-x-1 text-sm  text-emerald-700 disabled:opacity-50">
          Reply
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};
export default Message;

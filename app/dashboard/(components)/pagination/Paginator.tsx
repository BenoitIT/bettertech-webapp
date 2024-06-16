"use client";
import { PaginatorProps } from "@/app/interfaces/pagination";
const Paginator: React.FC<PaginatorProps> = ({
  activePage,
  totalPages,
  onPageChange,
  onPreviousPageChange,
  onNextPageChange,
}) => {
  return (
    <div className={totalPages == 1 ? "hidden" : "mr-[1vw]"}>
      <button
        disabled={activePage === 1}
        className="px-4 md:py-2 xs:py-1 mx-1 text-grey-800 font-normal  border shadow border-grey-200 bg-white rounded-md hover:bg-emerald-700 hover:text-white disabled:cursor-not-allowed disabled:pointer-events-none"
        onClick={onPreviousPageChange}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, i) => {
        const ActivepageNumber = i + 1;
        return (
          <button
            key={ActivepageNumber}
            className={`px-4 md:py-2 xs:py-1 mx-1 text-grey-800 font-normal rounded-md border shadow border-grey-400 ${
              activePage === ActivepageNumber
                ? "bg-emerald-700 text-white"
                : "bg-white"
            }`}
            onClick={() => onPageChange(ActivepageNumber)}
          >
            {ActivepageNumber}
          </button>
        );
      })}
      <button
        disabled={totalPages === activePage}
        className="px-4 md:py-2 xs:py-1 mx-1 text-grey-800 font-normal rounded-md border shadow border-grey-400 bg-white hover:bg-emerald-700 hover:text-white  disabled:cursor-not-allowed disabled:pointer-events-none"
        onClick={onNextPageChange}
      >
        Next
      </button>
      <button className="px-4 md:py-2 xs:py-1  mx-1 text-grey-800 font-light rounded-md border shadow border-grey-400 bg-white">
        {activePage}/{totalPages}
      </button>
    </div>
  );
};

export default Paginator;

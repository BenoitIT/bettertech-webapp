import { LuSearch } from "react-icons/lu";
import { LuType } from "react-icons/lu";
const SearchInput = ({placeholder,value,onClick,onChange}:any) => {
  return (
    <form className="flex justify-start lg:w-2/4 w-full" onSubmit={onClick}>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <LuType />
        </div>
        <input
          type="text"
          className="bg-gray-50 border border-emerald-700 text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.3 focus:outline-none "
          placeholder={placeholder}
          value={value}
          onChange={(e)=>onChange(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-emerald-700 rounded-lg gap-1"
      >
        <LuSearch className="text-xl" />
        Search
      </button>
    </form>
  );
};
export default SearchInput;

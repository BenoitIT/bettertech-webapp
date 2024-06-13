interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
}
interface SelectorProps{
  label: string;
  name: string;
  options:string[]
}
export const Input = ({ label, name, placeholder }: InputProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type="text"
        id={name}
        className="bg-gray-50 border  text-gray-900 text-sm rounded block w-full p-2.5 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400 focus:border-emerald-700"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export const Selector = ({label,name,options}: SelectorProps) => {
  return (
    <div>
    <label
    htmlFor={name}
    className="block mb-2 text-sm font-medium text-gray-900"
  >
    {label}
  </label>
    <select
      className="bg-gray-50 border  text-gray-900 text-sm rounded block w-full p-2.5 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400 focus:border-emerald-700"
      required
    >
      {options.map(option=>(<option>{option}</option>))}
    </select>
    </div>
  );
};

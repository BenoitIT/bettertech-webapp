interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  value?: string | number;
  type?: string;
}
interface SelectorProps {
  label: string;
  name: string;
  options: string[];
  onChange?: (e: any) => void;
  value?: string;
}
export const Input = ({
  label,
  name,
  placeholder,
  onChange,
  value,
  type,
}: InputProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type={type ? type : "text"}
        id={name}
        className="bg-gray-50 border  text-gray-900 text-sm rounded block w-full p-2.5 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400 focus:border-emerald-700"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export const Selector = ({
  label,
  name,
  options,
  onChange,
  value,
}: SelectorProps) => {
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
        onChange={onChange}
        value={value}
      >
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
};
export const SelectorV2 = ({ label, name, options, onChange, value }: any) => {
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
        onChange={onChange}
        value={value}
      >
          <option>
            Select.....
          </option>
        {options.map((option: any, index: number) => (
          <option key={index} value={option?.id}>
            {option?.name}
          </option>
        ))}
      </select>
    </div>
  );
};

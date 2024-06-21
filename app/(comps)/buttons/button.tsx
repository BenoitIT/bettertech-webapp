import React from "react";
import { BsPlusCircle } from "react-icons/bs";
interface BtnProps {
  label?: string;
  customStyle?: string;
  onClick?: (e:any) => void;
  icon?: React.ReactNode;
  type?: "button" | "submit";
  disabled?:boolean;
}

const Button = ({ label, customStyle, onClick, icon, type }: BtnProps) => {
  return (
    <button
      data-collapse-toggle="navbar-cta"
      type={type}
      className={customStyle}
      aria-controls="navbar-cta"
      aria-expanded="false"
      onClick={onClick}
    >
      {icon} {label}
    </button>
  );
};

export default Button;

export const IconifiedBtn = ({onClick}:BtnProps) => {
  return (
    <button
      type="submit"
      className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-emerald-700 rounded-lg gap-1"
      onClick={onClick}
    >
      <BsPlusCircle className="text-xl" />
      Add New
    </button>
  );
};

export const BasicBtn = ({label,type,onClick,disabled}:BtnProps) => {
  return (
    <button
      type={type?type:"button"}
      className="text-white bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-700 hover:bg-emerald-800  disabled:cursor-not-allowed focus:outline-none  rounded text-sm px-5 py-2.5 text-center me-2 mb-2 w-full"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

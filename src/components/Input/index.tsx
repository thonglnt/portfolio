import React from "react";
import "./style.css";

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const Input = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: InputProps) => {
  return (
    <div className="rounded-input-wrapper">
      {label && <label className="rounded-input-label">{label}</label>}
      <input
        className="rounded-input-field"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;

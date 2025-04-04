import React from "react";
import "./style.css";

interface TextareaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

const Textarea = ({
  label,
  placeholder,
  value,
  onChange,
  rows = 5,
}: TextareaProps) => {
  return (
    <div className="rounded-input-wrapper">
      <label className="rounded-input-label">{label}</label>
      <textarea
        className="rounded-textarea-field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
      />
    </div>
  );
};

export default Textarea;

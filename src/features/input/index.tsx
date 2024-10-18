import { useState } from "react";
import IInputProps from "./types";

export default function Input({
  defaultValue,
  onEnter,
  className,
  placeholder,
}: IInputProps) {
  const [value, setValue] = useState(defaultValue || "");

  const handleEnter = () => {
    if (onEnter) {
      onEnter(value);

      setValue("");
    }
  };

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleEnter();
        }
      }}
      type="text"
      placeholder={placeholder}
      className={className}
    />
  );
}

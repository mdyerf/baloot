import React from "react";
import { getClassname } from "../utils/component";

function Input({ value, onChange, placeholder, type, ...props }) {
  return (
    <input
      className={getClassname("input", props)}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
}

export default Input;

import React from "react";
import { getClassname } from "../utils/component";

function Button({ text, onClick, ...props }) {
  return (
    <div className={getClassname("button", props)} onClick={onClick}>
      {text}
    </div>
  );
}

export default Button;

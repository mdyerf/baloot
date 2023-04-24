import React from "react";

function Switch({ active, onChange }) {
  return (
    <div onClick={() => onChange(!active)} className={`switch ${active ? "active" : null}`}>
      <div className="switch__bg"></div>
      <div className="switch__toggle"></div>
    </div>
  );
}

export default Switch;

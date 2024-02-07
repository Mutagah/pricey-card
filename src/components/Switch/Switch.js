import React from "react";

import "./Switch.css";

export default function Switch({isToggled, onToggle}) {
  return (
    <div className="switch-container">
      <p>Billed monthly</p>
      <label className="switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle}/>
        <span className="slider"></span>
      </label>
      <p>Billed anually</p>
    </div>
  );
}

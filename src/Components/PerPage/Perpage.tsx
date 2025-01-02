"use client";

import React, { useState } from "react";
import "./Perpage.css";

export default function PerPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("10");

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const selectOption = (value:string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <>
      <p className="per-page">Per Page</p>
        <div className="page-items-dropdown">
          <div className="select" onClick={toggleDropdown}>
            <span>{selectedValue}</span>
            <div className={`caret ${isOpen ? "caret-rotate" : ""}`}></div>
          </div>
          <ul className={`menu-option ${isOpen ? "open" : ""}`}>
            {["10", "20", "30", "50"].map((item) => (
              <li
                key={item}
                className={`${selectedValue === item ? "active" : ""} page-count-class`} 
                onClick={() => selectOption(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
    </>
  );
}

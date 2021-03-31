import React, { useState, useEffect, useRef } from "react";

const Dropdown2 = ({ menuOptions, selected, setSelected }) => {
  const [open, setOpen] = useState(true);
  const refUIForm = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (refUIForm.current && refUIForm.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  });

  const renderedOptions = menuOptions.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        className="item"
        key={option.value}
        onClick={() => setSelected(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form" ref={refUIForm}>
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          className="ui selection dropdown visible active"
          onClick={() => setOpen(!open)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown2;

import React, { useState, useEffect, useRef } from "react";

export const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
       const onBodyClick = (event) => {
        if (ref.current.contains(event.target)) {
            return;
        }
        setOpen(false);
      };
        
        document.body.addEventListener("click", onBodyClick);

        return () => {
          document.body.removeEventListener("click", onBodyClick);
        };

    }, []);

    const renderedOptions = options.map((option, index) => {
       if (option.value === selected.value) {
           return null;
       }

       return (
         <div key={index} className="item" onClick={(e) => onSelectedChange(option)}>
           {option.label}
         </div>
       );  
    });

    // the dropdown color text: <p style={{ color: selected.value }}>this is this color {selected.value}</p>

    return(
        <div ref={ref} className="ui form">
          <div className="field">
              <label className="label">{label}</label>
              <div onClick={(e) => setOpen(!open)} className={`ui selection dropdown ${open ? "visible active" : ""}`}>
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

export default Dropdown;
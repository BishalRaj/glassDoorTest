import React from "react";
import { Card } from "react-bootstrap";

const SelectForm = ({ field, options, updateData }) => {
  return (
    <div className="form-component">
      <p style={{ textTransform: "uppercase" }}>{field}</p>
      <select name={field} id={field} onChange={updateData}>
        <option value="" key={55}>
          -- Select {field} --
        </option>
        {options.map((x, y) => {
          return (
            <option value={x} key={y * 15}>
              {x}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectForm;

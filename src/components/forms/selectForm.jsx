import React from "react";

const SelectForm = ({ field, options, updateData }) => {
  return (
    <div className="form-component">
      <h5 style={{ textTransform: "uppercase" }}>{field}</h5>
      <select
        name={field}
        id={field}
        onChange={updateData}
        className="form-select mt-4"
      >
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

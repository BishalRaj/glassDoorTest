import React from "react";

const InputForm = ({ field, data, updateData }) => {
  return (
    <div className="form-component ">
      <h5 style={{ textTransform: "uppercase" }}>{field}</h5>
      <input
        type="text"
        className="form-control mt-4"
        name={field}
        value={data}
        onChange={updateData}
      />
    </div>
  );
};

export default InputForm;

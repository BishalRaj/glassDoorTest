import React from "react";

const InputForm = ({ field, data, updateData }) => {
  return (
    <div className="form-component">
      <p>{field}</p>
      <input type="text" name={field} value={data} onChange={updateData} />
    </div>
  );
};

export default InputForm;

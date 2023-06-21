import React from "react";

const Information = ({ data }) => {
  const { make, colour, code } = data;

  return (
    <div>
      <p>
        Generated Text I have a {make} and the colour is {colour}. <br /> REF:
        {code}
      </p>
    </div>
  );
};

export default Information;

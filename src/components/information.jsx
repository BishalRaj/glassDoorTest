import React from "react";
const Information = ({ data }) => {
  const { make, colour, code } = data;

  return (
    <div className="form-component">
      <p>
        Generated Text <br /> I have a {make} and the colour is {colour}. <br />
        REF:
        {code}
      </p>

      {colour === "RED" && "THE CAR IS RED! NICE!!"}
    </div>
  );
};

export default Information;

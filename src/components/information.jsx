import React from "react";
const Information = ({ data }) => {
  const { make, colour, code } = data;

  return (
    <div className="form-component">
      <h5 style={{ boxShadow: "0 5px 1px -4px gray" }}>Generated Text</h5>
      <p className="my-3">
        I have a{" "}
        <b>
          <i>{make}</i>
        </b>{" "}
        and the colour is{" "}
        <b>
          <i>{colour}</i>
        </b>
        .
        <br />
        {colour === "RED" && (
          <span className="text-success">
            THE CAR IS <span className="text-danger">RED</span>! NICE!!
          </span>
        )}
      </p>
      <p>
        REF:{" "}
        <b>
          <i>{code}</i>
        </b>
      </p>
    </div>
  );
};

export default Information;

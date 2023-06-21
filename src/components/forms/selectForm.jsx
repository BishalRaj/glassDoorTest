import React from "react";
import { Col, Row } from "react-bootstrap";

const SelectForm = ({ field, options }) => {
  return (
    <Row>
      <Col lg={12}>{field}</Col>
      <select name={field} id={field}>
        {options.map((x) => {
          return <option value={x}>{x}</option>;
        })}
      </select>
    </Row>
  );
};

export default SelectForm;

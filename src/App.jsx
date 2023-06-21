import { Card } from "react-bootstrap";
import SelectForm from "./components/forms/selectForm";
import { useState } from "react";
import Information from "./components/information";
import InputForm from "./components/forms/inputForm";

function App() {
  const [counter, setCounter] = useState(0);
  const [prodData, setProdData] = useState([]);
  const makeOptions = [
    "AUDI",
    "BMW",
    "VAUXHAL",
    "MERCEDES",
    "PEUGEOT",
    "RENAULT",
  ];

  const colourOptions = ["BLUE", "RED", "BLACK", "ORANGE"];

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh", width: "auto" }}
    >
      <Card className="shadow w-25 p-4">
        <SelectForm field={"make"} options={makeOptions} />
        <SelectForm field={"colour"} options={colourOptions} />
        <InputForm field={"code"} />
        <Information data={prodData} />
        <div className="w-100 d-flex  justify-content-between">
          {counter}
          <button onClick={() => setCounter((x) => (x >= 2 ? 0 : x + 1))}>
            Next
          </button>
        </div>
      </Card>
    </div>
  );
}

export default App;

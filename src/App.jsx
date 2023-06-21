import { Card } from "react-bootstrap";
import SelectForm from "./components/forms/selectForm";
import { useEffect, useState } from "react";
import Information from "./components/information";
import InputForm from "./components/forms/inputForm";
import { colourOptions, makeOptions } from "./data";
import "./style.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [hasData, setHasData] = useState(false);
  const [prodData, setProdData] = useState({
    make: "",
    colour: "",
    code: "",
  });

  function updateData(e) {
    setProdData({ ...prodData, [e.target.name]: e.target.value });
  }

  function handleClick() {
    if (counter >= 3) {
      setProdData({
        make: "",
        colour: "",
        code: "",
      });
      setCounter(0);
    } else setCounter((x) => x + 1);
  }

  useEffect(() => {
    // validation
    switch (counter) {
      case 0:
        if (
          prodData.make != "" &&
          prodData.make != null &&
          prodData.make != undefined
        )
          setHasData(true);
        else setHasData(false);
        break;

      case 1:
        if (
          prodData.colour != "" &&
          prodData.colour != null &&
          prodData.colour != undefined
        )
          setHasData(true);
        else setHasData(false);
        break;
      case 2:
        if (
          prodData.code != "" &&
          prodData.code != null &&
          prodData.code != undefined
        )
          setHasData(true);
        else setHasData(false);
        break;
      case 3:
        break;
    }
  }, [prodData, counter]);

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh", width: "auto" }}
    >
      <Card className="shadow w-25 p-4">
        {counter === 0 && (
          <SelectForm
            field={"make"}
            options={makeOptions}
            updateData={updateData}
          />
        )}
        {counter === 1 && (
          <SelectForm
            field={"colour"}
            options={colourOptions}
            updateData={updateData}
          />
        )}
        {counter === 2 && (
          <InputForm
            field={"code"}
            updateData={updateData}
            data={prodData.code}
          />
        )}
        {counter === 3 && (
          <Information data={prodData} updateData={updateData} />
        )}
        <div className="w-100 d-flex  justify-content-between">
          {counter}
          <button onClick={() => handleClick()} disabled={!hasData}>
            {counter < 2 ? "Next" : counter > 2 ? "Redo" : "Done"}
          </button>
        </div>
      </Card>
    </div>
  );
}

export default App;

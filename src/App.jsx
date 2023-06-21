import SelectForm from "./components/forms/selectForm";

function App() {
  const makeOptions = [
    "AUDI",
    "BMW",
    "VAUXHAL",
    "MERCEDES",
    "PEUGEOT",
    "RENAULT",
  ];

  return (
    <div>
      <SelectForm field={"make"} options={makeOptions} />
    </div>
  );
}

export default App;

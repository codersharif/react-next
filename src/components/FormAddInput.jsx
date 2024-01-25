import { useState } from "react";

export default function FormAddInput() {
  const [inputs, setInput] = useState([
    {
      id: 1,
      label: "Name",
    },
    {
      id: 4,
      label: "Name",
    },
  ]);
  const handleAddInput = () => {
    const nextId = inputs[inputs.length - 1].id + 1;
    setInput([
      ...inputs,
      {
        id: nextId,
        label: "Name",
      },
    ]);
    // console.log(e);
  };
  return (
    <div>
      {inputs.map((input) => (
        <div
          key={input.id}
          style={{
            marginBottom: "5px",
          }}
        >
          <label>{input.label}</label>
          <br />
          <input type="text" />
        </div>
      ))}

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleAddInput}>Add Input</button>
      </div>
    </div>
  );
}

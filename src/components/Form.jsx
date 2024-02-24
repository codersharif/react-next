import { useRef } from "react";

export default function Form() {
  let inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
    // console.log(inputRef.current);
  };
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus the input</button>
    </>
  );
}

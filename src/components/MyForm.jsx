import { useRef } from "react";
import MyInput from "./MyInput";

export default function MyForm() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}

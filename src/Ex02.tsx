import { useRef, useState } from "react";

export default function Ex02() {
  const [nome, setNome] = useState("");
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <fieldset>
        <legend>pratica de Ref</legend>
        <input
          type="text"
          ref={inputRef}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <p>Hello my name is {nome} </p>
        <button onClick={focusInput}>Focus input</button>
      </fieldset>
    </>
  );
}

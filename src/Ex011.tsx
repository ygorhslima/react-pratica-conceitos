/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

export default function Ex011() {
  const [message, setMessage] = useState<string>();
  const [numero1, setNumero1] = useState<string>();
  const [numero2, setNumero2] = useState<string>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Number(numero1) == Number(numero2)) {
      setMessage("Os dois valores são iguais");
    } else if (Number(numero1) > Number(numero2)) {
      setMessage(`${numero1} é maior que ${numero2}`);
    } else if (Number(numero2) > Number(numero1)) {
      setMessage(`${numero2} é maior que ${numero1}`);
    } else {
      setMessage(`${numero1} é diferente de ${numero2}`);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>Primeiro número</label>
          <input
            type="text"
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
          />

          <label>Segundo número</label>
          <input
            type="text"
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
          />

          <button>Calcular</button>
        </fieldset>
      </form>

      {message && (
        <div
          className="result"
          style={{ marginTop: "20px", whiteSpace: "pre-line" }}
        >
          <strong>Resultado:</strong>
          <p>{message}</p>
        </div>
      )}
    </>
  );
}

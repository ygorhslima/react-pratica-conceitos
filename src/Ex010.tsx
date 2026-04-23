/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

export default function Ex010() {
  const [message, setMessage] = useState<string>();
  const [valor, setValor] = useState<string>();
  const [base, setBase] = useState<string>("Binario");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const num = Number(valor);

    if (isNaN(num)) {
      setMessage("Por favor, insira um número valido");
      return;
    }

    let res: string = "";

    switch (base) {
      case "Binario":
        res = num.toString(2);
        break;
      case "Octal":
        res = num.toString(8);
        break;
      case "Hexadecimal":
        res = num.toString(16);
        break;
      default:
        res = "Opção inválida";
        break;
    }

    setMessage(`O valor em ${base} é: ${res}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>Digite um número inteiro</label>
          <input
            type="text"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
          

          <select value={base} onChange={(e) => setBase(e.target.value)}>
            <option value={"Binario"}>Converter para BINÁRIO</option>
            <option value={"Octal"}>Converter para OCTAL</option>
            <option value={"Hexadecimal"}>Converter para HEXADECIMAL</option>
          </select>

          <button>Resultado</button>
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

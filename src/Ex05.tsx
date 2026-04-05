import { useState } from "react";

export default function Ex05() {
  const [peso, setPeso] = useState<string>();
  const [altura, setAltura] = useState<string>();
  const [message, setMessage] = useState<string>();

  const handleSubmit = (e) => {
    e.preventDefault();
    const p = Number(peso)
    const a = Number(altura);
   
    const IMC = p / (a ** 2);

    console.log(IMC)
    if (IMC < 20) {
      setMessage("Abaixo do peso");
    } else if (IMC <= 25) {
      setMessage("Normal");
    } else if (IMC <= 30) {
      setMessage("Excesso de peso");
    } else if (IMC <= 35) {
      setMessage("Obesidade");
    } else if (IMC > 35){
      setMessage("Obesidade Mórbida");
    }else{
        setMessage("erro")
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Cálculo de IMC</legend>

          <label>Digite o Peso: </label>
          <input
            type="text"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />

          <label>Digite a Altura: </label>
          <input
            type="text"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />

          <button type="submit">Enviar</button>
        </fieldset>
      </form>

      {message && (
        <div className="result" style={{ marginTop: "20px", whiteSpace: "pre-line" }}>
          <strong>Resultado:</strong>
          <p>{message}</p>
        </div>
      )}
    </>
  );
}

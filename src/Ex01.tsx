import { useState } from "react";

export default function Ex01() {
  const [nome, setNome] = useState<string>("");
  const [idade, setIdade] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const idadeConvertido = Number(idade);

    if (idadeConvertido >= 65) {
      setMessage(`olá ${nome}, você tem ${idade} anos e é Idoso(a)`);
    } else if (idadeConvertido < 18) {
      setMessage(`olá ${nome}, você tem ${idade} anos e é Menor de idade`);
    } else {
      setMessage(`olá ${nome}, você tem ${idade} anos e é Maior de idade`);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Verificação de Idade</legend>

          <input
            type="text"
            placeholder="Digite seu Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Digite sua idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            required
          />
          <button type="submit">Enviar</button>
        </fieldset>
      </form>

      {message && (
        <div className="result">
          <p>{message}</p>
        </div>
      )}
    </>
  );
}

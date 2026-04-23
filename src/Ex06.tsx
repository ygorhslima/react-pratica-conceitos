import { useState } from "react";

export default function Ex06() {
  const [nomeAluno, setNomeAluno] = useState<string>("");
  const [notas, setNotas] = useState<string[]>(["", "", ""]);
  const [message, setMessage] = useState<string>();

  const handleNotaChange = (valor: string, index: number) => {
    const novasNotas = [...notas];
    novasNotas[index] = valor;
    setNotas(novasNotas);
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const valoresNumericos = notas.map(n => parseFloat(n)).filter(n => !isNaN(n));
    if(valoresNumericos.length > 0){
        const soma = valoresNumericos.reduce((acc, curr) => acc + curr, 0)
        const media = soma / valoresNumericos.length;

        setMessage(`A média do aluno ${nomeAluno} é: ${media.toFixed(2)}`)
    }else{
        setMessage("Por favor, preencha os dados corretamente")
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Calculo de Notas</legend>

          <label htmlFor="">Informe o Nome do Aluno</label>
          <input
            type="text"
            value={nomeAluno}
            onChange={(e) => setNomeAluno(e.target.value)}
          />

          {notas.map((nota, index) => (
            <div key={index}>
              <label>nota {index + 1}: </label>
              <input
                type="text"
                value={nota}
                onChange={(e) => handleNotaChange(e.target.value, index)}
              />
            </div>
          ))}
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

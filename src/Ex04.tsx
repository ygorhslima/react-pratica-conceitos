import { useState } from "react";

export default function Ex04() {
  const [horasTrabalhadas, setHorasTrabalhadas] = useState("");
  const [horasExtras, setHorasExtras] = useState("");
  const [valorHora, setValorHora] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convertendo as entradas para números
    const hTrabalhadas = Number(horasTrabalhadas);
    const hExtras = Number(horasExtras);
    const vHora = Number(valorHora);

    // Cálculo: Horas extras valem o dobro (100% de acréscimo)
    const totalHorasEquivalentes = hTrabalhadas + (hExtras * 2);
    const salarioBruto = totalHorasEquivalentes * vHora;

    const INSS = salarioBruto * 0.09; // 9%
    const FGTS = salarioBruto * 0.08; // 8%
    const salarioLiquido = salarioBruto - INSS;

    // Formatando a mensagem para exibição
    setMessage(`
      Salário Bruto: R$ ${salarioBruto.toFixed(2)} | 
      Salário Líquido: R$ ${salarioLiquido.toFixed(2)} | 
      INSS: R$ ${INSS.toFixed(2)} | 
      FGTS: R$ ${FGTS.toFixed(2)}
    `);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Cálculo de Salário</legend>
          <label>Horas trabalhadas: </label>
          <input
            type="number"
            value={horasTrabalhadas}
            onChange={(e) => setHorasTrabalhadas(e.target.value)}
          />

          <label>Horas extras: </label>
          <input
            type="number"
            value={horasExtras}
            onChange={(e) => setHorasExtras(e.target.value)}
          />

          <label>Valor da hora: </label>
          <input
            type="number"
            value={valorHora}
            onChange={(e) => setValorHora(e.target.value)}
          />

          <button type="submit">Enviar</button>
        </fieldset>
      </form>

      {message && (
        <div className="result" style={{ marginTop: '20px', whiteSpace: 'pre-line' }}>
          <strong>Resultado:</strong>
          <p>{message}</p>
        </div>
      )}
    </>
  );
}
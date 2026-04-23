import { useState } from "react";

export default function Ex09() {
  const [message, setMessage] = useState<string>();
  const [valorCasa, setValorCasa] = useState<string>();
  const [salarioComprador, setSalarioComprador] = useState<string>();
  const [anosFinanciamento, setAnoFinanciamento] = useState<string>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const prestacao = Number(valorCasa) / (Number(anosFinanciamento) * 12)
    
    const minimo = Number(salarioComprador) * (30/100);

    if(Number(prestacao) <= Number(minimo)){
        setMessage(`para pagar uma casa de ${valorCasa} em ${anosFinanciamento} anos a prestação será de ${prestacao}. Empréstimo pode ser CONCEDIDO`);
    }else{
        setMessage(`para pagar uma casa de ${valorCasa} em ${anosFinanciamento} anos a prestação será de ${prestacao}. Empréstimo será NEGADO!`);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Aprovando Empréstimos</legend>
          
          <label>Valor da casa </label>
          <input
            type="text"
            value={valorCasa}
            onChange={(e) => setValorCasa(e.target.value)}
          />

          <label>Salário do comprador </label>
          <input
            type="text"
            value={salarioComprador}
            onChange={(e) => setSalarioComprador(e.target.value)}
          />
          
          <label>Quantos anos de financiamento </label>
          <input
            type="text"
            value={anosFinanciamento}
            onChange={(e) => setAnoFinanciamento(e.target.value)}
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

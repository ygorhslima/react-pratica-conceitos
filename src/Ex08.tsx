import { useState } from "react"

export default function Ex08(){
    const [message, setMessage] = useState<string>();
    const [velocidadeAtual, setVelocidadeAtual] = useState<string>();
    
    const handleSubmit = (e:Event) => {
        e.preventDefault();
        const KM_LIMITE = 80;
        const multa = (Number(velocidadeAtual) - KM_LIMITE) * 7;

        if(Number(velocidadeAtual) < KM_LIMITE){
            setMessage("Tenha um bom dia! Dirija com segurança");
        }else{
            setMessage(`
            MULTADO! você excedeu o limite permitido que é de ${KM_LIMITE}km/h
            Você deve pagar uma multa de R$${multa}!
            Tenha um bom dia! Dirija com segurança 
            `);
        }
        
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Radar eletrônico</legend>
                    <label>Qual é a velocidade atual do carro?: </label>
                    <input type="text" value={velocidadeAtual} onChange={(e)=>setVelocidadeAtual(e.target.value)} />
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
    )
}
import { useState } from "react"

export default function Ex07(){
    const [message, setMessage] = useState<string>();
    const [jogador, setJogador] = useState<string>();

    const handleSubmit = (e:Event) => {
        e.preventDefault();
        const computador = Math.floor(Math.random() * 5);
        const jogadorConvertNumber = Number(jogador)
        if(computador == jogadorConvertNumber){
            setMessage("Parabéns! você conseguiu me vencer");
        }else if(jogadorConvertNumber > 5){
            setMessage("O Combinado não foi esse, é um número entre 0 e 5")
        }else if (computador != jogadorConvertNumber){
            setMessage(`GANHEI! Eu pensei no número ${computador} e não no ${jogadorConvertNumber}`);
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Jogo de Adivinhação</legend>
                    
                    <label>Vou pensar em um número entre 0 e 5, tente adivinhar</label>
                    <label htmlFor="">em que número eu pensei?</label>
                    <input type="text" value={jogador} onChange={(e)=>setJogador(e.target.value)}/>
                    
                    <button>Tente aqui</button>
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
import { useState } from "react";

function Condicional(){

    const [email,setEmail] = useState()
    const [userEmail,setUserEmail] = useState()


    function enviarEmail(e){

        e.preventDefault()
        setUserEmail(email)
        console.log('enviado')
    }

    function limparEmail(){
        setUserEmail('')
    }

    return(
        <div>
            <h2>cadastre seu email</h2>
            <form>
                <input
                 type="email"
                 placeholder="digite seu email"
                 onChange={(e) => setEmail(e    .target.value)}
                 />
                <button type="submit" onClick={enviarEmail}>Enviar e-mail:
                </button>

                {userEmail && (
                    <div>
                        <p>O e-mail do usuario é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>  
                )}
            </form>
        </div>
    )
}
export default Condicional;
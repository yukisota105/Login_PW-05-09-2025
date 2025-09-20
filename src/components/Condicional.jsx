import { useState } from "react";

function Condicional(){

    const [email,setEmail] = useState()
    const [userEmail,setUserEmail] = useState()
    
    const [name,setName] = useState()
    const [userName,setUserName] = useState()

    const [senha,setP] = useState()
    const [userSenha,setUserP] = useState()


    function enviarEmail(e){

        e.preventDefault()
        setUserEmail(email)
        console.log('email enviado')
    }

    function limparEmail(){
        setUserEmail('')
    }

    function enviarName(n){

        n.preventDefault()
        setUserName(name)
        console.log('nome inserido com sucesso')
    }

    function limparName(){
        setUserName('')
    }

    function enviarP(s){

        s.preventDefault()
        setUserP(senha)
        console.log('senha definida!')
    }

    function limparP(){
        setUserP('')
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

            <h2>insira seu nome </h2>
            <form>
                <input
                 type="text"
                 placeholder="insira seu nome"
                 onChange={(n) => setName(n.target.value)}
                 />
                <button type="submit" onClick={enviarName}>definir nome:
                </button>

                {userName && (
                    <div>
                        <p>o nome do usuario é: {userName}</p>
                        <button onClick={limparName}>Limpar Nome</button>
                    </div>  
                )}
            </form>


            <h2>insira sua senha </h2>
            <form>
                <input
                 type="password"
                 placeholder="insira sua senha"
                 onChange={(s) => setP(s.target.value)}
                 />
                <button type="submit" onClick={enviarP}>insira sua senha:
                </button>

                {userSenha && (
                    <div>
                        <p>a senha inserida é: {userSenha}</p>
                        <button onClick={limparP}>redefinir senha</button>
                    </div>  
                )}
            </form>


        </div>
    )
}
export default Condicional;
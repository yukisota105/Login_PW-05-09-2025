import { useState } from "react";

function Condicional(){

    const [email,setEmail] = useState()
    const [userEmail,setUserEmail] = useState()
    
    const [name,setName] = useState()
    const [userName,setUserName] = useState()

    const [senha,setP] = useState()
    const [userSenha,setUserP] = useState()

    const [telefone,setTelefone] = useState()
    const [userTelefone,setUserTelefone] = useState()

    const [idade,setIdade] = useState()
    const [userIdade,setUserIdade] = useState()


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

    function enviarTelefone(t){
        t.preventDefault()
        setUserTelefone(telefone)
        console.log('telefone inserido!')
    }
    function limparTelefone(){
        setUserTelefone('')
    }

    function enviarIdade(i){
        i.preventDefault()
        setUserIdade(idade)
        console.log('idade inserida!')
    }
    function limparIdade(){
        setUserIdade('')
    }


    return(
        <div>
   
            <h2>cadastre seu email</h2>
            <form>
                <input
                 type="email"
                 placeholder="digite seu email"
                 onChange={(e) => setEmail(e.target.value)}
                 />
                <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>

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
                <button type="submit" onClick={enviarName}>Definir nome</button>

                {userName && (
                    <div>
                        <p>O nome do usuario é: {userName}</p>
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
                <button type="submit" onClick={enviarP}>Definir senha</button>

                {userSenha && (
                    <div>
                        <p>A senha inserida é: {userSenha}</p>
                        <button onClick={limparP}>Redefinir senha</button>
                    </div>  
                )}
            </form>

            <h2>insira seu telefone</h2>
            <form>
                <input
                 type="tel"
                 placeholder="insira seu telefone"
                 onChange={(t) => setTelefone(t.target.value)}
                 />
                <button type="submit" onClick={enviarTelefone}>Definir telefone</button>

                {userTelefone && (
                    <div>
                        <p>O telefone do usuario é: {userTelefone}</p>
                        <button onClick={limparTelefone}>Limpar telefone</button>
                    </div>  
                )}
            </form>


            <h2>insira sua idade</h2>
            <form>
                <input
                 type="number"
                 placeholder="insira sua idade"
                 onChange={(i) => setIdade(i.target.value)}
                 />
                <button type="submit" onClick={enviarIdade}>Definir idade</button>

                {userIdade && (
                    <div>
                        <p>A idade do usuario é: {userIdade}</p>
                        <button onClick={limparIdade}>Limpar idade</button>
                    </div>  
                )}
            </form>

        </div>
    )
}
export default Condicional;

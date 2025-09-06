import { useState } from "react";

function Form(){

    function cadastrarUsuario(event){
        event.preventDefault()
        console.log(`Usuario: ${name} usou a senha: ${password} pra cadastrar`)
    }

        const[name,setName]=useState()
        const[password,setPassword]=useState()
    return(
        <>
            <h1>meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input
                        type="text"
                        id="name" 
                        placeholder="Digite seu nome" 
                        onChange={(event)=>setName(event.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="name">Senha: </label>
                    <input 
                    type="text" 
                    id="password"
                    placeholder="Digite sua senha"
                    onChange={(event)=>setPassword(event.target.value)}
                    />  
                </div>

                <div>
                    <input type="submit" value="cadastrar"></input>
                </div>
            </form>
        </>
    )
}
export default Form;
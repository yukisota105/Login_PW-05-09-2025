import Button from "./evento/button";
function Evento(){
    function primeiroEvento() {
        console.log("Primeiro Disparo Ativado!!")
        
    }
    function segundoEvento() {
        console.log("segundo Disparo Ativado!!")
        
    }

    return(
        <>
            <p>clique para disparar um evento:</p>
            <Button event ={primeiroEvento} text="Primeiro"/>
            <Button event ={segundoEvento} text="Segundo"/>

        </>
        )
}

export default Evento;
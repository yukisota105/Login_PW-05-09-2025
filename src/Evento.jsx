function Evento(){
    function meuEvento(){
        console.log('ops! ${numero}')
    }
    return(
        
       <>
            <p>clique para disparar:</p>
            <button onClick={meuEvento}>Ativar</button>

        </>
        )
}

export default Evento;
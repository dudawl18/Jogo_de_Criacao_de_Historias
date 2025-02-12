import './Body.css'

function Body() {

    function SortearImg() {
        const icones = ['']

        let sorteio = Math.floor(Math.random() * icones.length)

            (icones[sorteio])
    }

    return (

        <div className='body-content'>
            <div className="telaJogo-content">
                <h2>Boas vindas </h2> 
                <p>Clique no botão para gerar uma imagem!!</p>
                <button onClick={SortearImg} className='buttonSortear'>Gerar imagem</button>
                <div className="img-content">
                      
                </div>
            </div>
        </div>
    )
}

export default Body


import './Body.css'

function Body() {

    function SortearImg() {
        const icones = ['']

        let sorteio = Math.floor(Math.random() * icones.length)

            (icones[sorteio])
    }

    return (

        <div className='body-content'>
            <div className="telaJogoPart1-content">
                <p className='primeiroTitulo'>Boas vindas </p>
                <p className='temaTitulo'>Tema Geral: Naufrágio</p>
                <p className='instrucaoP'>Clique no botão para gerar uma imagem!!</p>
                <button onClick={SortearImg} className='buttonSortear'>Gerar imagem</button>
            </div>
            <div className="telaJogoPart2-content">
                <div className="img-content">
                   <img className='imagemSorteada' src="./public/img/chave.svg" alt="" />
                   <img className='imagemSorteada' src="./public/img/cobra.svg" alt="" />
                   <img className='imagemSorteada' src="./public/img/castelo.svg" alt="" />
                   <img className='imagemSorteada' src="./public/img/arvore.svg" alt="" />
                   <img className='imagemSorteada' src="./public/img/lanca.svg" alt="" />
                   <img className='imagemSorteada' src="./public/img/veleiro.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Body


import { useState } from 'react'
import './Body.css'

function Body() {

    const icones = ['./public/img/cobra.svg', './public/img/castelo.svg', './public/img/arvore.svg', './public/img/lanca.svg',
        './public/img/veleiro.svg', './public/img/algemado.svg', './public/img/chave.svg', 
        './public/img/furacao.svg', './public/img/grupo-de-pessoas.svg', './public/img/ilha.svg', './public/img/kit-primeiros-socorros.svg',
        './public/img/navio.svg', './public/img/peixe-espinhoso.svg', './public/img/navio-afundando.svg', './public/img/perna-machucada.svg',
         './public/img/pessoa-faleceu.svg', './public/img/pessoa-se-afogando.svg', './public/img/pirata.svg', './public/img/pistola.svg', 
         './public/img/tubarao.svg', './public/img/veleiro.svg', './public/img/vulcao-errupcao.svg']

    const [iconesSorteados, setIconesSorteados] = useState([])

    function SortearIcon() {
        let novosIcones = [] // Guarda os icones que foram sorteados na rodada
        let iconesDisponiveis = icones.filter(img => !iconesSorteados.includes(img)) // Guarda os icones que ainda não forma sorteadas e evita que os icones que já apareceram sejam sorteados
        
        if (iconesDisponiveis.length < 6) {
            setIconesSorteados([])
            iconesDisponiveis = [...icones]
        }
        
        while (novosIcones.length < 6) {
            const sorteio = Math.floor(Math.random() * iconesDisponiveis.length)
            const novoIcone = iconesDisponiveis.splice(sorteio, 1)[0]
            novosIcones.push(novoIcone)
        }
        
        setIconesSorteados(novosIcones)
    }

    return (

        <div className='body-content'>
            <div className="telaJogoPart1-content">
                <p className='primeiroTitulo'>Boas vindas </p>
                <p className='temaTitulo'>Tema Geral: Naufrágio</p>
                <p className='instrucaoP'>Clique no botão para gerar uma imagem!!</p>
                <button onClick={SortearIcon} className='buttonSortear'>Gerar imagem</button>
            </div>
            <div className="telaJogoPart2-content">
                <div className="img-content">
                    {iconesSorteados.map((img, index) => (
                       <img key={index} className='imagemSorteada' src={img} alt={`Icone sorteado ${index + 1}`} />
                   ))}
                </div>
            </div>
        </div>
    )
}

export default Body


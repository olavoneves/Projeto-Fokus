// Primeira variável do tipo const que vai pegar os elementos dentro do html determinado dentro do querySelector
const html = document.querySelector('html')

// Variaveis para capturar os valores dos botões no html
const buttonFoco = document.querySelector('.app__card-button--foco')
const buttonCurto = document.querySelector('.app__card-button--curto')
const buttonLongo = document.querySelector('.app__card-button--longo')

const banner = document.querySelector('.app__image')
const buttonsDestaque = document.querySelectorAll('.app__card-button')

buttonFoco.addEventListener('click', () => { 
    alterarContexto('foco')
    buttonFoco.classList.add('active')
})

buttonCurto.addEventListener('click', () => { 
    alterarContexto('descanso-curto')
    buttonCurto.classList.add('active') 
})

buttonLongo.addEventListener('click', () => { 
    alterarContexto('descanso-longo')
    buttonLongo.classList.add('active') 
})

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `Imagens/${contexto}.png`)
    buttonsDestaque.forEach(function (contexto) {
        contexto.classList.remove('active')
    })
}

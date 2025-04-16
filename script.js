// Primeira variável do tipo const que vai pegar os elementos dentro do html determinado dentro do querySelector
const html = document.querySelector('html')

// Variaveis para capturar os valores dos botões no html
const buttonFoco = document.querySelector('.app__card-button--foco')
const buttonCurto = document.querySelector('.app__card-button--curto')
const buttonLongo = document.querySelector('.app__card-button--longo')

buttonFoco.addEventListener('click', () => { 
    html.setAttribute('data-contexto', 'foco') 
})

buttonCurto.addEventListener('click', () => { 
    html.setAttribute('data-contexto', 'descanso-curto') 
})

buttonLongo.addEventListener('click', () => { 
    html.setAttribute('data-contexto', 'descanso-longo') 
})

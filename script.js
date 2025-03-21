// Primeira variável do tipo const que vai pegar os elementos dentro do html determinado dentro do querySelector
const html = document.querySelector('html')

// Variaveis para capturar os valores dos botões no html
const buttonFoco = document.getElementsByClassName('app__card-button--foco active')

const buttonCurto = document.getElementsByClassName('app__card-button--curto')

const buttonLongo = document.getElementsByClassName('app__card-button--longo')

// Nossa variavel botão foco chamou a função addEventListener que vai ser responsável por fazer a gente saber quando algo vai acontecer. Nesse caso quando alguém clicar no botão foco
// => é uma arrowFunction, ou seja simplesmente está substituindo a palavra function, faz a msm coisa
// setAttribute(set de alterar, ou seja alterar o atributo) pergunta a partir de dois parametros, qual elemento você quer alterar

buttonFoco.addEventListener('click', () => { 
    html.setAttribute('data-contexto', 'foco') 
})

buttonCurto.addEventListener('click', () => { 
    html.setAttribute('data-contexto', 'descanso-curto') 
})

buttonLongo.addEventListener('click', () => { 
    html.setAttribute('data-contexto', 'descanso-longo') 
})

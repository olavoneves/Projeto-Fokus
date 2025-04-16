// Primeira variável do tipo const que vai pegar os elementos dentro do html determinado dentro do querySelector
const html = document.querySelector('html')

// Variaveis para capturar os valores dos botões no html
const buttonFoco = document.querySelector('.app__card-button--foco')
const buttonCurto = document.querySelector('.app__card-button--curto')
const buttonLongo = document.querySelector('.app__card-button--longo')

const title = document.querySelector('.app__title')
const banner = document.querySelector('.app__image')
const buttonsDestaque = document.querySelectorAll('.app__card-button')
const startPause = document.getElementById('start-pause')
const iniciarPausarButton = document.querySelector('#start-pause span')
const imgInicarPausar = document.querySelector('.app__card-primary-butto-icon')
const contador = document.getElementById('timer')

const musicInput = document.getElementById('alternar-musica')
const music = new Audio('sons/luna-rise-part-one.mp3')
const somAlert = new Audio('sons/beep.mp3')
const somPause = new Audio('sons/pause.mp3')
const somPlay = new Audio('sons/play.wav')

let timer = 1500
let intervalo = null

music.loop = true
musicInput.addEventListener('change', () => {
    if (music.paused) {
        music.play()
        somPlay.play()
    } else {
        music.pause()
        somPause.play()
    }
})

buttonFoco.addEventListener('click', () => {
    timer = 1500 
    alterarContexto('foco')
    buttonFoco.classList.add('active')
})

buttonCurto.addEventListener('click', () => { 
    timer = 300
    alterarContexto('descanso-curto')
    buttonCurto.classList.add('active')
})

buttonLongo.addEventListener('click', () => { 
    timer = 900
    alterarContexto('descanso-longo')
    buttonLongo.classList.add('active') 
})

function alterarContexto(contexto) {
    mostrarTempo()
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `Imagens/${contexto}.png`)
    buttonsDestaque.forEach(function (contexto) {
        contexto.classList.remove('active')
    })
    switch (contexto) {
        case 'foco':
            title.innerHTML =
            `Otimize sua produtividade,<br>
                <strong class="app__title-strong">
                    mergulhe no que importa.
                </strong>`
            break;
        case 'descanso-curto':
            title.innerHTML =
            `Que tal dar uma respirada? <br>
                <strong class="app__title-strong">
                    Faça uma pausa curta!
                </strong>`
            break;
        case 'descanso-longo':
            title.innerHTML =
            `Hora de voltar à superfície.<br>
                <strong class="app__title-strong">
                    Faça uma pausa longa.
                </strong>`
            break;
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if (timer <= 0) {
        music.pause()
        somAlert.play()
        alert('Tempo finalizado!')
        zerar()
        return
    }
    timer -= 1
    mostrarTempo()
}

startPause.addEventListener('click', iniciarPausar)

function iniciarPausar() {
    if (intervalo) {
        somPause.play()
        zerar()
        return
    }
    somPlay.play()
    intervalo = setInterval(contagemRegressiva, 1000)
    iniciarPausarButton.textContent = "Pausar"
    imgInicarPausar.setAttribute('src', `Imagens/pause.png`)
}

function zerar() {
    clearInterval(intervalo)
    iniciarPausarButton.textContent = "Continuar"
    imgInicarPausar.setAttribute('src', `Imagens/play_arrow.png`)
    intervalo = null
}

function mostrarTempo() {
    const tempo = new Date(timer * 1000)
    const timerFormated = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})
    contador.innerHTML = `${timerFormated}`
}

mostrarTempo()
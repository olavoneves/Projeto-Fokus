const btnTarefa = document.querySelector('.app__button--add-task')
const formTarefa = document.querySelector('.app__form-add-task')
const textArea = document.querySelector('.app__form-textarea')
const btnDelete = document.querySelector('.app__form-footer__button--delete')
const btnCancelar = document.querySelector('.app__form-footer__button--cancel')
const btnSalvar = document.querySelector('.app__form-footer__button--confirm')
const ulTarefas = document.querySelector('.app__section-task-list')
const listaTarefas = JSON.parse(localStorage.getItem('listaTarefas')) || []

function atualizarTarefas() {
    localStorage.setItem('listaTarefas', JSON.stringify(listaTarefas))
}

function criarTarefa(tarefa) {
    const li = document.createElement('li')
    li.classList.add('app__section-task-list-item')

    const svg = document.createElement('svg')
    svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12"  r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    `

    const paragrafo = document.createElement('p')
    paragrafo.textContent = tarefa.descricaoTarefa
    paragrafo.classList.add('app__section-task-list-item-description')

    const button = document.createElement('button')
    button.classList.add('app_button-edit')

    button.onclick = () => {
        const novaDescricao = prompt("Qual o novo nome da tarefa ?")
        if (novaDescricao) {
            paragrafo.textContent = novaDescricao
            tarefa.descricaoTarefa = novaDescricao
            atualizarTarefas()
        }
    }

    const imgButton = document.createElement('img')
    imgButton.setAttribute('src', './Imagens/edit.png')
    button.append(imgButton)

    li.append(svg)
    li.append(paragrafo)
    li.append(button)

    return li
}

btnTarefa.addEventListener('click', () => {
    formTarefa.classList.toggle('hidden')
})

formTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const tarefa = {
        descricaoTarefa: textArea.value
    }
    listaTarefas.push(tarefa)
    const elementoTarefa = criarTarefa(tarefa)
    ulTarefas.append(elementoTarefa)
    atualizarTarefas()
    textArea.value = ''
    formTarefa.classList.add('hidden')
})

btnDelete.addEventListener('click', () => {
    if (textArea.value !== null || textArea.value !== ' ') {
        textArea.value = ''
    }
    formTarefa.classList.add('hidden')
})

btnCancelar.addEventListener('click', () => {
    if (textArea.value !== null || textArea.value !== ' ') {
        textArea.value = ''
    }
})

listaTarefas.forEach(tarefa => {
    const elementoTarefa = criarTarefa(tarefa)
    ulTarefas.append(elementoTarefa)
});
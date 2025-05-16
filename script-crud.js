const btnTarefa = document.querySelector('.app__button--add-task')
const formTarefa = document.querySelector('.app__form-add-task')
const textArea = document.querySelector('.app__form-textarea')
const listaTarefas =[]

btnTarefa.addEventListener('click', () => {
    formTarefa.classList.toggle('hidden')
})

formTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const tarefa = {
        descricaoTarefa: textArea.value
    }
    listaTarefas.push(tarefa)
    localStorage.setItem('tarefas', listaTarefas)
    
})
let tasks = [];
const form = document.getElementById('form')
const inputTask = document.querySelector('form > label > input')
const listTasks = document.querySelector('#tasks')

const validate = (task) => {
    if (task !== '') {
        return true
    }else{
        alert('no podes agregar una tarea vacia')    
        return false
    }
}


const renderTasks = (arrTasks) => {
    listTasks.innerHTML = ''
    // iterar el array 
    arrTasks.map( (task) => {
        listTasks.innerHTML += `
                <li class="task"> ${task.task}
                    <div class='task_controls'> 
                        <input type="checkbox" id='status-${task.id}' name="" id="">
                        <span id='edit-${task.id}'>✍</span>
                        <span class='eliminar' id='delete-${task.id}'>❌</span>
                    </div>
                </li>
        `  

    if(task.state === true) document.querySelector(`#status-${task.id}`).checked = true
    })
    // deleteTask()
}

const completeTask = () => {
    document.addEventListener('click', (evento) => {
        if (evento.target.tagName === 'INPUT') {
            let id = evento.target.id
            id = id.slice(7)
            tasks = tasks.map(task => {
                if(task.id == id){  
                    return {...task, state: !task.state}
                }
                return task
            })
            console.log(tasks);
            renderTasks(tasks)
        }
    })
}

const deleteTask = () => {
    document.addEventListener('click', (evento) => {
        let spanId = evento.target.id
        if (spanId.includes('delete')) {
            let id = spanId.slice(7)
            id = Number(id)
            tasks = tasks.filter( task => task.id !== id)
            console.log(tasks);
            renderTasks(tasks)
        }
    }

)

// let btns = document.querySelectorAll('.eliminar')
// console.log(btns);
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         alert('tarea eliminada')
//     })
// })
}

const editTask = () => {
    document.addEventListener('click', (evento) => {
        let spanId = evento.target.id
        if (spanId.includes('edit')) {
            let id = spanId.slice(5)
            console.log(id);
            id = Number(id)
            let task =  tasks.find( task => task.id === id)
            let edit = prompt('editar tarea', task.task)
            console.log(tasks);
            // renderTasks(tasks)
            tasks = tasks.map(task => {
                if (task.id == id) {
                    return  {...task, task: edit}
                }
                return task
            })
            renderTasks(tasks)
        }
    })
}

const addTask = () => {
    form.addEventListener('submit', (evento) => {
        evento.preventDefault()
    
        if (validate(inputTask.value)) {
            let newTask = {
                id:  Math.floor(Math.random() * 100) + 1,
                task: inputTask.value,
                state: false
            }
            // TODO refactorizar
            tasks.push(newTask)
            renderTasks(tasks)
            console.log(tasks);
        }
    
        form.reset()
        
    })
}


document.addEventListener('DOMContentLoaded', () => {
    addTask()
    completeTask()
    deleteTask()
    editTask()
})


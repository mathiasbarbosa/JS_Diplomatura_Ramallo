/*
const listaDeTareasDeBatman = [
  {
    id: 1,
    task: "Salvar Gotham",
    state: false
  },
  {
    id: 2,
    task: "Enfrentar al Joker",
    state: false
  },
  {
    id: 3,
    task: "Patrullar las calles",
    state: false
  },
  {
    id: 4,
    task: "Rescatar a un gato de un árbol",
    state: false
  },
  {
    id: 5,
    task: "Investigar actividad criminal en el puerto",
    state: false
  },
  {
    id: 6,
    task: "Reparar el Batimóvil",
    state: false
  }
];

*/

let tasks = [];
const form = document.querySelector('form');
const tasksList = document.querySelector('#tasks')

const addTask = () => {
    form.addEventListener('submit',(e) => {
        e.preventDefault();
        console.dir(e.target.children[0].firstElementChild.value);
        let newtask = {
            id: Math.floor( Math.random() * 100) + 1,
            task: e.target.children[0].firstElementChild.value,
            state: false // TODO
        }
        tasks = [...tasks, newtask];
        renderTasks(tasks)
    })
}

const renderTasks = (arrTasks) => {
    tasksList.innerHTML = ''
    arrTasks.forEach(task => {
        tasksList.innerHTML += `
        <li class="tatasksk" id=${task.id}>
            ${task.task}
            <div class='task_controls'>
                <input id="status-${task.id}" type="checkbox" name='task_status'
                />
                <span id="delete-${task.id}">❌</span>
                <span id="edit-${task.id}">✍</span>
            </div>
        </li>
        `  
        console.log(document.querySelector(`#status-${task.id}`));
        if (task.state === true) document.querySelector(`#status-${task.id}`).checked = true
    })
}

const completeTask = () => {
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'INPUT') {
            let id = e.target.id
            id = id.slice(7)
            tasks = tasks.map(task => {
                if (task.id == id) {
                    return {...task, state: !task.state}
                }
                return task
            })
            renderTasks(tasks)
        }
    })
}

const deleteTask = () => {
    document.addEventListener('click', (e) => {
        let htmlElement = e.target.id 
        if (e.target.id.includes('delete')) {
            console.dir(e.target);
            let id = htmlElement.slice(7)
            console.log(id);
            tasks = tasks.filter( task => task.id != id)
            renderTasks(tasks)
        }
})
}

const editTask = () => {
    document.addEventListener('click', (e) => {
        let htmlElement = e.target.id 
        if (e.target.id.includes('edit')) {
            let id = htmlElement.slice(5)
            console.log(id);
            let task = tasks.find( task => task.id == id)
            let edit = prompt('edit', task.task)
            console.log(edit);
            tasks = tasks.map(tarea => {
                if (tarea.id == id) {
                    console.log('entro');
                    return {...tarea, task:edit}
                }
                // ! revisar el return
                return task
            })
            console.log(tasks);
            renderTasks(tasks)
        }
})
}


addTask()
completeTask()
deleteTask()
editTask()
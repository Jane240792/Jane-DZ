document.addEventListener('DOMContentLoaded', () => {
    //Найти форму
    //Повесить событие на форму, submit

    //Находим список задач
    //добавляем задачу в список

    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const taskslist = document.getElementById('todo-list');

    let tasks = [
        { id: 1, text: 'Пример задачи 1', completed: false },
        { id: 2, text: 'Пример задачи 2', completed: true },
    ];


    taskslist.addEventListener('click', (e) => {
        const liElem = e.target.closest('li');
        if(!liElem){
            return;
        }

        const taskId = Number(liElem.dataset.id);
        const newTask = tasks.find(task => task.id === taskId);

        if(e.target.tagName === 'SPAN'){
            newTask.completed = !newTask.completed;
            renderTasks();
        }

        if(e.target.classList.contains("delete-btn")){
            tasks = tasks.filter(task => {
                return task.id !== newTask.id;
            });
            renderTasks();
        }
    });

    renderTasks();

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //отменяем дефолтное состояние(форма не будет отправляться)

        const newTask = {
            id: Date.now(),
            text: input.value,
            completed: false,
        };
        tasks.push(newTask);
        renderTasks()

        input.value = '';// отчищаем input
    });

    function renderTasks() {
        taskslist.innerHTML = tasks
            .map(
                (task) =>`
            <li data-id="${task.id}">
                <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
                <button class="delete-btn">Delete</button>
            </li>
            `)
            .join("");
    }
});
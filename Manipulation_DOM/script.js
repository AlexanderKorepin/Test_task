const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const filterTasks = document.getElementById('filter-tasks');

let tasks = [];

// Добавление новой задачи
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    // Проверка наличия текста задачи
    if (taskText) {
        const task = {
            text: taskText,
            completed: false
        };
        tasks.push(task);
        taskInput.value = '';
        renderTasks();
    }
});

// Отображение задач
function renderTasks() {
    // Очистка списка задач
    taskList.innerHTML = '';
    // Фильтрация задач по статусу
    const filterValue = filterTasks.value;
    // Сортировка задач по тексту

    tasks.forEach((task, index) => {
        if (filterValue === 'completed' && !task.completed) return;
        if (filterValue === 'pending' && task.completed) return;
        // Создание элементов для задачи
        const li = document.createElement('li');
        li.textContent = task.text;
        if (task.completed) li.classList.add('completed');

        // Обработка завершения задачи
        li.addEventListener('click', () => {
            task.completed = !task.completed;
            renderTasks();
        });

        // Кнопка удаления задачи
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Удалить';
        deleteBtn.addEventListener('click', (e) => {
            // Отмена перехвата события у родительского элемента
            e.stopPropagation();
            tasks.splice(index, 1);
            renderTasks();
        });
        // Добавление кнопки в конец списка задач
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// Фильтрация задач
filterTasks.addEventListener('change', renderTasks);
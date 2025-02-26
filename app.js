const taskForm = document.getElementById('taskForm');
const taskTitle = document.getElementById('taskTitle');
const taskCategory = document.getElementById('taskCategory');
const taskDueDate = document.getElementById('taskDueDate');
const taskPriority = document.getElementById('taskPriority');
const taskList = document.getElementById('taskList');

function createTaskElement(task) {
    const li = document.createElement('li');
    li.classList.add(task.priority);

    li.innerHTML = `
        <span><strong>${task.title}</strong></span>
        <span>Category: ${task.category}</span>
        <span>Due: ${task.dueDate}</span>
        <button class="delete">Delete</button>
    `;

    const deleteButton = li.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    return li;
}

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = taskTitle.value;
    const category = taskCategory.value;
    const dueDate = taskDueDate.value;
    const priority = taskPriority.value;

    if (!title || !category || !dueDate || !priority) {
        alert('Please fill in all fields.');
        return;
    }

    const task = {
        title,
        category,
        dueDate,
        priority,
    };

    const taskElement = createTaskElement(task);
    taskList.appendChild(taskElement);

    taskForm.reset();
});

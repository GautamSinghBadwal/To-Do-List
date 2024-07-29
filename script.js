function addTask() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('todo-list');
    
    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';

    const taskContent = document.createElement('p');
    taskContent.className = 'task-text';
    taskContent.textContent = taskText;
    taskCard.appendChild(taskContent);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(taskCard);
    };
    taskCard.appendChild(deleteButton);

    taskList.appendChild(taskCard);

    document.getElementById('new-task').value = '';
}

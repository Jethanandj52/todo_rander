var tasks = []; // Array to store tasks
var taskId = 0; // Counter for unique IDs

function addTask() {
    var input = document.getElementById('taskInput');

    if (input.value.trim() === "") {
        alert("Task cannot be empty!");
        return;
    }

    tasks.push({
        id: taskId,
        title: input.value
    });

    taskId++; // Increment ID for the next task
    input.value = ""; // Clear input field after adding
    displayTasks();
}

function displayTasks() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = ""; // Clear the current list

    for (let i = 0; i < tasks.length; i++) {
        var taskDiv = document.createElement('div');
        var taskTitle = document.createElement('p');
        var deleteBtn = document.createElement('button');
        var updateBtn = document.createElement('button');

        taskTitle.textContent = tasks[i].title;
        deleteBtn.textContent = "Delete";
        updateBtn.textContent = "Update";

        deleteBtn.setAttribute("onclick", `removeTask(${tasks[i].id})`);
        updateBtn.setAttribute("onclick", `editTask(${tasks[i].id})`);

        taskDiv.appendChild(taskTitle);
        taskDiv.appendChild(deleteBtn);
        taskDiv.appendChild(updateBtn);
        taskDiv.setAttribute("id", tasks[i].id);

        taskList.appendChild(taskDiv);
    }
}

function removeTask(id) {
    tasks = tasks.filter(task => task.id !== id); // Remove task from array
    displayTasks();
}

function editTask(id) {
    // Find the task by ID
    var task = tasks.find(task => task.id === id);
    if (!task) return;

    // Ask for the new title using a prompt
    var newTitle = prompt("Enter new task title:", task.title);

    // If the user provides a non-empty title, update the task
    if (newTitle && newTitle.trim() !== "") {
        task.title = newTitle.trim();
        displayTasks();
    } else {
        alert("Task title cannot be empty!");
    }
}
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        taskList.innerHTML += `
        <li>
            <span class="task-text">${task}</span>

            <div class="action-buttons">
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        </li>
        `;
    });
}

function addTask() {
    const taskInput = document.getElementById("taskInput");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push(taskInput.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function editTask(index) {
    const taskList = document.getElementById("taskList");
    const li = taskList.children[index];

    li.innerHTML = `
        <input class="edit-input" type="text" value="${tasks[index]}" id="editInput">
        <div>
            <button onclick="saveTask(${index})">Save</button>
            <button onclick="displayTasks()">Cancel</button>
        </div>
    `;
}

function saveTask(index) {
    const newValue = document.getElementById("editInput").value;

    if (newValue.trim() === "") {
        alert("Task cannot be empty");
        return;
    }

    tasks[index] = newValue;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

displayTasks();

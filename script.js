function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" onchange="toggleTask(this)">
            <span class="task">${taskText}</span>
            <button class="delete-button" onclick="deleteTask(this)">Apagar</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function toggleTask(checkbox) {
    const task = checkbox.nextElementSibling;
    if (checkbox.checked) {
        task.style.textDecoration = "line-through";
    } else {
        task.style.textDecoration = "none";
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}

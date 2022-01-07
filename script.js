let tasksArray = JSON.parse(localStorage.getItem("taskArray")) || [];

const tasks = document.querySelector("#tasks");
const taskInput = document.querySelector("#taskinput");
const buttonTask = document.querySelector("#buttonTask");

displayTasks(tasksArray);
buttonTask.addEventListener("click", (ev) => {
    let value = taskInput.value;
    tasksArray = [...tasksArray, { id: tasksArray.length + 1, value }];
    updateLocalStorage(tasksArray);
    displayTasks(tasksArray);
});

function updateLocalStorage(tasksArray) {
    localStorage.setItem("taskArray", JSON.stringify(tasksArray));
}

function displayTasks(tasksArray) {
    tasks.innerHTML = "";
    tasksArray.forEach((task, idx) => {
        let id = `tasks-${idx}`;
        let inputId = `input-${idx}`;
        let btnEditId = `editBtn-${idx}`;
        tasks.innerHTML += `<li id="${id}" class='list-group-item d-flex align-items-center justify-content-between'>
                                <div>
                                    <input
                                        id="${inputId}"
                                        type="text"
                                        readonly
                                        value="${task.value}"
                                        class="form-control"
                                        placeholder="Recipient's username"
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                    />
                                </div>
                                <div>
                                <button id="${btnEditId}" onclick="editTask('${inputId}', '${btnEditId}', '${task.id}')" type="button" class="btn btn-info">
                                    Edit
                                </button>
                                    <button onclick="deleteTask('${id}', '${task.id}')" type="button" class="btn btn-danger">
                                        Delete
                                    </button>
                                </div>
                            </li>`;
    });
}

function deleteTask(taskId, arrayTaskId) {
    let task = document.getElementById(taskId);
    //{id: 1, value:"sdfsdfsdf"}
    let taskArr = tasksArray.filter(
        (tValue) => parseInt(tValue.id) !== parseInt(arrayTaskId)
    );
    tasksArray = taskArr;
    console.log(taskArr, "taskArr");
    updateLocalStorage(tasksArray);
    task.remove();
}

function editTask(inputId, btnEditId, arrayTaskId) {
    let task = document.getElementById(inputId);
    let editBtn = document.getElementById(btnEditId);
    let editText = editBtn.innerHTML.trim();

    if (editText === "Edit") {
        task.removeAttribute("readonly");
        editBtn.innerHTML = "Save";
    } else {
        let newArray = tasksArray.map((taskVal) => {
            //{id: 1, value:"sdfsdfsdf"}
            if (parseInt(taskVal.id) === parseInt(arrayTaskId)) {
                return { ...taskVal, value: task.value };
            } else {
                return taskVal;
            }
        });

        tasksArray = newArray;
        updateLocalStorage(tasksArray);
        editBtn.innerHTML = "Edit";
        task.setAttribute("readonly", true);
    }
}

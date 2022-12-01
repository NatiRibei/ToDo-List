const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");
const tasksContainer = document.querySelector(".tasks-container");

const validadeInput = ( ) => inputElement.value.trim().length > 0;

const handleAddTask = () => {
    const inputIsValid = validadeInput();

    if (!inputIsValid) {
        return inputElement.classList.add("error");
    }


    const taskItemContainer = document.createElement("div");
    taskItemContainer.classList.add("task-item")

    const taskContent = document.createElement("p");
    taskContent.innerText = inputElement.value;

    //função que quando clicar na tarefa, ele vai estilizar a tarefa para marcar como completa
    taskContent.addEventListener("click", () => handleClick(taskContent));

    const deleteItem = document.createElement("i");
    deleteItem.classList.add("fa-solid");
    deleteItem.classList.add("fa-trash");
    
    //função que quando clicar no botão delete, ele vai excluir a tarefa
    deleteItem.addEventListener("click", () => handleDeleteClick(taskItemContainer, taskContent));

    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);

    tasksContainer.appendChild(taskItemContainer);

    inputElement.value = "";

};
// verifica em qual item filho foi clicado, se encontra aplica o estilo da classe completed
const handleClick = (taskContent) => {
    const tasks = tasksContainer.childNodes;

    for (const task of tasks) {
        const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent)
        
        if (currentTaskIsBeingClicked) {
            task.firstChild.classList.toggle("completed");
        }
    }
}

// verifica em qual item filho foi clicado, se encontra remove a tarefa
const handleDeleteClick = (taskItemContainer, taskContent) => {
    const tasks = tasksContainer.childNodes;

    for (const task of tasks) {
        const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent)
        
        if (currentTaskIsBeingClicked) {
            taskItemContainer.remove();
        }
    }
}



const handleInputChange = () => {
    const inputIsValid = validadeInput ();

    if (inputIsValid){
        return inputElement.classList.remove("error");
    }
};

addTaskButton.addEventListener("click", () => handleAddTask());
 
inputElement.addEventListener("change", () => handleInputChange());
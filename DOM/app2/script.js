let todos = []
let counter = 1;

function addTodo() {
    const todoText = counter + "." + " " + document.querySelector("input").value;
    todos.push({
        title: todoText,
        id: counter
    });
    render();
    
    counter += 1;
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id); // remove the todo with the given id
    render();
    counter -= 1;
}

function createTodoComponent(todo) {
    // Create elements for each todo item
    const divEl = document.createElement("div");
    const spanEl = document.createElement("span");
    const buttonEl = document.createElement("button");

    // Set up the span element
    spanEl.innerHTML = todo.title;

    // Set up the button element
    buttonEl.setAttribute("onClick", `deleteTodo(${todo.id})`);
    buttonEl.innerHTML = "Delete";

    // Append span and button to the div
    divEl.appendChild(spanEl);
    divEl.appendChild(buttonEl);
    return divEl;
}

function render() {
    const todoListEl = document.getElementById("todo-list");
    todoListEl.innerHTML = "";  // Clear previous list

    todos.forEach(todo => {
        let divEl = createTodoComponent(todo); // take this formed todo componend div from the function

        // append this component to the main todo list container
        todoListEl.appendChild(divEl);
    });
    console.log(todos);
}


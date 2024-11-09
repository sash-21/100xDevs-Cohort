let counter = 1;

function addTodo() {
    // extract the text from the input box
    const inputEl = document.querySelector("input");
    const todoText = counter + "." + " " + inputEl.value;

    // creating new elements to be appended to this newly created div
    const spanEL = document.createElement("span");
    const buttonEl = document.createElement("button");
    spanEL.innerHTML = todoText;
    buttonEl.innerHTML = "Delete";
    buttonEl.setAttribute("onClick", `deleteTodo(${counter})`);

    // forming a new element and setting an attribute to it
    const newEl = document.createElement("div");
    newEl.setAttribute("id", counter);

    // populating this new div formed
    newEl.appendChild(spanEL);
    newEl.appendChild(buttonEl);

    // adding the new element to the webpage
    const parent = document.querySelector("body");
    parent.appendChild(newEl);

    counter += 1; // increasing counter since a todo is added
}

function deleteTodo(index) {
    let elementToDelete = document.getElementById(index); // get element to delete
    let parent = elementToDelete.parentNode; // take its parent
    parent.removeChild(elementToDelete); // delete the element to be deleted
    
    counter -= 1; // decreasing counter since a todo is deleted
}
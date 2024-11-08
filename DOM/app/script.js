let counter = 1;

function addTodo() {
    // extract the text from the input box
    const inputEl = document.querySelector("input");
    const todoText = counter + "." + " " + inputEl.value;

    // forming a new element and setting an attribute to it
    const newEl = document.createElement("div");
    newEl.setAttribute("id", counter);

    // populating this new element
    newEl.innerHTML = "<div>" + todoText + "</div><button onClick='deleteTodo("+ counter +")'>Delete Todo</button>"

    // adding the new element to the webpage
    const parent = document.querySelector("body");
    parent.appendChild(newEl);

    counter += 1;
}

function deleteTodo(index) {
    let elementToDelete = document.getElementById(index); // get element to delete
    let parent = elementToDelete.parentNode; // take its parent
    parent.removeChild(elementToDelete); // delete the element to be deleted
}
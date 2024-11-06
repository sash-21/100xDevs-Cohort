let counter = 1;
function addTodo() {
    // extract the element and its value
    const inputEl = document.querySelector("input");
    const todoText = counter + "." + " " + inputEl.value; // formatted todoText
    

    // create a new div element
    const divEl = document.createElement("div");
    divEl.setAttribute("id", counter);
    // fill the new element with the todoText
    divEl.innerHTML = "<div>" + todoText + "</div><button onClick='deleteTodo(" + counter + ")'>Delete Todo</button>"; 
    const parent = document.querySelector("body"); // selecting the parent
    parent.appendChild(divEl); // added the div to the document

    counter += 1;
}

function deleteTodo(index) {
    var elementToDelete = document.getElementById(index); // select the component to be deleted
    var parent = elementToDelete.parentNode; // take out its parent
    parent.removeChild(elementToDelete); // delete the component
}
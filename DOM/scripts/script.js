function deleteTodo(index) {
    var element = document.querySelector("#todo-" + index); // found the element to be deleted (component)
    var parent = element.parentNode; // extracted its parent node
    parent.removeChild(element); // implemented the removeChild function over the parent node to remove the element
}
# DOM

1. DOM (Document Object Model) is the representation of the structure of a web page in the form of tree of objects. For e.g The <html> tag is parent to <body>, <body> is parent to <div> and so on. So this is a tree, heirarchical representation called DOM.

2. The DOM structures the HTML Document (Web Page) in a tree of documents, allowing the scripts (JS files) to manipulate the content on the page dynamically.

3. In a `Static HTML` as the name suggests, the HTML doesn't change. The contents visible on the web page remain as they are and there's no change in them. (Refer the `static.html` to understand)

4. If I want to explain the above point with an example, then consider a simple HTML code for making TODO lists. Then through it you can see the todos that are directly added in the HTML script, but when you enter a new todo in the text box and click the add todo button, nothing happens. (Again refer `static.html`)

5. Similarly, on the other hand in a `Dynamic HTML`, the initial HTML content we see is not the final and it gets updated based on the user activity. Suppose clicking a button might add a TODO, scrolling down a website and content gets automatically added and the end of the page etc.

6. So basically four functions can happen to make a web page dynamic, to read the content, to delete, to add, to update the content. For e.g Adding a new todo, deleting a existing todo, updating an existing todo or reading the new data given to make some processing over it.

7. The `document` object in the HTML is the root object, and refers to the whole HTML webpage. Basically it refers the `<html>` tag which is the root of the DOM heirarchy.

8. There are some predefined functions performed over the `document` object to make the HTML webpage dynamic. These functions basically do fetching, adding, deleting and updating the elements present in the webpage. Some of the prominent and useful functions are:

   - `querySelector()`:

     - This function basically fetches components on the HTML webpage.
     - So suppose in the function parenthesis if we put `"h1"` then the function will fetch out the first `<h1>` tag component present in the webpage.
     - This also can be used through the `id` or the `class` of the tag.
     - So if you want to fetch a component having id as `header` then we can define the component in this function as:
       ```javascript
       const h1 = document.querySelector("#header");
       ```
     - For class instead of `#` we should use `.` operator, and this function will fetch out the first component of the particular specified class.

   - `querySelectorAll()`:

     - This function is basically the same as the previous one just the difference is that instead of fetching the first single element it fetches out all the components of the specified tag, id or class.
     - One more caveat for this function is that since this function fetches a list of components of all the specified tag, id or class, we can implement indexing over it. (0 based indexing)
     - So suppose I want to access the 3rd element (2nd index) present in the list then I will do something like this:
       ```javascript
       const thirdComponent = document.querySelector("h1")[2].innerHTML;
       console.log(thirdComponent);
       ```

   - `innerHTML`:

     - This is not a function but just an attribute of these functions. This attribute just extracts the data inside of the specified component.

   - `removeChild()`:
     - This function is used to delete a specific child node of the curent node.
     - So suppose there are two `<div>` child nodes inside a parent `<div>` node then the element with specified ID would be deleted.
     - So this can be shown with an example as follows:
       ```html
       <body>
         <div id="todo-1">
           <h4>1. Todo 1</h4>
           <button onclick="deleteTodo()">Delete</button>
         </div>
         <div id="todo-2">
           <h4>2. Todo 2</h4>
           <button onclick="deleteTodo()">Delete</button>
         </div>
         <script>
           function deleteTodo(index) {
             var elementToDelete = document.querySelector("#todo-" + index); // select the component to be deleted
             var parent = elementToDelete.parentNode; // take out its parent
             parent.deleteChild(elementToDelete); // delete the component through this parent
           }
         </script>
       </body>
       ```

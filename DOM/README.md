# DOM

1. DOM (Document Object Model) is the representation of the structure of a web page in the form of tree of objects. For e.g The <html> tag is parent to <body>, <body> is parent to <div> and so on. So this is a tree, heirarchical representation called DOM.

2. The DOM structures the HTML Document (Web Page) in a tree of documents, allowing the scripts (JS files) to manipulate the content on the page dynamically.

3. In a `Static HTML` as the name suggests, the HTML doesn't change. The contents visible on the web page remain as they are and there's no change in them. (Refer the `static.html` to understand)

4. If I want to explain the above point with an example, then consider a simple HTML code for making TODO lists. Then through it you can see the todos that are directly added in the HTML script, but when you enter a new todo in the text box and click the add todo button, nothing happens. (Again refer `static.html`)

5. Similarly, on the other hand in a `Dynamic HTML`, the initial HTML content we see is not the final and it gets updated based on the user activity. Suppose clicking a button might add a TODO, scrolling down a website and content gets automatically added and the end of the page etc.

6. So basically four functions can happen to make a web page dynamic, to read the content, to delete, to add, to update the content. For e.g Adding a new todo, deleting a existing todo, updating an existing todo or reading the new data given to make some processing over it.

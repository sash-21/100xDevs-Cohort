## Single Page Applications (SPAs):

1. Single Page Applications (SPAs) are web applications that load single HTML page and dynamically update the page as the user interacts with the page.

2. So in easier words the top level HTML on the page remains the same but when we change the tabs (user interactions) the contents on the page changes.

3. Take example of _LinkedIN_, here the top bar is always present just as we switch tabs the contents on the page changes, this means there is no new page and a single page is utilized for all the tabs.

4. Also while we switch tabs in a SPA there is not a load that happens, while in MPAs (Multi Page Apps) each time a tab is switched a fresh load happens before loading the new page.

5. This technique of using SPAs allows for a smoother user experience compared to traditional MPAs where each page interaction requires a full page reload.

## Routing:

1. To implement such SPAs or in general terms to implement routing to switch from one tab to another we use the _React Router_ library.

2. Install the `react-router-dom` npm package:

```bash
npm i react-router-dom
```

3. Just to navigate from one page to another we use the `React Router` package. The package provides various kinds of routers, the mostly used one will be the `<BrowserRouter />`.

4. We can implement routing in React pages through the following way:

```javascript
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/jee/class-11-program" element={<Class11Program />} />
            <Route path="/jee/class-12-program" element={<Class12Program />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
```

5. We define the _route_ in the `path` attribute, while the `element` attribute contains the Component to be rendered on that particular path.

6. The layout component sets up a basic layout that will be the same for every page just the middle content will keep on changing.

```javascript
function Layout() {
  return (
    <div>
      <Link to={"/"}>Allen</Link> |
      <Link to={"/jee/class-11-program"}>Class 11</Link> |
      <Link to={"/jee/class-12-program"}>Class 12</Link>
      <Outlet />
      About Us | Contact | Footer
    </div>
  );
}
```

7. In the above code the _header_ and _footer_ are defined, while the `<Outlet />` contains the content for the a particular page the user is currently on.

### Additional Hooks:

1. `useRef`:

   - The `useRef` hook is used to access an element in the DOM with which we want to do some altercation.
   - Just like we select an element using the JS DOM through `document.getElementByID("element-id")` the same thing we can do using the `useRef()` hook without explicitely writing raw DOM code in the React code.
   - So suppose we want to focus a text box on clicking a button (consider empty field usecase), then using the raw DOM we can do is:

   ```javascript
   function App() {
     function insertFocus() {
       document.getElementById("user").focus;
     }

     return (
       <div>
         Sign In <br />
         <input id="user" type="text" placeholder="Username" />
         <input id="pass" type="text" placeholder="Password" />
         <button onClick={insertFocus}>Submit</button>
       </div>
     );
   }
   ```

   - Instead using the `useRef()` hook this explicitely writing of the DOM code can be avoided and also code can be made more easier to read:

   ```javascript
   function App() {
     const inputRef = useRef(null ); // initialize the ref variable using the useRef hook

     function insertFocus() {
       inputRef.current.focus();
     }

     return (
       <div>
         Sign In <br />
         <input ref={inputRef} id="user" type="text" placeholder="Username" /> <!-- Add field named ref with the ref variable -->
         <input id="pass" type="text" placeholder="Password" />
         <button onClick={insertFocus}>Submit</button>
       </div>
     );
   }
   ```

   - The another usecase of the `useRef()` hook is that we can refer a value (integer, string, array etc) too just like we referenced a DOM element above, and hence using this we can alter the value too.
   - Although we can do this using the `useState()` hook but the benefit of `useRef()` is it can update some values inside a component **without Re-rendering the component** while using the `useState()` the whole component re-renders when the state values are udpated.
   - So in the use cases where _re-rendering_ the DOM is not required we can use the `useRef()` hook to update the values inside the component.

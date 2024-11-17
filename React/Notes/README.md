# React.js:

1. The need for React was because it was getting difficult to manage complex frontends, for larger wesites like Facebook, which are dynamic in nature.

2. A static website is the one whose content doesn's change and always remains the same, we can see the same content over it whenever we open the website. On the other hand a dynamic website is the one, where the content keeps on updating and everytime we load up the website we can see some new fresh content.

3. To manage such dynamic websites there was a need for a frontend framework like React. Also frameworks like React are not needed for developing frontends for static websites.

4. React is just an easier way to write normal HTML / CSS / JS. Under the hood whenever React code is compiled, it is converted to normal HTML / CSS / JS.

5. To understand React on high level, or the basics in general, it is divided into two important jargons: `State` and `Components`. So the frontend framework developers realized that all the websites can be effectively divided into two parts State and Components making the developer experience quite easy.

- **_State_**:

  - Its the Javascript object that represents the current state of the application. It represents the dynamic things present on the application (things that change).
  - For e.g The number of notifications in the notification bar of LinkedIN may change automatically with the time. Or we can take the example of the `dynamicButton.html` file present in the scripts folder, where the counter of the button changes with every click.
  - So for a simple application like the counter button the state might look something like this:

  ```Javascript
  {
      count: 1
  }
  ```

  - Similarly for a LinkedIn Topbar the state would something look like this:

  ```Javascript
  {
      topbar: {
          home: 0,
          myNetwork: 99+,
          jobs: 0,
          messaging: 2,
          notifications: 10,
      }
  }
  ```

  - So basically the State in the frontend of an application is the dynamic data present and visible on the website that might change from time to time. It can always be merely a Javascript object or a JSON object.

- **_Component_**:

  - How a DOM element should render given a state object is called as the Component. A component is a reusable, dynamic HTML code snippet that changes given a state.
  - For e.g In the dynamic button application the button itself is the component, and the counter number inside it is the state. So for every click the component remains the same (button remained the same) and the state changes (counter number in the button kept on changing).
  - Similary for a LinkedIN topbar the buttons present on it (notifications, home, messaging etc), the search bar present on it (to search people etc) and the topbar itself are some components that we can visually see on the web application.

6. So in simple words, we have to define all the components that will be present on our application for once, and then keep on updating the state so the content keeps on changing dynamically and this will create a _dynamic React website._

7. While writing the react code we just have to take care of defining the global state for the web page, defining all the functions that form the components to be shown on the page, and the functions that get triggered when an event occurs (function to update the counter when button clicked).

8. Remaining tasks are handled by React itself and we need not to define anything extra. So when a function is triggered and the state is changed, React automatically takes the new state and forms a fresh component out of it to show on the web page.

9. Basically the re-rendering part is taken care of by React and this is how such frontend frameworks work under the hood. Can look at the `dynamicButton.html` file to understand how the React code works under the hood.

10. The React code is written in files with extension `.jsx`. So this code doesn't exactly return any `html` rather it returns `xml` and that's why the files are written with the extension `.jsx` which is knows as Javascript XML. So a component in this code returns XML and not HTML.

### Some other pointers:

1. Any function in React, that starts with "use" keyword are called nothing but _Hooks_. So the `useState` function that is used for defining the state variable in React is a hook.

2. For the code snippet where we define the state in React. Code:

```javascript
const [count, setCount] = useState(0);
```

So here the `useState()` function returns two values, suppose it will be `[1, 2]`, then the count will be the first value while the setCount will be the second value.

3. So when we want to update the state we update it by calling the `setCount` and updating the `count` in it.

```javascript
setCount(count + 1);
```

4. `useState` is a hook that expects two inputs, `[variable, sets]`. a.) **variable**: To store the data. b.) **sets**: To track the data i.e the previous data, current data etc.

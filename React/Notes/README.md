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

11. **Conditional Rendering:** Condition rendering simply means to render a component sometimes and sometimes not based on a condition. So suppose I want to make a component go invisible and again come visible every 5 seconds, then I can use something like _conditional rendering_. To give an example code for this:

```javascript
function App() {
  let [clockVisible, setClockVisible] = useState(true);

  useEffect(function () {
    setInterval(function () {
      setClockVisible((c) => !c);
    }, 5000);
  }, []);

  return <div>{clockVisible ? <Clock></Clock> : null}</div>;
}
// Assume there is a Clock component down here
```

12. Now while applying _conditional rendering_ or basically mounting or unmounting a component in react, there can lie some performance issues. If we take an example of the Clock applicaion itself. Then when a clock component unmounts the component disappears from the DOM, but in the background, the clock still keeps on running since we never stopped the clock while unmounting the clock component. To resolve this we have a concept of _cleanup_, so after every unmount that happens we clear the running of the clock and when the component mounts the new clock starts.

13. So in the `useEffect` hook, whenever the context changes the cleanup logic (the function that is returned from `useEffect`) runs first, and then the logic inside the `useEffect` for the new context runs.

```javascript
function Clock() {
  let [count, setCount] = useState(0);

  useEffect(function () {
    let clock = setInterval(function () {
      setCount((count) => count + 1);
    }, 1000);

    // cleaning up the clock working
    return function () {
      clearInterval(clock);
    };
  }, []);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
```

13. So the _cleanup_ logic if we take it with the example of the LinkedIn top bar, so then whenever we click the _Home_ button on the top bar, the frontend creates some connections with the backend (calling some APIs, websockets if needed etc). Now when we switch from the _Home_ tab to _Notification_ tab, we need to close all the connections with the backend else it will creat unnecessary overload over the server, this is where the cleanup logic comes to the rescue.

14. The implementation of side effects should be done by using `useEffect()` hook as it will only run the side effect implementing logic once when the component which is dealing with the side effect is mounted on the DOM. Otherwise if we implement the side effects without the `useEffect()` hooks then it leads to execution of the side effect logic every time the component is re-rendered.

15. The `useEffect()` hook let's us perform side effects in functional components in a safe, predictable way. Also if we want to use any state variable inside the `useEffect()` hook then we have to define the variable name inside the `dependency array`. So basically whenever the state variable is to change and the component is to rerender then define the state variable in the `dependency array`.

16. Most of the time while using the `useEffect()` hook we're going to use it this way (Empty Dependency Array):

```javascript
const [count, setCount] = useState(0);

function increaseCount() {
  setCount((countVal) => countVal + 1);
}

useEffect(function () {
  setInterval(increaseCount, 1000);
}, []);
```

17. But sometimes we have to track the state variable hence we could use this too (Using the Dependency Array):

```javascript
useEffect(
  function () {
    setInterval(increaseCount, 1000);
  },
  [count]
);
```

## Hooks in React.js:

- `useState()`:

  - The `useState()` hook in React let's us add state to our react component.
  - This can be defined as:

  ```javascript
  const [count, setCount] = useState(0);
  ```

  - The `useState()` hook keeps a track over the state variable of the component. So whenever someone calls the `setCount()` function to increase the **count** (state of component), react automatically updates the state by rerendering the DOM and we don't have to do anything manually.
  - Now for suppose, we want to create a clock, or a stopwatch then we'll use the `setInterval()` function inside the component function to update the **count** (state) every one second. But the problem is everytime the state is updated, the component function is called too. So as the clock goes to a certain limit there alot of flashing going on this is because there are several calls being made for the component concurrently by react.
  - So what we want is that whenever the clock component is _mounted_ (refer the extra points), only then for once we call the `setInterval` present in the function and not during every _re-render_. To remediate this `useEffect` hook comes into the picture.

- `useEffect()`:
  - The `useEffect()` hook helps us to apply side effects to our DOM.
  - Side effects are operations that interact with the outside world or have effects beyond component's rendering. For e.g fetching data from an API, modifying DOM manually, subscribing the events (websockets connections, timers, browser events).
  - These are called side effects because they don't just compute output based on input, they affect things outside the component itself.
  - We implemented `useEffect()` to trigger only for once when the component was mounted in the DOM.
  - The `useEffect()` hook takes in two arguments, a callback function and a dependency array.
  - So we know now that the logic inside the `useEffect` hook runs during a component is mounted on the DOM, and the function returned through the `useEffect` runs its logic when the component is unmounted from the DOM.
  - During this whole process the logic of `useEffect` was ignored while the DOM was rerendering time to time. This is where the **depencency array** comes into the picture.
  - The when we define something in the dependency array for the `useEffect` hook, the logic of the `useEffect` also starts running during the rerendering of the component. Initially it just used to run once during the mounting of the component, but now it runs during each and every re render of the component.
  - Also the cleanup takes place for the state variable defined in the dependency array during every render. So the original state is cleaned up and the new state is assumed as the original one.

### Props:

1. Props are just the values (variables & functions) from the `App` component that can be directly used in the other component functions.

2. While creating a **wrapper component**(suppose a card which has a white background and some minor styling) check the cards present on the _LinkedIN_ page every card has the same styling just the inner content changes, these are called the wrapper components which can be reused in various places.

3. We can send props in such components functions named as _children_, so whenever these components are used and whatever content is present in these components directly get rendered without explicitely naming a children field.

```javascript
function App() {
  // all the contents in the Card are sent as children props to the function
  return (
    <div style={{ display: "flex" }}>
      <Card>hi there</Card>
      <Card>
        <div>
          What do you want to post? <br />
          <input type={"input"} />
        </div>
      </Card>
    </div>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 10,
        padding: 10,
        margin: 10,
        color: "blac",
      }}
    >
      {children}
    </div>
  );
}
```

### Some other pointers:

- Any function in React, that starts with "use" keyword are called nothing but _Hooks_. So the `useState` function that is used for defining the state variable in React is a hook.

- For the code snippet where we define the state in React. Code:

```javascript
const [count, setCount] = useState(0);
```

So here the `useState()` function returns two values, suppose it will be `[1, 2]`, then the count will be the first value while the setCount will be the second value.

- So when we want to update the state we update it by calling the `setCount` and updating the `count` in it.

```javascript
setCount(count + 1);
```

- `useState` is a hook that expects two inputs, `[variable, sets]`. a.) **variable**: To store the data. b.) **sets**: To track the data i.e the previous data, current data etc.

- A react component is nothing but a function that returns us some `HTML`. All the component functions have their name with the first letter capital. So if we're writing a button component in react then it'd look something like this:

```javascript
function Button() {
  return (
    <div>
      <button>Click Here</button>
    </div>
  );
}
```

- There are certain life cycle events for components in React such as _mounting_, _re-rendering_, _unmounting_.

  1. _mounting_: When a component function is called for the first time and it appears on the DOM (webpage), this event is called as mounting of that particular component. Basically when the component appears on the DOM.
  2. _re-rendering_: When the state of a component is changed and the DOM is modified with the updated state component, this event is called as re-rendering of the component.
  3. _unmounting_: When a particular component is removed / disappers from the DOM due to an action, this event is called as unmounting of that particular component.

- **Error Boundary**: Suppose we're handling the data in a component through a backend API and due to some reasons the backend is throwing some errors for which we throw error for this component on the frontend too. But even if error is thrown through this one component it will affect the whole page and the page will crash. For this we create a separate Error Handling class, which if detected an error falls back to another UI component. The error prone component should be wrapped in this class while being returned from the App component. The code for this class is usually used as black box and copy pasted from here to there.

```javascript
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const BuggyComponent = () => {
  throw new Error("I crashed!");
};

const App = () => {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
};
```

- **Fragments**: In React, a component can return a single parent element, but it can contain multiple children within that single parent.

  1. Wrong Code:

  ```javascript
  const MyComponent = () => {
      return (
          <h1>Hello</h1>
          <p>World</p> // This line will cause an error
      );
  };
  ```

  2. Right Code:

  ```javascript
  const MyComponent = () => {
    return (
      <>
        <h1>Hello</h1>
        <p>World</p>
      </>
    );
  };
  ```

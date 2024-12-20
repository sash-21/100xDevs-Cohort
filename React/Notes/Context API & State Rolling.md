## State Management Concepts:

### Rolling Up the State:

1. This method refers to declaring all the state variable in a top level component and this component will pass these state variables as props to the child component.

```javascript
function App() {
  return (
    <div>
      <LightBulb />
    </div>
  );
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState setBulbOn={setBulbOn} />
    </div>
  );
}
```

2. In the above code the `LightBulb()` component sends the state to both the `BulbState` & `ToggleBulbState` component as props. Since if we would have defined the state variables in either of the component `BulbState` or `ToggleBulbState` then the other component wouldn't have been able to access the state variable.

3. This declaration of the state variable in the top level component such as the `LightBulb` component is called as _Rolling up the state_. This is quite an ugly method of defining the states and managing them in the components, if we were to handle more bigger & complex projects.

4. In remediation to this there are several state management libraries developed to manage the states in React projects quite effectively, some of the prominent ones are `Redux`, `Recoil`, `Zustand` etc.

### Prop Drilling:

1. _Props_ are the variables that we send down the component chain as parameters.

```javascript
function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true);

  // bulbOn is the prop sent to the BulbState component
  // setBulbOn is the prop sent to the ToggleBulbState component
  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState setBulbOn={setBulbOn} />
    </div>
  );
}
```

2. Now _Prop Drilling_ occurs when you need to pass the data (in form of props) several layers down the component tree. So if the `App` component is the higher level component in the component tree and we have defined the data in here. We can't directly send the data from app to the `BulbState` or `ToggleBulbState` components. The data will be sent to `LightBulb` first and then its child. This process of passing the data from one component to other down the chain is called _prop drilling_.

3. Prop Drilling creates some problems which are:

   - **Complexity**: This method leads to passing the prop several layers down the component chain, which leads to passing the props from many intermediate components which don't even need this props just to get them to the component which actually needs them. This leads to unnecessary complexity in the codebase.

   - **Maintenance**: Prop drilling can make the codebase harder to maintain as changes in the props structure requires updates in the multiple components.

### Context API:

1. The **Context API** is a powerful feature in React the enables you to manage the state across your application more effectively, especially when dealing with deeply nested components _(prop drilling)_.

2. The Context API allows us to share data (state, functions) between components without having to pass props down manually at every level.

3. Some common _Jargons_ to keep in mind while creating context APIs:

   - **Context**: This is created using `react.createContext()`. It serves as a container for the data you want to share. Here we will store the data that we want to propogate.

   - **Provider**: This component wraps the part of your application and provides the context value to all its descendants. Any component that is a child of this Provider can access the context. This is done as `<contextName.Provider> put the components that needs the context here </contextName.Provider>`

   - **Consumer**: This component subscribes to the context changes. It allows to access the context value using the `useContext` hook.

4. The problem with context API is that it rerenders the components that aren't even using the state that is being updated, this creates performance issues. To resolve this we use state management libraries like `Recoil`, `Redux` and `Zustand`.

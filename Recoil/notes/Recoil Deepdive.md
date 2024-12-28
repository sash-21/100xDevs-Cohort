# Recoil

1. Recoil is a state management library in React that provides a way to manage global state with fine grained control.

2. Recoil manages a global state due to which it only re-renders components whose state have been changed. So suppose in the **LinkedIN** topbar if the notification tab has one more notification then only that button re-renders.

3. The performance of a React app is measured by the number of re-renders. Each re-rerender is expensive and we should aim to minimize it, where the libraries like Recoil come to the rescue.

### Atoms

1. Atoms in Recoil are units of state that can be read from and written to from any component. When an atom's state changes all the components that are subscribed to that atom will re-render.

2. To use Recoil we have to install it separately, using follow command:

```bash
npm install recoil
```

3. To implement recoil in out application we have to follow the following steps:

   - Initially wrap a component on which we want to apply recoil in `RecoilRoot`, like this `<RecoilRoot></RecoilRoot>`
   - The next step is to define an _Atom_. Following is the syntax:

   ```javascript
   const counterAtom = atom({
     key: "counter",
     default: 0,
   });
   ```

   - So the atom should have two attributes, the default value of the atom and the other is the key (unique identifier) of the atom. No two atoms should have the same key value.
   - To use the value of this atom we can use the `useRecoilValue()` hook, while to `setValue`, basically altercate the value of atom we use the `useSetRecoilState()` hook.
   - To get both the value and the setter function same as the `useState()` hook we can use the `useRecoilState()` hook.
   - So first things first, we can define atoms in a separate folder named atoms, where we can create a separate file for every atom and we can import the atoms directly in our `.jsx` files.
   - This means no need to define states now in the component itself. Also the coding implementation for the above given Recoil specific hooks is as follows:

   ```javascript
   function CurrentCount() {
     const count = useRecoilValue(counterAtom);
     return <div>{count}</div>;
   }

   function Increase() {
     const setCount = useSetRecoilState(counterAtom);

     return (
       <div>
         <button onClick={() => setCount(() => (c = c + 1))}>Increase</button>
       </div>
     );
   }
   ```

### Memo:

1. So in _React_ components have a default behaviour, that if a component has children components and if the parent re-renders which doesn't effect the children, still the children are bound to re-render.

2. To resolve this issue and to just re-render the component whose state has changed we should wrap the components inside a _Memo_. This is done in the following way:

```javascript
const CurrentCount = memo(function () {
  return <div>1</div>;
});

const Increase = memo(function () {
  return (
    <div>
      <button>Increase</button>
    </div>
  );
});

const Decrease = memo(function () {
  return (
    <div>
      <button>Decrease</button>
    </div>
  );
});
```

3. So after we wrap a component in the _Memo_ then only if the prop/state passed down to its child component is changed, then the child will re-render else the parent re-rendering won't affect the child.

### Selectors (Recoil)

1. Selector in Recoil represents a piece of **derived state**. Here we can tell that a derived state is a part of the main state present in the _Atom_.

2. If a component is subscribed to the _Atom_ and a value present in the atom which is not being used in the Component changes event then the component re-renders, to resolve this we use Selectors.

3. So a selector (derived state) can be used to store a part of the main state and only that selector is passed to the components that require its value.

4. Consider selector as a _Pure Function_ (a function that outputs the same value that it got as an input). So the atom gives the selector the value that the component needs and the selector outputs the same value to the components.

5. Consider there is an atom that has an array of **UserIds**:

```json
{
  "UserIds": [1, 2, 3, 4, 5]
}
```

6. The selectors for this can be as _OddUserIds_ and _EvenUserIds_. So these two can be functions that spit out these values, these are derived states of the original one and hence the values can only be accessed and not updated.

```json
{
  "userIds": [1,3,5]
}

{
  "userIds": [2,4]
}
```

7. We can create a selector from an atom in the following way:

```javascript
// Atom
export const counterAtom = atom({
  key: "counter",
  default: 0,
});

// Selector
export const evenSelector = selector({
  key: "isEven",
  get: function ({ get }) {
    const currentCount = get(counterAtom);
    return currentCount % 2 === 0; // true if even, false if odd
  },
});
```

8. Using or subscribing a _selector_ in an component is same at how the components subscribe to the _Atoms_, by using the `useRecoilValue()` hook.

```javascript
function IsEven() {
  const isEven = useRecoilValue(evenSelector);

  return <div>{isEven ? "Even" : "Odd"}</div>;
}
```

9. Now due to this the IsEven Component will only rerender when this derived state (selector) changes, avoiding the unwanted re-reneders.

### Asynchronous Data Queries

1. In the App Bar for LinkedIn the values are not hard coded and for each user the values are dynamic, like every user would have a different number of Messages, Notifications, Jobs and My Network updates.

2. For this the frontend should hit a dynamic backend, fetch the requests from there and then display them on the screen. But this shoudn't be done while rendering the components on the screen rather this should be done when defining the _Atom_ which will contain all those values as state.

3. For such kind of dynamic Atoms, the _default_ attribute field should contain a selector, which will contain the _async_ function which will call the backend for fetching the data.

4. This method is called **Asynchronous Data Queries**. The coding implementation of it looks like this:

```javascript
export const notifications = atom({
  key: "appBarAtom",
  default: selector({
    key: "appBarAtomSelector",
    get: async () => {
      const response = await axios.get("<BACKEND API>");
      return response.data;
    },
  }),
});
```

### Atom Family

1. So if there is a use case where we have to create multiple atoms as some values are not going to ba constant and they will change for every component. Consider a _Todo Application_, here there are going to be multiple components of the Todos and each Todo will have different values, for this reason every todo should have a different Atom altogether.

2. For creating multiple atoms there's a concept of atom family in the Recoil where we create muitiple Atoms from a single place. Let's look at its code first:

```javascript
export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: (id) => {
    // writing the code to fetch todos based on the id
    return todo; // finally returning the todo for that specific id
  },
});
```

3. The **Atom Family** can be created using the `atomFamily` keyword as mentioned above, also it has a `key` attribute to uniquely identify the family, and the default value contains a function that does the processinng on the basis of which atoms are created.

4. To subscribe to this atom family and get the required atom based on it's ID, we use the same `useRecoilValue` hook and inside it pass the variable containing the atom family passing it's ID.

```typescript
const currentAtom = useRecoilValue(todosAtomFamily(id));
```

### Selector Family

1. Now as we know that atoms cannot have asynchronous backend calls in their `default` field and for this they implement `selectors` in their `default` field.

2. Similarly to make backend async calls through an `atomFamily` we have to use a `selectorFamily` in its `default` field. So this way we can fetch the data for a given ID from the backend through a async backend API call.

```javascript
export const todosAtomFamily = atom({
  key: "todosAtomFamily",
  default: selectorFamily({
    key: "todosAtomFamilySelector",
    get: async (id) => async () => {
      const response = await axios.get(`<BACKEND API>`);
      return res.data;
    },
  }),
});
```

3. The `get` field in the `selectorFamily` is a function that returns a function, since this a family there will be multiple atoms for multiple ids and each one of then will have a different function to create an atom out of it.

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

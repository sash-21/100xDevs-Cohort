## Custom Hooks:

1. We have learned about some predefined hooks in React such as `useState` (that let's us create our own state variable / data), `useEffect` (that let's us run some side effects when a dependency changes).

2. **Custom Hooks** as the name suggests, we can create our own custom hooks like the above mentioned ones. We can write our own custom hooks, and these are nothing but simple functions, there are some things to keep in mind while writing them:

   - These functions should start with the `use` keyword. So supppose we want to write some hook that fetches some values then the name of the hook should be `useFetch` and same goes for other tasks.
   - The another thing to keep in mind while writing these hooks is that, whenever we're defining these hooks, _these functions should contain or use another hooks inside them_.
   - So suppose we want to write a hook that gives a counter value and a function that updates a counter:

   ```javascript
   function useCounter() {
     const [count, setCount] = useState(0);

     function increaseCount() {
       setCount((c) => c + 1);
     }

     return {
       count: count,
       increaseCount: increaseCount,
     };
   }
   ```

3. Some of the most common custom hooks created in the react projects are listed down below:

4. `useFetch()`:

- The `useFetch` hook as the name suggests fetches data from a given url and returns a `json` value out of it.
- Since it uses in-built hooks in it too, this makes its case of being a custom hook more stronger.
- Coding implementation of it can be seen as:

```javascript
export function useFetch(url, retryTime) {
  const [loading, setLoading] = useState(true);
  const [finalData, setFinalData] = useState({});

  async function getDetails() {
    setLoading(true);
    const response = await fetch(url);
    const responseJson = await response.json();
    setFinalData(responseJson);
    setLoading(false);
  }

  useEffect(() => {
    getDetails();
  }, [url]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      getDetails();
    }, retryTime * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [retryTime, url]);

  return {
    finalData,
    loading,
  };
}
```

5. `usePrev()`:

- The `usePrev` hook as the name suggests is takes the current state variable value and returns the previous value of the _state variable_.
- The `usePrev` hook also uses `useRef` as the inbuilt hook inside it, making itself as a custom hook.
- Coding implementation of it can be seen as:

```javascript
export function usePrev(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
```

6. `useDebounce()`:

- **Debouncing** means, in usual case when we're typing in a search bar the server sends a request to backend each and every time we add new characters, but in the case where we start typing too fast the server stops the backend request till the 50 milliseconds of when we tako our hands off the keyboard.
- The `useDebounce` hook as the name suggests does implement _debouncing_ in our search bar component.
- So basically its implementation is something like, this hook will get called time and time after multiple times basically, and after every call (updates in the search bar), it starts a timer of either 30 ms or 50 ms (dependinng on the system developers). Whenever a new call comes the old clock is stopped and new clock of 30 ms starts again, this process keeps on happening until the last call of this hook and finally it calls the main function that fetches the data from the backend.
- Coding implementation of it can be seen as:

```javascript
import { useRef, useState } from "react";

// this hook returns a function which when called will debounce the fetch operation to the backend
export function useDebounce1(fetchFunction) {
  const currentClock = useRef();

  const fn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(fetchFunction, 200);
  };

  return fn;
}

// this hook returns a debounce value which when updates is when the fecth opeeration to the backend is called
export function useDebounce2(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
}
```

7. We can explore the library [UseHooks](https://usehooks.com/) to get the direct implementation for these hooks to make life easier.

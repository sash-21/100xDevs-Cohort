import { useRef, useState } from "react";

// this hook returns a function which when called will debounce the fetch operation to the backend
export function useDebounce1(fetchFunction) {
    const currentClock = useRef();  

    const fn = () => {
        clearTimeout(currentClock.current);
        currentClock.current = setTimeout(fetchFunction, 200);
    }

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
        }
    }, [value, delay]);


    return debounceValue;
 }
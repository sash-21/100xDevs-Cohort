import { useRef } from "react";

export function useDebounce(fetchFunction) {
    const currentClock = useRef();  

    const fn = () => {
        clearTimeout(currentClock.current);
        currentClock.current = setTimeout(fetchFunction, 200);
    }

    return fn;
}
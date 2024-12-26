import { atom, selector } from "recoil";

// Atom
export const counterAtom = atom({
    key: 'counter',
    default: 0
});

// Selector
export const evenSelector = selector({
    key: 'isEven',
    get: function ({ get }) {
        const currentCount = get(counterAtom);
        return currentCount % 2 === 0; // true if even, false if odd
    }
});
import { useState } from "react";

// Custom hook
function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(c => c + 1);
  }

  return {
    count: count,
    increaseCount: increaseCount
  };
}

function App() { 
  return <div>
    <Counter />
  </div>
}

function Counter() {
  const {count, increaseCount} = useCounter();

  return <div>
    <button onClick={increaseCount}>Value: {count}</button>
  </div>
}

export default App;
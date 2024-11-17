import { useState, useEffect } from "react"

function App() {
  let [counterVisible, setCounterVisible] = useState(true);

   useEffect(function () {
    setInterval(function () {
      setCounterVisible(c => !c); // set counterVisible to false every 5 seconds
    }, 5000);
   }, []);

  return <div>
    <b>Hi There!</b>
    <div style={{visibility: counterVisible ? "visible" : "hidden"}}><Counter></Counter></div>
  </div>
}

// defined the component function
function Counter() {
  const [count, setCount] = useState(0); // defined the state

  useEffect(function () {
    let clock = setInterval(function () {
      // setCount(count => count + 1);
      setCount(function (count) { // alternative for the above line
        return count + 1;
      });
    }, 1000);

    return function () {
      clearInterval(clock);
    }
  }, []);

  // updating the state
  function increaseCount() {
    setCount(count + 1);
  }

  // returning a component with its state
  return <div>
    <h1 id="text">{count}</h1>
    <button onClick={increaseCount}>Increse Count</button>
  </div>
}

export default App

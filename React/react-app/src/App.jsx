import { useState, useEffect } from "react"

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increase() {
    setCount(count => count + 1);
  }

  function decrease() {
    setCount2(count2 => count2 - 1);
  }

  return <div>
    <Counter count={count} count2={count2}></Counter>
    <button onClick={increase}>Increase Counter</button>
    <button onClick={decrease}>Decrease Counter</button>
  </div>
} 

function Counter(props) {

  useEffect(function () {
    console.log("mount");

    return function () {
      console.log("unmount");
    }
  }, []);

  useEffect(function () {
    console.log("count has changed");
  }, [props.count, props.count2]);

  return <div>
    Counter! {props.count} <br />
    Counter2! {props.count2}
  </div>
}

export default App

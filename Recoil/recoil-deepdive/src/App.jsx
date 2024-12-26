import { memo, useEffect, useState } from 'react'
import './App.css'

function App() {
  return (
      <Counter />
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(c => c + 1); 
    }, 3000)
  });

  return <div>
    <CurrentCount />
    <Increase />
    <Decrease />
  </div> 
}

const CurrentCount = memo(function () {
  return <div>
    1
  </div>
});

const Increase = memo(function () {
  return <div>
    <button>Increase</button>
  </div>
});

const Decrease = memo(function () {
  return <div>
    <button>Decrease</button>
  </div>
}); 

export default App

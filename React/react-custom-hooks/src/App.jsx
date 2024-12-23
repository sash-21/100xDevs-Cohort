import { useState } from "react";
import { usePrev } from "./hooks/usePrev";

function App() {
  const [value, setValue] = useState(0);
  const prev = usePrev(value);

  function increment() {
    setValue(c => c + 1);
  }

  return <div>
    {value} 
    <br />
    <button onClick={increment}>Click Me!</button>
    <br />
    The previous value was: {prev}
  </div>
}

export default App;
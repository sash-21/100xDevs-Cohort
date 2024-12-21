import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [currentPost, setCurrentPost] = useState(1);
  const { finalData, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost, 10);

  return <div>
    <button onClick={() => setCurrentPost(1)}>1</button>
    <button onClick={() => setCurrentPost(2)}>2</button>
    <button onClick={() => setCurrentPost(3)}>3</button>
    <br />
    {loading ? "Loading..." : JSON.stringify(finalData)}
  </div> 
}

export default App;
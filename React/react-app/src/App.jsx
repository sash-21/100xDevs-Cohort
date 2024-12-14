import React from "react";

function App() {
  const todos = [
    {
      key: 1,
      title: "Go to Gym!",
      done: false
    },
    {
      key: 2,
      title: "Eat Food",
      done: true
    }
  ]

  const todoComponents = todos.map(todo => <Todo title={todo.title} done={todo.done} />)

  return (
    <div>
      {todoComponents}
    </div>
  )
}

function Todo({title, done}) {
  return <div>
    {title} - {done ? "Done" : "Not Done!"}
  </div>
}

export default App;
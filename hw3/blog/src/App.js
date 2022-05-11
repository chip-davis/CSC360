import React, { useState } from "react";
import UserBar from './UserBar'
import TodoList from "./TodoList"
import CreateTodo from "./CreateTodo"
function App() {

  const [user, setUser] = useState("")
  // const posts = [{ title: "A blog post 1", content: "Blog content 1", author: "Chip 1" }, {
  //   title: "A blog post 2", content: "Blog content 2", author: "Chip"
  // }, { title: "A blog post 3", content: "Blog content 3", author: "Chip" }]

  const [todos, setTodos] = useState([])

  return (
    <div>
      <UserBar user={user} setUser={setUser} />
      {user && <CreateTodo user={user} setTodos={setTodos} todos={todos} />}
      <TodoList todos={todos} />
    </div>
  );
}

export default App;

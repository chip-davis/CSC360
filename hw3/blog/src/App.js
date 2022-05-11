import React, { useState, useReducer } from "react";
import UserBar from './UserBar'
import TodoList from "./TodoList"
import CreateTodo from "./CreateTodo"
function App() {

  // const [user, setUser] = useState("")
  const [user, dispatchUser] = useReducer(userReducer, "");
  // const posts = [{ title: "A blog post 1", content: "Blog content 1", author: "Chip 1" }, {
  //   title: "A blog post 2", content: "Blog content 2", author: "Chip"
  // }, { title: "A blog post 3", content: "Blog content 3", author: "Chip" }]

  const [todos, setTodos] = useState([])

  function userReducer(state, action) {
    switch (action.type) {
      case "LOGIN":
      case "REGISTER":
        return action.username;
      case "LOGOUT":
        return "";
      default:
        return state;
    }
  }


  return (
    <div>
      <UserBar user={user} setUser={setUser} />
      {user && <CreateTodo user={user} setTodos={setTodos} todos={todos} />}
      <TodoList todos={todos} />
    </div>
  );
}

export default App;

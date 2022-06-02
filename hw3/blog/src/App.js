import React, { useState, useReducer } from "react";
import UserBar from './UserBar'
import TodoList from "./TodoList"
import CreateTodo from "./CreateTodo"
import appReducer from "./Reducers"
function App() {

  const [state, dispatch] = useReducer(appReducer, {user: '', todos: []})



  return (
    <div>
      <UserBar user={state.user} dispatch={dispatch} />
      {state.user && <CreateTodo user={state.user} todos={state.todos} dispatch={dispatch} />}
      <TodoList todos={state.todos} dispatch={dispatch} />
    </div>
  );
}

export default App;

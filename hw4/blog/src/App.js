import React, { useState, useReducer, useEffect } from "react";
import UserBar from './UserBar'
import TodoList from "./TodoList"
import CreateTodo from "./CreateTodo"
import appReducer from "./Reducers"
function App() {

  


  const [state, dispatch] = useReducer(appReducer, {user: '', todos: []})

  useEffect(() => {
    fetch('/api/todos')
      .then(result => result.json())
      .then(todos => dispatch({type: "FETCH_TODOS", todos}))
  }, [])
  

  return (
    <div>
      <UserBar user={state.user} dispatch={dispatch} />
      {state.user && <CreateTodo user={state.user} todos={state.todos} dispatch={dispatch} />}
      <TodoList todos={state.todos} dispatch={dispatch} />
    </div>
  );
}

export default App;

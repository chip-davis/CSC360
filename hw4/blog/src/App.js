import React, { useState, useReducer, useEffect, createContext} from "react";
import { useResource } from "react-request-hook";
import UserBar from './UserBar'
import TodoList from "./TodoList"
import CreateTodo from "./CreateTodo"
import appReducer from "./Reducers"
function App() {

  


  const [state, dispatch] = useReducer(appReducer, {user: '', todos: []})

  const [todos, getTodos] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }))

  useEffect(getTodos, [])

  useEffect(() => {
    if (todos && todos.data) {
      dispatch({type: 'FETCH_TODOS', todos: todos.data})
    }
  }, [todos])
 
  return (
    <div>
      <UserBar user={state.user} dispatch={dispatch} />
      {state.user && <CreateTodo user={state.user} todos={state.todos} dispatch={dispatch} />}
      <TodoList todos={state.todos} dispatch={dispatch} />
    </div>
  );
}

export default App;

import React, { useState } from "react";

export default function Todo({ title, content, author, dateCreated, dateCompleted, completed, id, updateTodo, deleteTodo}) {

  const [checked, updateChecked] = useState(false)

  const handleToggleEvent = (event) => {
    updateChecked(event.target.checked)

    updateTodo(id, {title, content, author, dateCreated, dateCompleted: Date.now(), completed: !completed, id})
  }
  return (
    <div>
      <h3>{title}</h3>

      <div>Created by: {author}</div>
      <div>Description: {content}</div>

      <div>Date created: {new Date(dateCreated).toUTCString()}</div>

      <div>Date completed: {completed ? new Date(dateCompleted).toUTCString() : "Not yet completed"}</div>
      <br />

      <div>Complete? <input type="checkbox" onClick={handleToggleEvent} value={checked} /> </div>

      <input type="button" onClick={() => deleteTodo(id)} value="Delete todo"/>
    </div>
  )
}

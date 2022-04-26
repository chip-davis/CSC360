import React, { useState } from "react";

export default function CreatePost({ user, setTodos, todos }) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  function handleTitle(evt) { setTitle(evt.target.value) }
  function handleContent(evt) { setContent(evt.target.value) }
  function handleCreate() {
    const newTodo = { title, content, author: user }
    setTodos([newTodo, ...todos])
  }


  return (
    <>
      <h2> Create a New Todo</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleCreate(e) }}>

        <div>
          Author: <b>{user}</b>
        </div>

        <div>
          <label htmlFor="create-title">Title:</label>
          <input type="text" name="create-title" id="create-title" value={title} onChange={handleTitle} required />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea value={content} onChange={handleContent} id="description" />
          <input type="submit" value="Create" />
        </div>
      </form>
    </>
  );
}

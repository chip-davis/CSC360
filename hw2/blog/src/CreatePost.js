import React, { useState } from "react";

export default function CreatePost({ user, setPosts, posts }) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  function handleTitle(evt) { setTitle(evt.target.value) }
  function handleContent(evt) { setContent(evt.target.value) }
  function handleCreate() {
    const newPost = { title, content, author: user }
    setPosts([newPost, ...posts])
  }


  return (
    <>
      <h2> Create a New Post</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleCreate(e) }}>

        <div>
          Author: <b>{user}</b>
        </div>

        <div>
          <label htmlFor="create-title">Title:</label>
          <input type="text" name="create-title" id="create-title" value={title} onChange={handleTitle} />
        </div>

        <textarea value={content} onChange={handleContent} />
        <input type="submit" value="Create" />
      </form>
    </>
  );
}

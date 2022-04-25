import React, { useState } from "react";
import UserBar from './UserBar'
import PostList from "./PostList"
import CreatePost from "./CreatePost"
function App() {

  const posts = [{ title: "A blog post 1", content: "Blog content 1", author: "Chip 1" }, {
    title: "A blog post 2", content: "Blog content 2", author: "Chip"
  }, { title: "A blog post 3", content: "Blog content 3", author: "Chip" }]


  return (
    <div>
      <UserBar />
      <PostList posts={posts} />
      <CreatePost user="Chip!" />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import UserBar from './UserBar'
import PostList from "./PostList"
import CreatePost from "./CreatePost"
function App() {

  const [user, setUser] = useState("")
  // const posts = [{ title: "A blog post 1", content: "Blog content 1", author: "Chip 1" }, {
  //   title: "A blog post 2", content: "Blog content 2", author: "Chip"
  // }, { title: "A blog post 3", content: "Blog content 3", author: "Chip" }]

  const [posts, setPosts] = useState([])

  return (
    <div>
      <UserBar user={user} setUser={setUser} />
      {user && <CreatePost user={user} setPosts={setPosts} posts={posts} />}
      <PostList posts={posts} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import "./style/app.css";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "description" },
    { id: 2, title: "JavaScript 2", body: "description" },
    { id: 3, title: "JavaScript 3", body: "description" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }


  return (
    <div className="App">

      <PostForm create={createPost} />
      <PostList posts={posts} title={"Посты про JS"} />
    </div>
  );
}

export default App;

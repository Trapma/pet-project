import React, { useState } from "react";
import PostList from "./components/PostList";
import "./style/app.css";
// import Counter from "./components/Counter";
// import Input from "./components/Input";
// import ClassCounter from "./components/oldComponents/classCounter";

function App() {
  const [posts, setPost] = useState([
    { id: 1, title: "JavaScript", body: "description" },
    { id: 2, title: "JavaScript 2", body: "description" },
    { id: 3, title: "JavaScript 3", body: "description" },
  ]);
  const [posts2, setPost2] = useState([
    { id: 1, title: "Python", body: "description" },
    { id: 2, title: "Python 2", body: "description" },
    { id: 3, title: "Python 3", body: "description" },
  ]);
  return (
    <div className="App">
      <PostList posts={posts} title={"Посты про JS"} />
      <PostList posts={posts2} title={"Посты про Python"} />
    </div>
  );
}

export default App;

import React, { useState, useMemo } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import "./style/app.css";
import { MySelect } from "./components/UI/select/MySelect";
import { MyInput } from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "ааа", body: "ббб" },
    { id: 2, title: "ггг 2", body: "ггг" },
    { id: 3, title: "ббб 3", body: "ааа" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" })

  const sortedPosts = useMemo(() => {
    console.log('ОТРАБОТАЛА ФУНКИЯ СОРТИРОВКИ')
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  //Получаем post из дочернего компонента
  const removePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };


  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Посты про JS"} />
    </div>
  );
}

export default App;

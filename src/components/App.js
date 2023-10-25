import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";


console.log(blogData);

function App() {
  
  return (
    <div className="App">
      <Header name="OverReacted" />
      <About/>
      <ArticleList posts={blogData.posts} date="January 1, 1970"/>
    </div>
  );
}

export default App;

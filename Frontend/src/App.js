import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddPost from "./components/AddPost";
import PostList from "./components/PostList";
import "./components/styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/add" element={<AddPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import "./postlist.css";  // Import the CSS for PostList

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div className="post-list">
      <h2>All Posts</h2>
      {posts.length > 0 ? posts.map((post) => <PostCard key={post._id} post={post} />) : <p>No posts available.</p>}
    </div>
  );
};

export default PostList;

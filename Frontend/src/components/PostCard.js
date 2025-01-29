import React from "react";
import "./postcard.css";  // Import the CSS for PostCard

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <img src={post.image} alt={post.title} />
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </div>
  );
};

export default PostCard;

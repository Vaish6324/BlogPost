import React, { useState } from "react";
import "./addpost.css";  // Import the CSS for AddPost

const AddPost = ({ onPostAdded }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, image, description };

    try {
      const response = await fetch("https://blogpostbackend-rose.vercel.app/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        alert("🎉 Post added successfully!");  // ✅ Show success alert
        onPostAdded(); // Refresh the post list
        setTitle("");
        setImage("");
        setDescription("");
      } else {
        alert("❌ Failed to add post. Please try again!");  // ✅ Show failure alert
      }
    } catch (error) {
      console.error("Error adding post:", error);
      alert("⚠️ An error occurred. Check the console for details.");
    }
  };

  return (
    <div className="add-post">
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;

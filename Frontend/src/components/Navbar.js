import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";  // Import the CSS for Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>BlogPost App</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add">Add Post</Link>
      </div>
    </nav>
  );
};

export default Navbar;

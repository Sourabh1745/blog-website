import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
return (
<nav className="navbar">
<div className="nav-container">
<Link to="/" className="brand">MERN Blog</Link>
<div>
<Link to="/new" className="btn">New Post</Link>
</div>
</div>
</nav>
);
}
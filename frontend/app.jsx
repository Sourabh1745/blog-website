import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';


export default function App() {
return (
<div>
<Navbar />
<div className="container">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/new" element={<NewPost />} />
<Route path="/edit/:id" element={<EditPost />} />
</Routes>
</div>
</div>
);
}
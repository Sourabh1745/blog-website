import React from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';


export default function PostCard({ post, onDeleted }) {
const navigate = useNavigate();


const handleDelete = async () => {
if (!window.confirm('Delete this post?')) return;
try {
await API.delete(`/posts/${post._id}`);
onDeleted();
} catch (err) {
console.error(err);
alert('Delete failed');
}
};


return (
<div className="card">
<h3>{post.title}</h3>
<p className="meta">By {post.author || 'Anonymous'} · {new Date(post.createdAt).toLocaleString()}</p>
<p className="excerpt">{post.body && post.body.length > 200 ? post.body.slice(0, 200) + '...' : post.body}</p>
<div className="card-actions">
<button onClick={() => navigate(`/edit/${post._id}`)} className="btn">Edit</button>
<button onClick={handleDelete} className="btn danger">Delete</button>
</div>
</div>
);
}
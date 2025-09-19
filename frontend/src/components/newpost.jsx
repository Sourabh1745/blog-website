import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';


export default function NewPost() {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [author, setAuthor] = useState('');
const navigate = useNavigate();


const handleSubmit = async (e) => {
e.preventDefault();
try {
await API.post('/posts', { title, body, author });
navigate('/');
} catch (err) {
console.error(err);
alert('Create failed');
}
};


return (
<div>
<h2>New Post</h2>
<form onSubmit={handleSubmit} className="form">
<label>Title</label>
<input value={title} onChange={e => setTitle(e.target.value)} required />


<label>Author</label>
<input value={author} onChange={e => setAuthor(e.target.value)} />


<label>Body</label>
<textarea value={body} onChange={e => setBody(e.target.value)} rows={10} required />


<button className="btn" type="submit">Create</button>
</form>
</div>
);
}
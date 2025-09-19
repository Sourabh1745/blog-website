import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../api';


export default function EditPost() {
const { id } = useParams();
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [author, setAuthor] = useState('');
const navigate = useNavigate();


useEffect(() => {
const load = async () => {
try {
const res = await API.get(`/posts/${id}`);
setTitle(res.data.title);
setBody(res.data.body);
setAuthor(res.data.author || '');
} catch (err) {
console.error(err);
alert('Could not load post');
}
};
load();
}, [id]);


const handleUpdate = async (e) => {
e.preventDefault();
try {
await API.put(`/posts/${id}`, { title, body, author });
navigate('/');
} catch (err) {
console.error(err);
alert('Update failed');
}
};
return (
<div>
<h2>Edit Post</h2>
<form onSubmit={handleUpdate} className="form">
<label>Title</label>
<input value={title} onChange={e => setTitle(e.target.value)} required /> 
<label>Author</label>
<input value={author} onChange={e => setAuthor(e.target.value)} /> 
<label>Body</label>
<textarea value={body} onChange={e => setBody(e.target.value)} rows={10} required />
<button className="btn" type="submit">Update</button>
</form>
</div>
);
}
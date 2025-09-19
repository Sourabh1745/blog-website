import React, { useEffect, useState } from 'react';
import API from '../api';
import PostCard from './PostCard';


export default function Home() {
const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(true);


const fetchPosts = async () => {
try {
const res = await API.get('/posts');
setPosts(res.data);
} catch (err) {
console.error(err);
alert('Could not fetch posts');
} finally {
setLoading(false);
}
};


useEffect(() => { fetchPosts(); }, []);


return (
<div>
<h1>All Posts</h1>
{loading ? <p>Loading...</p> : (
posts.length === 0 ? <p>No posts yet. Create one!</p> : (
<div className="posts-grid">
{posts.map(p => (
<PostCard key={p._id} post={p} onDeleted={fetchPosts} />
))}
</div>
)
)}
</div>
);
}
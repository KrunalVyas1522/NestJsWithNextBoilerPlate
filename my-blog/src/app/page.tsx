"use client"
import axios from 'axios';
import { Post } from './types';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get<Post[]>('http://localhost:3001/Blogs');
        setPosts(res.data);
      } catch (err) {
        setError('Failed to load posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <h1 className="text-2xl font-bold my-4">Blog Posts</h1>
      <ul className="list-disc list-inside">
        {posts.length > 0 ? (
          posts.map(post => (
            <li key={post.id} className="my-2">
              <Link href={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))
        ) : (
          <li>No posts available.</li>
        )}
      </ul>
    </div>
  );
};

export default Home;

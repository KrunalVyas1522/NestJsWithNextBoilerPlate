import { notFound } from 'next/navigation';
import axios from 'axios';
import { Post } from '../../types';
import Navbar from '@/app/components/Navbar';

interface PostPageProps {
  params: {
    id: string;
  };
}

const PostPage = async ({ params }: PostPageProps) => {
  const res = await axios.get<Post>(`http://localhost:3001/Blogs/${params.id}`);

  if (res.status !== 200) {
    notFound();
  }

  const post = res.data;

  return (
    <div>
      <Navbar />
      <h1>{post.title}</h1>
      <p>By {post.author} on {new Date(post.date).toLocaleDateString()}</p>
      <div>{post.content}</div>
    </div>
  );
};

export default PostPage;

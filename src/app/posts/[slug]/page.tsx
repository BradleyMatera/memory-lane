'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

type Post = {
  title: string;
  content: string;
};

const posts: { [key: string]: Post } = {
  'learning-react': { title: 'Learning React', content: 'React is a powerful library for building UIs. It uses declarative components to build robust and dynamic interfaces.' },
  'exploring-tailwindcss': { title: 'Exploring TailwindCSS', content: 'TailwindCSS simplifies styling with utility-first classes, allowing rapid development with pre-defined styles.' },
  'top-resources': { title: 'Top Resources for Developers', content: 'Discover resources like MDN Web Docs, freeCodeCamp, and Stack Overflow to enhance your development skills.' },
};

export default function Post() {
  const { slug } = useParams() as { slug: string };
  if (!slug || typeof slug !== 'string' || !posts[slug]) {
    return (
      <div className="p-6">
        <p className="text-red-600">Post not found!</p>
        <Link href="/" className="text-blue-600 hover:underline">
          Go back to the homepage
        </Link>
      </div>
    );
  }

  const post = posts[slug];

  return (
    <div>
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Memory Lane</h1>
        </div>
      </header>

      <div className="p-6">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-lg leading-relaxed mb-6">{post.content}</p>
        <Link href="/" className="text-blue-600 hover:underline">
          Go back to the homepage
        </Link>
      </div>

      <footer className="bg-gray-800 text-white p-4 mt-10">
        <div className="container mx-auto text-center">
          <p>© 2024 Memory Lane. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
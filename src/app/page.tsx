'use client';

import Link from 'next/link';

const posts = [
  { id: 1, title: 'Learning React', slug: 'learning-react' },
  { id: 2, title: 'Exploring TailwindCSS', slug: 'exploring-tailwindcss' },
  { id: 3, title: 'Top Resources for Developers', slug: 'top-resources' },
];

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-5xl font-bold mb-6">Welcome to Memory Lane</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
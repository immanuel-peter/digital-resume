import Link from 'next/link';
import React from 'react';

const posts = [
  {
    slug: 'matchbox',
    title: 'Inside the Architecture of Matchbox',
    description: 'An AI-Powered Research Matching Platform',
    date: '2025',
  },
  {
    slug: 'moe-self-driving',
    title: 'Building AutoMoE',
    description: 'A Mixture-of-Experts Self-Driving Model',
    date: '2025',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Technical write-ups and project deep-dives
          </p>
        </header>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-200 hover:shadow-lg"
            >
              <div className="mb-3">
                <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                  {post.date}
                </span>
              </div>
              <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {post.description}
              </p>
              <div className="mt-4 flex items-center text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                Read more
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

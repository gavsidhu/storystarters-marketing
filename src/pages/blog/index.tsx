import { useState } from 'react';

import { getAllPosts } from '@/lib/getAllPosts';

import BlogHeader from '@/components/blog/BlogHeader';
import PostCard from '@/components/blog/PostCard';

import { Post } from '@/types/post';
interface HomeProps {
  posts: Post[];
}

const Blog = ({ posts }: HomeProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories: string[] = [
    'All',
    ...new Set(
      posts
        .flatMap((post) => post.category.split(',')) // Split the category string into an array of categories
        .map((category) => category.trim()) // Trim whitespace from each category
        .reduce((acc: string[], category: string) => acc.concat(category), []) // Concatenate all the arrays into a single array
    ),
  ];

  const filteredPosts =
    selectedCategory === 'All'
      ? posts
      : posts.filter((post) => post.category.includes(selectedCategory));

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <BlogHeader />
      <div className='bg-transparent py-12 sm:py-16'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl'>
            <div className='mb-4 flex justify-center space-x-2'>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`rounded-full py-1.5 px-4 text-sm font-medium text-black ${
                    selectedCategory === category
                      ? 'bg-black text-white'
                      : 'hover:bg-gray-200'
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className='mt-4 space-y-16 border-t border-black pt-10 sm:mt-4 sm:pt-16'>
              {filteredPosts.map((post) => (
                <PostCard
                  key={post.slug.current}
                  title={post.title}
                  description={post.description}
                  published={post.published}
                  slug={post.slug}
                  category={post.category}
                  authorImage={post.authorImage}
                  author={post.author}
                  authorUrl={post.authorUrl}
                  image={post.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  return {
    props: {
      // eslint-disable-next-line unused-imports/no-unused-vars
      posts: (await getAllPosts()).map(({ component, ...meta }) => meta),
    },
  };
}

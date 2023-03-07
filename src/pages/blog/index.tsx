import groq from 'groq';
import { SetStateAction, useState } from 'react';

import sanityClient from '@/lib/sanityClient';

import BlogHeader from '@/components/blog/BlogHeader';
import PostCard from '@/components/blog/PostCard';

import { Post } from '@/types/post';
interface HomeProps {
  posts: Post[];
}

const Blog = ({ posts }: HomeProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = [
    'All',
    ...new Set(posts.flatMap((post) => post.category)),
  ];

  const filteredPosts =
    selectedCategory === 'All'
      ? posts
      : posts.filter((post) => post.category.includes(selectedCategory));

  const handleCategoryClick = (category: SetStateAction<string>) => {
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
                  className={`rounded-full bg-transparent py-1.5 px-4 text-sm font-medium text-black ${
                    selectedCategory === category
                      ? 'bg-black text-white hover:bg-gray-900'
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
                  publishedAt={post.publishedAt}
                  slug={post.slug}
                  category={post.category}
                  authorImage={post.authorImage}
                  author={post.author}
                  authorUrl={post.authorUrl}
                  mainImage={post.mainImage}
                  body={undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const posts = await sanityClient.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc) 
{
    title,
    description,
    slug,
    mainImage,
      publishedAt,
  "author": author->name,
  "authorImage": author->image,
  "category": categories[]->title,
}
    `);
  return {
    props: {
      posts,
    },
  };
}

export default Blog;

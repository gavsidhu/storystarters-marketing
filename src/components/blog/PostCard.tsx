/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Post } from '@/types/post';
const PostCard = (post: Post) => {
  const categoryArray = post.category.split(',');
  return (
    <article className='relative isolate flex flex-col gap-8 lg:flex-row'>
      <div className='relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0'>
        <Image
          src={post.image}
          alt={post.title}
          className='absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover'
          fill
        />
        <div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10' />
      </div>
      <div>
        <div className='flex items-center gap-x-4 text-xs'>
          <time className='text-gray-500'>
            {new Date(post.published)
              .toDateString()
              .split(' ')
              .slice(1)
              .join(' ')}
          </time>
          <p className='relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100'>
            {categoryArray.map((category) => {
              return category;
            })}
          </p>
        </div>
        <div className='group relative max-w-xl'>
          <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
            <Link href={`/blog/posts/${post.slug}`}>
              <span className='absolute inset-0' />
              {post.title}
            </Link>
          </h3>
          <p className='mt-5 text-sm leading-6 text-gray-600'>
            {post.description}
          </p>
        </div>
        <div className='mt-6 flex border-t border-black pt-6'>
          <div className='relative flex items-center gap-x-4'>
            {/* <Image
              src={urlFor(post.authorImage).url()}
              alt=''
              className='h-10 w-10 rounded-full bg-gray-50'
              width={40}
              height={40}
            /> */}
            <div className='text-sm leading-6'>
              <p className='font-semibold text-gray-900'>
                <a href={post.authorUrl}>
                  <span className='absolute inset-0' />
                  {post.author}
                </a>
              </p>
              {/* <p className="text-gray-600">{post.author.role}</p> */}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;

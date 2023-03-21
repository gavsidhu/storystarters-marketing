import React from 'react';

import { Prose } from '@/components/blog/Prose';
import Header from '@/components/layout/Header';
import Seo from '@/components/Seo';

import { url } from '@/utils/url';

import { Post } from '@/types/post';

interface PostProps {
  children: React.ReactNode;
  metadata?: Post;
  isRssFeed: boolean;
  previousPathname?: string;
}

const PostLayout = ({ children, metadata, isRssFeed = false }: PostProps) => {
  if (isRssFeed) {
    return children;
  }
  return (
    <div>
      <Seo
        title={metadata?.title}
        description={metadata?.description}
        url={`${url}/${metadata?.slug}`}
      />
      <Header />
      <main>
        <div className='bg-transparent py-32 px-6 lg:px-8'>
          <div className='mx-auto max-w-4xl text-base leading-7 text-gray-700'>
            <h1 className='mt-6 text-4xl font-bold tracking-tight text-black sm:text-5xl'>
              {metadata?.title}
            </h1>
            <Prose className='mt-8'>{children}</Prose>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PostLayout;

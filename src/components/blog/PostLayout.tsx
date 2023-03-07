import React from 'react';

import Header from '@/components/layout/Header';

import styles from '@/styles/style';

import { Post } from '@/types/post';

interface PostProps {
  children: React.ReactNode;
  metadata?: Post;
}

const PostLayout = ({ children }: PostProps) => {
  return (
    <div>
      <Header />
      <main>
        <div className='bg-transparent py-32 px-6 lg:px-8'>
          <div className='mx-auto max-w-3xl text-base leading-7 text-gray-700'>
            {children}
          </div>
        </div>
        <style jsx global>
          {styles}
        </style>
      </main>
    </div>
  );
};

export default PostLayout;

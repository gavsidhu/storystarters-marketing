import axios, { AxiosError } from 'axios';
import React, { useState } from 'react';

import Header from '@/components/layout/Header';

import { url } from '@/utils/url';

const BlogHeader = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handleClick = async () => {
    try {
      const res = await axios.post(`${url}/api/crm/newsletter`, {
        email,
      });
      setMessage(res.data.msg);
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } catch (error) {
      if (error instanceof AxiosError) {
        setMessage(error.response?.data.msg);
        setTimeout(() => {
          setMessage('');
        }, 3000);
      }
    }
  };
  return (
    <>
      <Header />
      <main>
        <div className='bg-transparent py-24 px-6 font-primary sm:py-32 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='font-heading text-4xl font-bold tracking-tight text-black sm:text-6xl'>
              Craft Your Best Stories
            </h2>
            <p className='text-md mt-6 leading-8 text-gray-700'>
              Discover the latest trends, insights, and tips for improving your
              writing.
            </p>
          </div>
          <div className='mx-auto max-w-md'>
            <div className=' mt-10 flex gap-x-4'>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                onChange={onChange}
                className='min-w-0 flex-auto rounded-md border border-gray-200 bg-white px-3.5 py-2 text-black shadow-sm focus:border-0 focus:ring-1 focus:ring-primary-500 sm:text-sm sm:leading-6'
                placeholder='Enter your email'
              />
              <button
                className='flex-none rounded-md bg-black py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                onClick={handleClick}
              >
                Subscribe
              </button>
            </div>
            {message ? <p className='mt-2 px-1 text-sm'>{message}</p> : null}
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogHeader;

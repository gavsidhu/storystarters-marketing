import Image from 'next/image';
import * as React from 'react';

export default function Header() {
  return (
    <header className='bg-transparent'>
      <nav className='mx-auto px-4 sm:px-6 lg:px-12' aria-label='Top'>
        <div className='flex w-full items-center justify-between py-3 lg:border-none'>
          <div className='flex items-center'>
            <span className='sr-only'>Story Starters</span>
            <Image
              className='h-16 w-auto'
              src='/images/logo-full.png'
              alt='Story Starters'
              width={250}
              height={150}
            />
          </div>
          <div className='ml-10 space-x-4'>
            <a
              href='https://app.storystarters.co/login'
              className='inline-block rounded-md border border-transparent bg-primary-500 py-2 px-4 text-base font-medium text-white hover:bg-primary-600'
            >
              Sign in
            </a>
            {/* <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Sign up
            </a> */}
          </div>
        </div>
      </nav>
    </header>
  );
}

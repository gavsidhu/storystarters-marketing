import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiBars3, HiXMark } from 'react-icons/hi2';

const navigation = [
  { name: 'Features', href: '/#features' },
  { name: 'Pricing', href: 'https://app.storystarters.co/register' },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className='bg-transparent'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Story Starters</span>
            <Image
              className='h-16 w-auto'
              src='/images/logo-full.png'
              alt='Story Starters'
              width={250}
              height={150}
            />
          </Link>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-md leading-6 text-gray-700'
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className='flex flex-1 items-center justify-end gap-x-6'>
          <a
            href='https://app.storystarters.co/login'
            className='lg:text-md hidden lg:block lg:leading-6 lg:text-gray-700'
          >
            Log in
          </a>
          <a
            href='https://app.storystarters.co/register'
            className='rounded-md bg-primary-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-600'
          >
            Sign up
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <HiBars3 className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center gap-x-6'>
            <Link href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Story Starters</span>
              <Image
                className='h-16 w-auto'
                src='/images/logo-full.png'
                alt='Story Starters'
                width={250}
                height={150}
              />
            </Link>
            <a
              href='https://app.storystarters.co/register'
              className='ml-auto rounded-md bg-primary-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-600'
            >
              Sign up
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <HiXMark className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50'
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className='py-6'>
                <a
                  href='https://app.storystarters.co/login'
                  className='-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50'
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

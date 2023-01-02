import { Disclosure } from '@headlessui/react';
import * as React from 'react';
import {
  HiBolt,
  HiChatBubbleBottomCenterText,
  HiChevronDown,
  HiEnvelope,
  HiGlobeAlt,
  HiScale,
} from 'react-icons/hi2';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import classNames from '@/utils/classNames';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

const transferFeatures = [
  {
    id: 1,
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: HiGlobeAlt,
  },
  {
    id: 2,
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: HiScale,
  },
  {
    id: 3,
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: HiBolt,
  },
];
const communicationFeatures = [
  {
    id: 1,
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: HiChatBubbleBottomCenterText,
  },
  {
    id: 2,
    name: 'Reminder emails',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: HiEnvelope,
  },
];
const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];
const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (
        props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
      ) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
      ) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
      ) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (
        props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
      ) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: 'Dribbble',
      href: '#',
      icon: (
        props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
      ) => (
        <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
          <path
            fillRule='evenodd'
            d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
  ],
};

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section>
          <div className='relative px-6 lg:px-8'>
            <div className='mx-auto max-w-3xl pb-32 pt-14 sm:pb-40 md:pt-32'>
              <div>
                <div className='hidden sm:mb-8 sm:flex sm:justify-center'></div>
                <div>
                  <h1 className='text-center text-4xl font-bold tracking-tight md:text-5xl'>
                    Unlock Your Creative Potential with the Best AI Story
                    Writer.
                  </h1>
                  <p className='mt-6 text-center text-lg leading-8 text-gray-600'>
                    Create Unique, Engaging Stories with an AI Story Writer.
                  </p>
                  <div className='mt-8 sm:mx-auto sm:max-w-lg sm:text-center '>
                    <form action='#' method='POST' className='mt-3 sm:flex'>
                      <label htmlFor='email' className='sr-only'>
                        Email
                      </label>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        className='block w-full rounded-md border-gray-300 py-3 text-base placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:flex-1'
                        placeholder='Enter your email'
                      />
                      <button
                        type='submit'
                        className='mt-3 w-full rounded-md border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center'
                      >
                        Get early access
                      </button>
                    </form>
                  </div>
                </div>
                <div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'>
                  <svg
                    className='relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]'
                    viewBox='0 0 1155 678'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill='url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)'
                      fillOpacity='.3'
                      d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
                    />
                    <defs>
                      <linearGradient
                        id='ecb5b0c9-546c-4772-8c71-4d3f06d544bc'
                        x1='1155.49'
                        x2='-78.208'
                        y1='.177'
                        y2='474.645'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#9089FC' />
                        <stop offset={1} stopColor='#FF80B5' />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='overflow-hidden bg-gray-50 py-16 lg:py-24'>
            <div className='relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8'>
              <svg
                className='absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block'
                width={404}
                height={784}
                fill='none'
                viewBox='0 0 404 784'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='b1e6e422-73f8-40a6-b5d9-c8586e37e0e7'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className='text-gray-200'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={784}
                  fill='url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)'
                />
              </svg>

              <div className='relative'>
                <h2 className='text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
                  A better way to send money
                </h2>
                <p className='mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus magnam voluptatum cupiditate veritatis in, accusamus
                  quisquam.
                </p>
              </div>

              <div className='relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8'>
                <div className='relative'>
                  <h3 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
                    Transfer funds world-wide
                  </h3>
                  <p className='mt-3 text-lg text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur minima sequi recusandae, porro maiores officia
                    assumenda aliquam laborum ab aliquid veritatis impedit odit
                    adipisci optio iste blanditiis facere. Totam, velit.
                  </p>

                  <dl className='mt-10 space-y-10'>
                    {transferFeatures.map((item) => (
                      <div key={item.id} className='relative'>
                        <dt>
                          <div className='absolute flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white'>
                            <item.icon className='h-8 w-8' aria-hidden='true' />
                          </div>
                          <p className='ml-16 text-lg font-medium leading-6 text-gray-900'>
                            {item.name}
                          </p>
                        </dt>
                        <dd className='mt-2 ml-16 text-base text-gray-500'>
                          {item.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div
                  className='relative -mx-4 mt-10 lg:mt-0'
                  aria-hidden='true'
                >
                  <svg
                    className='absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden'
                    width={784}
                    height={404}
                    fill='none'
                    viewBox='0 0 784 404'
                  >
                    <defs>
                      <pattern
                        id='ca9667ae-9f92-4be7-abcb-9e3d727f2941'
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits='userSpaceOnUse'
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className='text-gray-200'
                          fill='currentColor'
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={784}
                      height={404}
                      fill='url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)'
                    />
                  </svg>
                  <img
                    className='relative mx-auto'
                    width={490}
                    src='https://tailwindui.com/img/features/feature-example-1.png'
                    alt=''
                  />
                </div>
              </div>

              <svg
                className='absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block'
                width={404}
                height={784}
                fill='none'
                viewBox='0 0 404 784'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className='text-gray-200'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={784}
                  fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)'
                />
              </svg>

              <div className='relative mt-12 sm:mt-16 lg:mt-24'>
                <div className='lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8'>
                  <div className='lg:col-start-2'>
                    <h3 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
                      Always in the loop
                    </h3>
                    <p className='mt-3 text-lg text-gray-500'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit ex obcaecati natus eligendi delectus, cum deleniti
                      sunt in labore nihil quod quibusdam expedita nemo.
                    </p>

                    <dl className='mt-10 space-y-10'>
                      {communicationFeatures.map((item) => (
                        <div key={item.id} className='relative'>
                          <dt>
                            <div className='absolute flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white'>
                              <item.icon
                                className='h-8 w-8'
                                aria-hidden='true'
                              />
                            </div>
                            <p className='ml-16 text-lg font-medium leading-6 text-gray-900'>
                              {item.name}
                            </p>
                          </dt>
                          <dd className='mt-2 ml-16 text-base text-gray-500'>
                            {item.description}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className='relative -mx-4 mt-10 lg:col-start-1 lg:mt-0'>
                    <svg
                      className='absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden'
                      width={784}
                      height={404}
                      fill='none'
                      viewBox='0 0 784 404'
                      aria-hidden='true'
                    >
                      <defs>
                        <pattern
                          id='e80155a9-dfde-425a-b5ea-1f6fadd20131'
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits='userSpaceOnUse'
                        >
                          <rect
                            x={0}
                            y={0}
                            width={4}
                            height={4}
                            className='text-gray-200'
                            fill='currentColor'
                          />
                        </pattern>
                      </defs>
                      <rect
                        width={784}
                        height={404}
                        fill='url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)'
                      />
                    </svg>
                    <img
                      className='relative mx-auto'
                      width={490}
                      src='https://tailwindui.com/img/features/feature-example-2.png'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='relative overflow-hidden bg-gray-50 pt-24 sm:pt-32 lg:pt-40'>
            <div className='mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8'>
              <div>
                <h2 className='text-lg font-semibold text-indigo-600'>
                  Serverless
                </h2>
                <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                  No server? No problem.
                </p>
                <p className='mx-auto mt-5 max-w-prose text-xl text-gray-600'>
                  Phasellus lorem quam molestie id quisque diam aenean nulla in.
                  Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
                  condimentum id viverra nulla.
                </p>
              </div>
              <div className='mt-12 -mb-10 sm:-mb-24 lg:-mb-80'>
                <img
                  className='rounded-lg shadow-xl ring-1 ring-black ring-opacity-5'
                  src='https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='bg-gray-50'>
            <div className='mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8'>
              <div className='mx-auto max-w-3xl divide-y-2 divide-gray-200'>
                <h2 className='text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                  Frequently asked questions
                </h2>
                <dl className='mt-6 space-y-6 divide-y divide-gray-200'>
                  {faqs.map((faq) => (
                    <Disclosure as='div' key={faq.question} className='pt-6'>
                      {({ open }) => (
                        <>
                          <dt className='text-lg'>
                            <Disclosure.Button className='flex w-full items-start justify-between text-left text-gray-400'>
                              <span className='font-medium text-gray-900'>
                                {faq.question}
                              </span>
                              <span className='ml-6 flex h-7 items-center'>
                                <HiChevronDown
                                  className={classNames(
                                    open ? '-rotate-180' : 'rotate-0',
                                    'h-6 w-6 transform'
                                  )}
                                  aria-hidden='true'
                                />
                              </span>
                            </Disclosure.Button>
                          </dt>
                          <Disclosure.Panel as='dd' className='mt-2 pr-12'>
                            <p className='text-base text-gray-500'>
                              {faq.answer}
                            </p>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='bg-white'>
            <div className='mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                <span className='block'>Ready to dive in?</span>
                <span className='block'>Start your free trial today.</span>
              </h2>
              <div className='mt-8 flex justify-center'>
                <div className='inline-flex rounded-md shadow'>
                  <a
                    href='#'
                    className='inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700'
                  >
                    Get started
                  </a>
                </div>
                <div className='ml-3 inline-flex'>
                  <a
                    href='#'
                    className='inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-5 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200'
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='bg-white' aria-labelledby='footer-heading'>
        <h2 id='footer-heading' className='sr-only'>
          Footer
        </h2>
        <div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
          <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
            <div className='space-y-8 xl:col-span-1'>
              <img
                className='h-10'
                src='https://tailwindui.com/img/logos/mark.svg?color=gray&shade=300'
                alt='Company name'
              />
              <p className='text-base text-gray-500'>
                Making the world a better place through constructing elegant
                hierarchies.
              </p>
              <div className='flex space-x-6'>
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='text-gray-400 hover:text-gray-500'
                  >
                    <span className='sr-only'>{item.name}</span>
                    <item.icon className='h-6 w-6' aria-hidden='true' />
                  </a>
                ))}
              </div>
            </div>
            <div className='mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
              <div className='md:grid md:grid-cols-2 md:gap-8'>
                <div>
                  <h3 className='text-base font-medium text-gray-900'>
                    Solutions
                  </h3>
                  <ul role='list' className='mt-4 space-y-4'>
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className='text-base text-gray-500 hover:text-gray-900'
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='mt-12 md:mt-0'>
                  <h3 className='text-base font-medium text-gray-900'>
                    Support
                  </h3>
                  <ul role='list' className='mt-4 space-y-4'>
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className='text-base text-gray-500 hover:text-gray-900'
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='md:grid md:grid-cols-2 md:gap-8'>
                <div>
                  <h3 className='text-base font-medium text-gray-900'>
                    Company
                  </h3>
                  <ul role='list' className='mt-4 space-y-4'>
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className='text-base text-gray-500 hover:text-gray-900'
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='mt-12 md:mt-0'>
                  <h3 className='text-base font-medium text-gray-900'>Legal</h3>
                  <ul role='list' className='mt-4 space-y-4'>
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className='text-base text-gray-500 hover:text-gray-900'
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-12 border-t border-gray-200 pt-8'>
            <p className='text-base text-gray-400 xl:text-center'>
              &copy; 2020 Your Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </Layout>
  );
}

import Image from 'next/image';
import { HiCheck, HiGlobeAlt, HiScale } from 'react-icons/hi2';

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

const aiWriterFeatures = [
  {
    id: 1,
    name: 'Expand',
    description:
      "Takes your existing writing and expands upon it, giving you more content to work with and helping to eliminate writer's block.",
    icon: HiGlobeAlt,
  },
  {
    id: 2,
    name: 'Rewrite',
    description:
      'Helps you rephrase and reorganize your writing for better flow and clarity.',
    icon: HiScale,
  },
];
// const communicationFeatures = [
//   {
//     id: 1,
//     name: 'Mobile notifications',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//     icon: HiChatBubbleBottomCenterText,
//   },
//   {
//     id: 2,
//     name: 'Reminder emails',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//     icon: HiEnvelope,
//   },
// ];
// const faqs = [
//   {
//     question: "What's the best thing about Switzerland?",
//     answer:
//       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
//   },
//   // More questions...
// ];
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
const pricing = {
  tiers: [
    {
      title: 'Starter',
      price: 15,
      frequency: '/month',
      description: 'Ideal for aspiring writers or those just starting out.',
      features: [
        '20,000 words per month',
        'Plot generator',
        'Character creator',
        'Story outline generator',
        '7-day money-back guarantee',
      ],
      cta: 'Try for free',
      mostPopular: false,
    },
    {
      title: 'Standard',
      price: 60,
      frequency: '/month',
      description:
        'Perfect for writers looking to take their writing to the next level.',
      features: [
        '100,000 words per month',
        'Plot generator',
        'Character creator',
        'Story outline generator',
        '7-day money-back guarantee',
      ],
      cta: 'Try for free',
      mostPopular: false,
    },
    {
      title: 'Professional',
      price: 100,
      frequency: '/month',
      description:
        'Tailored for professional writers who are looking to elevate their craft.',
      features: [
        '200,000 words per month',
        'Plot generator',
        'Character creator',
        'Story outline generator',
        '7-day money-back guarantee',
      ],
      cta: 'Try for free',
      mostPopular: false,
    },
  ],
};
const features = [
  {
    name: 'Plot Generator',
    description:
      'Struggling to come up with a compelling plot for your story? With just one click, our AI can generate a plot for you, complete with twists and turns to keep your readers on the edge of their seats.',
  },
  {
    name: 'Character Generator',
    description:
      "Our AI can help you develop fully fleshed-out characters, complete with personalities, backgrounds, and physical descriptions. Whether you're looking to create a complex protagonist, a charismatic villain, or a lovable sidekick, our AI can help you achieve it.",
  },
  {
    name: 'Outline Generator',
    description:
      "Our AI can create an outline for your story, helping you organize your thoughts and plot points. With a clear outline, you'll be able to see the structure of your story and make any necessary changes to make it more engaging.",
  },
  // {
  //   name: ' Story Title Generator',
  //   description:
  //     'Quae et accusantium quo molestiae sed sit ut quo. Quidem omnis iure et maiores porro. Eligendi deserunt.',
  // },
  {
    name: 'Story Structure Templates',
    description:
      "We provide you with popular story structure templates such as the hero's journey, three act, and Freytag's pyramid, to help you organize your story and make it more engaging. These templates are tried and true methods that have been used by successful writers for years, and they'll help you create a story that is both compelling and satisfying.",
  },
  {
    name: 'Prompt Library',
    description:
      "Our library is filled with writing prompts to help you get started and overcome writer's block.Whether you're looking for inspiration or a new angle for your story, our prompts will give you the jumpstart you need.",
  },
  // {
  //   name: 'Drag and Drop',
  //   description:
  //     'Illum nesciunt odio. Dolorem nobis labore eveniet consequatur quas aut delectus molestias. Qui recusandae.',
  // },
  {
    name: 'Writing Goals',
    description:
      'Add writing goals for your writing projects so you can track your progress and stay on track',
  },
];

export default function HomePage() {
  // const router = useRouter()
  // const [email, setEmail] = useState("")
  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(e.target.value)
  // }

  // const [error, setError] = useState<null | string>(null)

  // const onSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
  //   e.preventDefault()

  //   try {
  //     const response = await axios.post(`${url}/api/crm`, {
  //       email: email,
  //       origin: "/"
  //     })

  //     // await gtag_report_conversion('https://www.storystarters.co/')
  //     router.push('/thank-you')
  //   } catch (error) {
  //     console.log("Error: ", error)
  //     if (axios.isAxiosError(error) && error.response) {
  //       setError(error.response.data)
  //     } else {
  //       setError("Unexpected error")
  //     }
  //     setTimeout(() => {
  //       setError(null)
  //     }, 3000)
  //   }
  // }

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        {/* Hero */}
        <section>
          <div className='relative px-6 lg:px-8'>
            <div className='mx-auto max-w-3xl pb-16 pt-14 sm:pb-20 md:pt-32'>
              <div>
                <div className='hidden sm:mb-8 sm:flex sm:justify-center'></div>
                <div>
                  <h1 className='text-center text-4xl font-bold md:text-6xl'>
                    Unlock Your Creative Potential with the Best AI Story Writer
                  </h1>
                  <p className='mt-6 text-center text-lg leading-8  text-gray-600 md:text-xl'>
                    Our AI Story Writer can help you brainstorm ideas, develop
                    compelling plots, create memorable characters, and write
                    amazing stories in no time.
                  </p>
                  <div className='mx-auto mt-8 flex max-w-lg justify-center'>
                    <a
                      href='#'
                      className='inline-flex w-1/2 items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900'
                    >
                      Try it for free
                    </a>
                  </div>
                  {/* <div className='mt-8 sm:mx-auto sm:max-w-lg sm:text-center '>
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
                  </div> */}
                </div>
                <div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'></div>
              </div>
            </div>
          </div>
        </section>
        {/* Feature alternating */}
        <section>
          <div className='overflow-hidden bg-white py-16 lg:py-24'>
            <div className='relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8'>
              {/* <div className='relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8'>
                <div className='relative'>
                  <h3 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
                    Write your stories faster
                  </h3>
                  <p className='mt-3 text-lg text-gray-500'>
                    AI Story Writer is the perfect tool for story writers looking to streamline their writing process. This intuitive writing tool uses the power of artificial intelligence to generate quality stories in a fraction of the time of manual writing.
                  </p>

                  <dl className='mt-10 space-y-10'>
                    {aiWriterFeatures.map((item) => (
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
                  <Image
                    className='h-auto mx-auto shadow-lg'
                    src="/videos/story_writer_feature.gif"
                    width={440}
                    height={0}
                    alt="Ai story writer expand "
                  />
                </div>
              </div> */}
              <div className='relative mt-12 sm:mt-16 lg:mt-24'>
                <div className='lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8'>
                  <div className='lg:col-start-2'>
                    <h3 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
                      Write your stories faster
                    </h3>
                    <p className='mt-3 text-lg text-gray-500'>
                      Story Starter's AI story writer is the perfect tool for
                      creative writers looking to streamline their writing
                      process.
                    </p>

                    <dl className='mt-10 space-y-10'>
                      {aiWriterFeatures.map((item) => (
                        <div key={item.id} className='relative'>
                          <dt>
                            {/* <div className='absolute flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white'>
                              <item.icon
                                className='h-8 w-8'
                                aria-hidden='true'
                              />
                            </div> */}
                            <p className='text-lg font-medium leading-6 text-gray-900'>
                              {item.name}
                            </p>
                          </dt>
                          <dd className='mt-2 text-base text-gray-500'>
                            {item.description}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className='relative -mx-4 mt-10 lg:col-start-1 lg:mt-0'>
                    <video
                      autoPlay
                      muted
                      loop
                      className='mx-auto h-auto shadow-lg'
                      src='/videos/ai_writier_video.mp4'
                      width={440}
                      height={0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Feature Grid */}
        <section>
          <div className='bg-white'>
            <div className='mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:px-8 lg:py-40'>
              <div>
                <h2 className='text-lg font-semibold leading-8 tracking-tight text-indigo-600'>
                  Powerful features
                </h2>
                <p className='mt-2 text-4xl font-bold tracking-tight text-gray-900'>
                  Unleash your creativity
                </p>
                <p className='mt-6 text-base leading-7 text-gray-600'>
                  Story Starters includes everything you need to to make the
                  writing process faster, more efficient, and more enjoyable.
                </p>
              </div>
              <div className='mt-20 lg:col-span-2 lg:mt-0'>
                <dl className='grid grid-cols-1 gap-12 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-3'>
                  {features.map((feature) => (
                    <div key={feature.name} className='relative'>
                      <dt>
                        <HiCheck
                          className='absolute mt-1 h-6 w-6 text-indigo-600'
                          aria-hidden='true'
                        />
                        <p className='ml-10 text-lg font-semibold leading-8 text-gray-900'>
                          {feature.name}
                        </p>
                      </dt>
                      <dd className='mt-2 ml-10 text-base leading-7 text-gray-600'>
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          )
        </section>
        {/* Feature big screenshot */}
        <section>
          <div className='relative overflow-hidden bg-gray-50 pt-14 sm:pt-24 lg:pt-32'>
            <div className='mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8'>
              <div>
                <h2 className='text-lg font-semibold text-indigo-600'>
                  Intuitive
                </h2>
                <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                  Organize with ease
                </p>
                <p className='mx-auto mt-5 max-w-prose text-xl text-gray-600'>
                  Our drag-and-drop interface is designed to make organizing
                  your story easy and intuitive.
                </p>
              </div>
              <div className='mt-12 -mb-10 sm:-mb-24 lg:-mb-80'>
                <Image
                  className='h-auto rounded-lg shadow-xl ring-1 ring-black ring-opacity-5'
                  src='https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg'
                  alt=''
                  width={1200}
                  height={800}
                />
              </div>
            </div>
          </div>
        </section>
        {/* Pricing */}
        <section>
          <div className='mx-auto max-w-7xl bg-white py-24 px-6 lg:px-8'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl'>
              Pricing for Every Writer
            </h2>
            <p className='mt-6 max-w-2xl text-xl text-gray-500'>
              Whether you're a beginner just starting out or a seasoned pro
              looking to take your writing to the next level, we have a plan
              that will suit your needs.
            </p>

            {/* Tiers */}
            <div className='mt-24 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0'>
              {pricing.tiers.map((tier) => (
                <div
                  key={tier.title}
                  className='relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm'
                >
                  <div className='flex-1'>
                    <h3 className='text-xl font-semibold text-gray-900'>
                      {tier.title}
                    </h3>
                    {tier.mostPopular ? (
                      <p className='absolute top-0 -translate-y-1/2 transform rounded-full bg-indigo-500 py-1.5 px-4 text-sm font-semibold text-white'>
                        Most popular
                      </p>
                    ) : null}
                    <p className='mt-4 flex items-baseline text-gray-900'>
                      <span className='text-5xl font-bold tracking-tight'>
                        ${tier.price}
                      </span>
                      <span className='ml-1 text-xl font-semibold'>
                        {tier.frequency}
                      </span>
                    </p>
                    <p className='mt-6 text-gray-500'>{tier.description}</p>

                    {/* Feature list */}
                    <ul role='list' className='mt-6 space-y-6'>
                      {tier.features.map((feature) => (
                        <li key={feature} className='flex'>
                          <HiCheck
                            className='h-6 w-6 flex-shrink-0 text-indigo-500'
                            aria-hidden='true'
                          />
                          <span className='ml-3 text-gray-500'>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href='#'
                    className={classNames(
                      tier.mostPopular
                        ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                        : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
                      'mt-8 block w-full rounded-md border border-transparent py-3 px-6 text-center font-medium'
                    )}
                  >
                    {tier.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* FAQs */}
        <section>
          {/* <div className='bg-gray-50'>
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
          </div> */}
        </section>
        {/* CTA */}
        <section>
          <div className='bg-white'>
            <div className='mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl'>
                <span className='block'>
                  Unlock the full potential of your writing
                </span>
                {/* <span className='block'>Start your free trial today.</span> */}
              </h2>
              <p className='mt-6 text-center text-xl text-gray-500'>
                Say goodbye to writer's block and hello to a faster, more
                efficient writing process.
              </p>
              <div className='mx-auto mt-8 flex max-w-lg justify-center'>
                <a
                  href='#'
                  className='inline-flex w-1/2 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700'
                >
                  Try it for free
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className='mt-28 bg-white' aria-labelledby='footer-heading'>
        <h2 id='footer-heading' className='sr-only'>
          Footer
        </h2>
        <div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
          <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
            <div className='space-y-8 xl:col-span-1'>
              <Image
                className='h-10'
                src='https://tailwindui.com/img/logos/mark.svg?color=gray&shade=300'
                alt='Company name'
                width={40}
                height={40}
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

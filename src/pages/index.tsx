import Image from 'next/image';
import { HiCheck } from 'react-icons/hi2';

import Layout from '@/components/layout/Layout';
import SimpleFooter from '@/components/layout/SimpleFooter';
import Seo from '@/components/Seo';

import classNames from '@/utils/classNames';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

const aiWriterFeatures = [
  {
    id: 1,
    name: 'Expand Your Writing',
    description:
      "Take your existing writing to the next level with the expand feature. Get more content to work with and eliminate writer's block with just a click of a button.",
    icon: HiCheck,
  },
  {
    id: 2,
    name: 'Improve Your Writing Flow',
    description:
      'The rewrite feature helps you rephrase and reorganize your writing for better flow and clarity.',
    icon: HiCheck,
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
//    More questions...
// ];
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
      "Develop fully fleshed-out characters, complete with personalities, backgrounds, and physical descriptions. Whether you're looking to create a complex protagonist, a charismatic villain, or a lovable sidekick, our AI can help you achieve it.",
  },
  {
    name: 'Outline Generator',
    description:
      "Create an outline for your story, so you organize your thoughts and plot points. With a clear outline, you'll be able to see the structure of your story and make any necessary changes to make it more engaging.",
  },
  // {
  //   name: ' Story Title Generator',
  //   description:
  //     'Quae et accusantium quo molestiae sed sit ut quo. Quidem omnis iure et maiores porro. Eligendi deserunt.',
  // },
  {
    name: 'Templates',
    description:
      "Our Story Structure Templates are designed to help fiction writers create compelling and well-structured stories. Choose from a variety of templates including the Hero's Journey, Three Act Structure, and Freytag's Pyramid",
  },
  {
    name: 'Prompt Library',
    description:
      "The prompt library is an extensive collection of writing prompts designed to help inspire and kick-start your writing process. Whether you're looking for a new story idea or simply in need of a creative spark, the prompt library is an invaluable resource.",
  },
  // {
  //   name: 'Drag and Drop',
  //   description:
  //     'Illum nesciunt odio. Dolorem nobis labore eveniet consequatur quas aut delectus molestias. Qui recusandae.',
  // },
  {
    name: 'Progress Tracker',
    description:
      'Our progress tracker feature makes it simple to keep track of your writing goals and progress. Set achievable milestones and watch as you move closer to completing your next masterpiece.',
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
      <Seo templateTitle='Home' />

      <main>
        {/* Hero */}
        <section>
          <div className='relative px-6 lg:px-8'>
            <div className='mx-auto max-w-3xl pb-16 pt-14 sm:pb-20 md:pt-32 lg:max-w-5xl'>
              <div>
                <div className='hidden sm:mb-8 sm:flex sm:justify-center'></div>
                <div>
                  <h1 className='text-center font-heading text-5xl font-black text-black md:text-6xl lg:text-7xl'>
                    Unlock Your Writing Potential with the Best AI Story Writer
                  </h1>
                  <p className='mt-6 text-center text-lg leading-8 text-gray-700 md:text-xl'>
                    Our AI Story Writer can help you brainstorm ideas, develop
                    compelling plots, create memorable characters, and write
                    amazing stories in no time.
                  </p>
                  <div className='mx-auto mt-8 flex max-w-lg justify-center'>
                    <a
                      href='https://app.storystarters.co/register'
                      className='inline-flex w-1/2 items-center justify-center rounded-md border border-transparent bg-primary-500 px-5 py-3 text-base font-medium text-white hover:bg-primary-600'
                    >
                      Try for free
                    </a>
                  </div>
                  <div className='mx-auto mt-2 text-center'>
                    <p className='text-xs text-gray-500'>
                      <span>No Commitments &#8226; Cancel Anytime</span>
                    </p>
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
          <div className='overflow-hidden py-12 lg:py-16'>
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
                    <h3 className='font-heading text-3xl font-bold tracking-tight text-black sm:text-5xl'>
                      Write Faster and Smarter
                    </h3>
                    <p className='mt-3 text-lg text-gray-700'>
                      Story Starters AI story writer is the perfect tool for
                      fiction writers looking to streamline their writing
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
                            <p className='text-lg font-semibold leading-6 text-black'>
                              {item.name}
                            </p>
                          </dt>
                          <dd className='mt-2 text-base text-gray-700'>
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
          <div>
            <div className='mx-auto max-w-7xl px-6 sm:pt-24 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:px-8 lg:pt-40'>
              <div>
                <h2 className='text-lg font-semibold leading-8 tracking-tight text-primary-500'>
                  Powerful Features
                </h2>
                <p className='mt-2 font-heading text-4xl font-bold tracking-tight text-black md:text-5xl'>
                  Endless Creativity
                </p>
                <p className='mt-6 text-base leading-7 text-gray-700'>
                  Unleash your creativity with our advanced features. Story
                  Starters includes everything you need to to make the writing
                  process faster, more efficient, and more enjoyable.
                </p>
              </div>
              <div className='mt-20 lg:col-span-2 lg:mt-0'>
                <dl className='grid grid-cols-1 gap-12 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-3'>
                  {features.map((feature) => (
                    <div key={feature.name} className='relative'>
                      <dt>
                        <HiCheck
                          className='absolute mt-1 h-6 w-6 text-primary-500'
                          aria-hidden='true'
                        />
                        <p className='ml-10 text-lg font-semibold leading-8 text-black'>
                          {feature.name}
                        </p>
                      </dt>
                      <dd className='mt-2 ml-10 text-base leading-7 text-gray-700'>
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
          <div className='relative overflow-hidden pt-12 sm:pt-12 lg:pt-12'>
            <div className='mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8'>
              <div>
                <h2 className='text-lg font-semibold text-primary-500'>
                  Intuitive Design
                </h2>
                <p className='mt-2 font-heading text-3xl font-bold tracking-tight text-black sm:text-5xl'>
                  Organize with Ease
                </p>
                <p className='mx-auto mt-5 max-w-prose text-xl text-gray-700'>
                  Our drag-and-drop interface makes it easy to organize your
                  story and keep track of your progress.
                </p>
              </div>
              <div className='mt-12 -mb-10 sm:-mb-24 lg:-mb-16'>
                <Image
                  className='h-auto rounded-lg shadow-xl ring-1 ring-black ring-opacity-5'
                  src='/images/ui-screenshot.png'
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
          <div className='mx-auto max-w-7xl py-24 px-6 lg:px-8'>
            <h2 className='font-heading text-3xl font-bold tracking-tight text-black sm:text-5xl sm:leading-none md:text-5xl'>
              Pricing for Every Writer
            </h2>
            <p className='mt-6 max-w-2xl text-xl text-gray-700'>
              We have a pricing plan that fits every writer's needs - whether
              you're a beginner just starting out or a seasoned pro looking to
              take your writing to the next level.
            </p>

            {/* Tiers */}
            <div className='mt-24 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0'>
              {pricing.tiers.map((tier) => (
                <div
                  key={tier.title}
                  className='relative flex flex-col rounded-2xl bg-white p-8 shadow-xl ring-1 ring-black ring-opacity-5'
                >
                  <div className='flex-1'>
                    <h3 className='text-xl font-semibold text-black'>
                      {tier.title}
                    </h3>
                    {tier.mostPopular ? (
                      <p className='absolute top-0 -translate-y-1/2 transform rounded-full bg-primary-500 py-1.5 px-4 text-sm font-semibold text-white'>
                        Most popular
                      </p>
                    ) : null}
                    <p className='mt-4 flex items-baseline text-black'>
                      <span className='text-5xl font-bold tracking-tight'>
                        ${tier.price}
                      </span>
                      <span className='ml-1 text-xl font-semibold'>
                        {tier.frequency}
                      </span>
                    </p>
                    <p className='mt-6 text-gray-700'>{tier.description}</p>

                    {/* Feature list */}
                    <ul role='list' className='mt-6 space-y-6'>
                      {tier.features.map((feature) => (
                        <li key={feature} className='flex'>
                          <HiCheck
                            className='h-6 w-6 flex-shrink-0 text-primary-500'
                            aria-hidden='true'
                          />
                          <span className='ml-3 text-gray-700'>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href='https://app.storystarters.co/register'
                    className={classNames(
                      tier.mostPopular
                        ? 'bg-primary-500 text-white hover:bg-primary-600'
                        : 'bg-primary-500 text-white hover:bg-primary-600',
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
          <div>
            <div className='mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8'>
              <h2 className='font-heading text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl'>
                <span className='block'>
                  Unlock the full potential of your writing
                </span>
                {/* <span className='block'>Start your free trial today.</span> */}
              </h2>
              <p className='mt-6 text-center text-xl text-gray-700'>
                Take the first step towards a faster, more efficient writing
                process and try our AI story assistant today.
              </p>
              <div className='mx-auto mt-8 flex max-w-lg justify-center'>
                <a
                  href='https://app.storystarters.co/register'
                  className='inline-flex w-1/2 items-center justify-center rounded-md border border-transparent bg-primary-500 px-5 py-3 text-base font-medium text-white hover:bg-primary-600'
                >
                  Try for free
                </a>
              </div>
              <div className='mx-auto mt-2 text-center'>
                <p className='text-xs text-gray-500'>
                  <span>No Commitments &#8226; Cancel Anytime</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <SimpleFooter />
    </Layout>
  );
}

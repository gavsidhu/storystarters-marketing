/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText, PortableTextComponent } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import { GetStaticPropsContext } from 'next';

import sanityClient from '@/lib/sanityClient';

import PostLayout from '@/components/blog/PostLayout';
import Seo from '@/components/Seo';

import { url } from '@/utils/url';

import { Post } from '@/types/post';

interface ImageProps {
  alt: string;
  asset: { _ref: string; _type: string };
  value: any;
}

interface PtComponents {
  types: {
    image: PortableTextComponent<ImageProps>;
  };
  block: {
    normal: any;
  };
  list: {
    bullet: any;
    number: any;
  };
  listItem: {
    bullet: any;
  };
}

interface PostProps {
  post: Post;
}

function urlFor(source: any) {
  return imageUrlBuilder(sanityClient).image(source);
}

const ptComponents: PtComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt={value.alt || ' '}
          loading='lazy'
          src={urlFor(value)}
          className='h-[240px] w-[320px] md:h-[320px] md:w-[480px]'
        />
      );
    },
  },
  block: {
    normal: ({ children }: any) => (
      <p className='mt-4 md:text-lg'>{children}</p>
    ),
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => (
      <ul className='my-6 max-w-xl space-y-4 px-8 text-black'>{children}</ul>
    ),
    number: ({ children }: any) => <ol className='mt-lg'>{children}</ol>,
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => (
      <li style={{ listStyleType: 'disc' }}>{children}</li>
    ),
  },
};

const Post = ({ post }: PostProps) => {
  const {
    author = 'Missing Author',
    publishedAt = '',
    mainImage,
    body = 'missing',
    description = 'missing',
  } = post;
  const imageUrl =
    `${url}/api/og?` +
    `&author=${encodeURIComponent(author)}` +
    `&cover=${encodeURIComponent(urlFor(mainImage).url())}` +
    `&date=${publishedAt}`;
  return (
    <>
      <Seo
        description={description}
        type='article'
        date={new Date(publishedAt).toDateString()}
        image={imageUrl}
      />
      <PostLayout>
        <article>
          <PortableText value={body} components={ptComponents} />
        </article>
      </PostLayout>
    </>
  );
};

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  // It's important to default the slug so that it doesn't return "undefined"
  const slug = context.params?.slug || '';
  const post = await sanityClient.fetch<Post>(
    `
    *[_type == "post" && slug.current == $slug][0]
  `,
    { slug }
  );

  return {
    props: {
      post,
    },
  };
}

export default Post;

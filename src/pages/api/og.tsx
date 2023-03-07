/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

export const inter400 = fetch(
  new URL('../../assets/Inter-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export const inter700 = fetch(
  new URL('../../assets/Inter-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

const handle = async (req: NextRequest) => {
  const { searchParams, host, protocol } = new URL(req.url);

  const interRegular = await inter400;
  const interBold = await inter700;

  const title = searchParams.get('title') || 'No post title';
  const date = new Date(searchParams.get('date') || '2022-11-05T12:00:00.000Z');
  //const logo = `${protocol}//${host}/_next/image/logo-full-png&w=1200&q=75`
  const logo = `${protocol}//${host}/images/logo-full.png`;
  const bg = `${protocol}//${host}/images/gray-paper-bg.png`;
  const cover = `${protocol}//${host}/_next/image?url=${encodeURIComponent(
    searchParams.get('cover') || ''
  )}&w=1200&q=75`;

  return new ImageResponse(
    (
      <div
        tw='flex w-full h-full flex-col justify-end'
        style={{ backgroundImage: `url(${bg})`, fontFamily: 'Inter' }}
      >
        <div
          tw='flex w-full h-full items-center justify-center mx-auto p-8'
          style={{ verticalAlign: 'middle' }}
        >
          <div tw='flex w-2/3 h-2/3 rounded-lg shadow-xl mt-64'>
            <img src={cover} alt='' tw='w-full h-full' />
          </div>
        </div>
        <div tw='flex flex-col bg-transparent p-8'>
          <img src={logo} alt='' tw='w-48 h-16' />
          <div tw='text-4xl mb-4 font-bold'>{title}</div>
          <div tw='text-md'>
            {date.toLocaleDateString('en-US', { dateStyle: 'long' })}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 628,
      fonts: [
        {
          name: 'Inter',
          data: interRegular,
          weight: 400,
        },
        {
          name: 'Inter',
          data: interBold,
          weight: 700,
        },
      ],
    }
  );

  // return new ImageResponse(
  //   (
  //     <div
  //       style={{
  //         display: 'flex',
  //         width: '1200px',
  //         height: '628px',
  //         backgroundColor: '#fff',
  //         borderRadius: '20px',
  //         overflow: 'hidden',
  //       }}
  //     >
  //       <div
  //         style={{
  //           display: 'flex',
  //           flexBasis: '60%',
  //           backgroundImage: `url(${cover})`,
  //           backgroundPosition: 'center',
  //           backgroundRepeat: 'no-repeat',
  //           backgroundSize: 'cover',
  //           padding: '40px',
  //           borderTopLeftRadius: '20px',
  //           borderBottomLeftRadius: '20px',
  //         }}
  //       >
  //         <img
  //           src={cover}
  //           alt="Logo"
  //           style={{ width: 'auto', height: 'auto' }}
  //         />
  //       </div>
  //       <div
  //         style={{
  //           flexBasis: '40%',
  //           display: 'flex',
  //           flexDirection: 'column',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           backgroundColor: '#007bff',
  //           color: '#fff',
  //           textAlign: 'center',
  //         }}
  //       >
  //         <img
  //           src={logo}
  //           alt="Logo"
  //           style={{ width: '175px', height: '75px' }}
  //         />
  //         <div style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '20px' }}>
  //           My Article Title
  //         </div>
  //       </div>
  //     </div>
  //   ),
  //   {
  //     width: 1200,
  //     height: 628,
  //   }
  // );
};

export default handle;

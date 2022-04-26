import Head from 'next/head';

const BaseHead = ({
  title = 'فروشگاه بهترینو',
  description = 'فروش انواع محصولات',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default BaseHead;

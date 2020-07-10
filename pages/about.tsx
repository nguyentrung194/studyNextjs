import Layout from '../components/Layout/layout';
import Head from 'next/head';

export default () => {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel='icon' href='/logo-mhk.png' />
      </Head>
      <Layout>
        <h1>About</h1>
      </Layout>
    </>
  );
};

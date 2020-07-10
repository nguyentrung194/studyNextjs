import Head from 'next/head';
import Layout from '../components/Layout/layout';
import Header from '../components/Header/header';
import Feature from '../components/Feature/feature';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/Date/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  let count = 1;
  return (
    <>
      <Head>
        <title>Mahouka</title>
        <link rel='icon' href='/logo-mhk.png' />
      </Head>
      <Layout>
        <Header />
        <p>I'm a newbie developer</p>
        <Feature />
        <section>
          <h2> Blog</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => {
              return (
                <li key={id}>
                  <Link href='/posts/[id]' as={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small>
                    <Date dateString={date} />
                  </small>
                </li>
              );
            })}
          </ul>
        </section>
      </Layout>
    </>
  );
}

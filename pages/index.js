import Head from 'next/head';
import About from "../components/About";
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>cells port</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome to my new portfolio and blog!</p>
        <br />
        <p>FYI, This site is a work in progress...</p>
      </section>
<br />
      <section className={utilStyles.headingSm}>
        <p>My name is cellfade! I am a product designer by day and developer/digital artist by night. I have 7+ years experience in product and ux/ui design, but have recently focused on service design at enterprise-scale.</p>
        <br />
         <p>Classically trained and curious about new technologies, I am constantly exploring the unfolding digital environment around us.</p>
        <br />
        <p>Find me on <a href="https://twitter.com/cellfade">Twitter</a>!</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>My musings</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
      <section className={utilStyles.headingSm}>
      <p>
          (This website was built using this {' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a> template.) 
        </p>
        </section>
    </Layout>
  );
}

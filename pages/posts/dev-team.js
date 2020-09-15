import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'

export default function DevTeam({ allPostsData }) {
  return (
    <Layout dev-team>

      <Head>
        <title>DEV Team</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Telecommunication Engineer currently based in Paris, France.</p>
        <p>
          Check out my{' '}
          <a href="https://github.com/querciak" className={utilStyles.githublink}>GitHub Portfolio</a>.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>News</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>

      

    </Layout>
  )
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

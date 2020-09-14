import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function DevTeam() {
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

      

    </Layout>
  )
}
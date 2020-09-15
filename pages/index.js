import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/slacktn-logo.ico"/>
      </Head>

      <header className={styles.header}>
        <h3>
          <Link href="/"><a>Home</a></Link>
        </h3>
      </header>

      <main className={styles.main}>
        <h4 className={styles.title}>
          Welcome to <Link href="https://www.slacklinetrentino.com" className={styles.iglink}><a>Slackline Trentino</a></Link>
        </h4>

        <p className={styles.description}>
          Safety is our first priority!{' '}
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        <div className={styles.grid}>

          <a
            href="posts/send-line-position"
            className={styles.card}
          >
            <h3>Report your line &rarr;</h3>
            <p>
              Notify your position to the 
              <text className={styles.bold}> helicopter rescue unit</text>.
            </p>
          </a>

          <a href="posts/info-about-us" className={styles.card}>
            <h3>Info &rarr;</h3>
            <p>
              Learn more about our association.
            </p>
          </a>

          {/* Remove comment below to have the card to go to DEV-team */}

          {/* <a href="posts/dev-team" className={styles.card}>
            <h3>Dev Team &rarr;</h3>
            <p>
              Meet the developer.
            </p>
          </a> */}

        </div>
      </main>

      <footer className={styles.footer}>
        <Link href="https://github.com/querciak">
          <a>
            Developed by{' '}
            <img src="/slacktn-logo-dev.ico" alt="SlackTN logo" className={styles.slacktn} />
          </a>
        </Link>
      </footer>
    </div>
  )
}

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SlackTN ASD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.instagram.com/slackline_trentino/" className={styles.iglink}> Slackline Trentino</a>
        </h1>

        <p className={styles.description}>
          Safety is our first priority!{' '}
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        <div className={styles.grid}>

          <a
            href="posts/info-about-me"
            className={styles.card}
          >
            <h3>Report you line &rarr;</h3>
            <p>
              Notify your position to the 
              <text className={styles.bold}> helicopter rescue core</text>.
            </p>
          </a>

          <a href="posts/info-about-me" className={styles.card}>
            <h3>Info about us &rarr;</h3>
            <p>
              Learn more about our association.
            </p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.instagram.com/slackline_trentino/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Offered with {' '}
          <img src="/heart.ico" alt="heart" className={styles.heart} />
          by{' '}
          <img src="/slacktn-logo.ico" alt="Slacktn Logo" className={styles.slacktn} /> */}
          Developed by{' '}
          <img src="/slacktn-logo.ico" alt="SlackTN logo" className={styles.slacktn} />
        </a>
      </footer>
    </div>
  )
}

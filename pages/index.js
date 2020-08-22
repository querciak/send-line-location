import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SlackTN ASD</title>
        <link rel="icon" href="/slacktn-logo.ico"/>
      </Head>

      <header className={styles.header}>
        <h3>
          <a href="/">Home</a>
        </h3>
      </header>

      <main className={styles.main}>
        <h4 className={styles.title}>
          Welcome to<a href="https://www.instagram.com/slackline_trentino/" className={styles.iglink}> Slackline Trentino</a>
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

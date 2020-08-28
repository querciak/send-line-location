import styles from '../../styles/Home.module.css'
import Head from 'next/head'

export default function SendLinePosition() {
    return (
        <div className={styles.containergeneral}>
            <Head>
                <title>Send position</title>
                <link rel="icon" href="/slacktn-logo.ico"/>
            </Head>

            <header className={styles.header}>
                <h3>
                    <a href="/">&larr; Home</a>
                </h3>
            </header>

            <main className={styles.maingeneral}>
                <h2>
                    Fill the form to report your line.
                </h2>




            </main>

            <footer className={styles.footer}>
                <a href="https://www.instagram.com/slackline_trentino/">
                    Developed by{' '}<img src="/slacktn-logo.ico" alt="SlackTN logo" className={styles.slacktn}/>
                </a>
            </footer>

        </div>
    )
}
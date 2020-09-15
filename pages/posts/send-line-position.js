import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function SendLinePosition() {

    return (
        <div className={styles.containergeneral}>
            <Head>
                <title>Send position</title>
                <link rel="icon" href="/slacktn-logo.ico"/>
            </Head>

            <header className={styles.header}>
                <h3>
                    <Link href="/"><a>&larr; Home</a></Link>
                </h3>
            </header>

            <main className={styles.maingeneral}>
                <h2>
                    Fill the form to report your line.
                </h2>
                



            </main>

            <footer className={styles.footer}>
                <Link href="https://github.com/querciak">
                    <a>Developed by{' '}<img src="/slacktn-logo-dev.ico" alt="SlackTN logo" className={styles.slacktn}/></a>
                </Link>
            </footer>

        </div>
    )
}

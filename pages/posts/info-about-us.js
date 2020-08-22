import styles from '../../styles/Home.module.css'
import Head from 'next/head'

export default function InfoAboutUs() {
    return (
        <div className={styles.containergeneral}>
            <Head>
                <title>Info</title>
                <link rel="icon" href="/slacktn-logo.ico"/>
            </Head>

            <header className={styles.header}>
                <h3>
                    <a href="/">Home</a>
                </h3>
            </header>

            <main className={styles.maingeneral}>
                <h2>
                    About Us.
                </h2>

                <div>
                    <p className={styles.cardnoborder}>
                        We are just a bunch of crazy guys with a common passion.
                        Since 2018, we founded Slackline Trentino ASD to share our 
                        art and help this beautiful sport to grow in Italy.
                    </p>
                </div>
                
                <img src="/cozzio-alien.ico" className={styles.cardimage}/>

            </main>

            <footer className={styles.footer}>
                <a href="https://www.instagram.com/slackline_trentino/">
                    Developed by{' '}<img src="/slacktn-logo.ico" alt="SlackTN logo" className={styles.slacktn}/>
                </a>
            </footer>

        </div>
    )
}
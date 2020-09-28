import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { Button } from 'reactstrap'

export default function SendLinePosition() {

    return (
        <div className={styles.containergeneral}>
            <Head>
                <title>Send position</title>
                <link rel="icon" href="/slacktn-logo.ico"/>
            </Head>

            <header className={styles.header}>
                <div>
                    <nav>
                        <h5>
                            <Link href="/"><a className={styles.aaheader}>&larr; Home</a></Link>
                        </h5>
                    </nav>
                </div>
                {/* <h5>
                    <Link href="/"><a className={styles.aaheader}>&larr; Home</a></Link>
                </h5> */}
            </header>

            <main className={styles.maingeneral}>
                <h2 className={styles.description}>
                    Fill the form to report your line.
                </h2>
            
                {/* <div
                    className="container-fluid"
                    style={{ backgroundColor: "#7E57C2", color: "white" }}
                    >
                    <div className="container">
                        <div className="flexbox">

                            <div className="row my-4">
                            <div className="col-lg-6 mb-4">
                                <input
                                type="name"
                                className="inputBox"
                                placeholder="Your Name"
                                />
                            </div>
                            <div className="col-lg-6 mb-4">
                                <input
                                type="email"
                                className="inputBox"
                                placeholder="Your Email"
                                />
                            </div>
                            </div>
                            <textarea rows = "2" className="inputBox mb-4" placeholder="Your Message" />
                            <button className="btn btn-light mb-4 py-3">
                            Submit
                            </button>
                        </div>
                    </div>
                </div> */}
                
                <div className={styles.grid}>

                            <div className={styles.cardsl}>
                                <h4>Name:</h4>
                                <input
                                type="name"
                                className="inputBox"
                                placeholder="Your Name"
                                />
                            </div>

                            <div className={styles.cardsl}>
                                <p>Email:</p>
                                <input
                                type="email"
                                className="inputBox"
                                placeholder="Your Email"
                                />
                            </div>

                            <div className={styles.cardsl}>

                                <p>Phone Number:</p>

                                <input
                                type="text"
                                placeholder="Add your national prefix"
                                />

                            </div>
                            
                            <div className={styles.cardsl}>
                                
                                <div>
                                    <p>GPS location:</p>
                                    <p>Look it up on any maps service and make sure to select the right spot. Then copy/paste.</p>
                                </div>

                                <div>
                                    <input
                                    type="text"
                                    placeholder="anchor pt.1"
                                    />
                                    
                                    <input
                                    type="text"
                                    placeholder="anchor pt.2"
                                    />
                                </div>

                            </div>

                            <div className={styles.cardsl}>
                                
                                <div>
                                    <p>Duration:</p>
                                    <p>Tell us for how long you will keep up your line.</p>
                                </div>

                                <div>
                                    <a>Start: </a>
                                    <input
                                    type="date"
                                    placeholder="dd/mm/yyyy"
                                    />
                                </div>

                                <div>
                                    <a>End: </a>
                                    <input
                                    type="date"
                                    placeholder="dd/mm/yyyy"
                                    />
                                </div>

                            </div>

                            {/* <textarea className={styles.cardsl} rows = "2" className="inputBox mb-4" placeholder="Additional Information" /> */}

                </div>

                {/* <button className="btn btn-light mb-4 py-3">
                    Submit
                </button> */}

                {/* Documentation @ https://react-bootstrap.github.io/components/buttons/ */}
                <Button variant="primary" size="lg" block>
                    Submit
                </Button>

            </main>

            <footer className={styles.footer}>
                <Link href="https://github.com/querciak">
                    <a className={styles.devlink}>Developed by{' '}<img src="/slacktn-logo-dev.ico" alt="SlackTN logo" className={styles.slacktn}/></a>
                </Link>
            </footer>

        </div>
    )
}

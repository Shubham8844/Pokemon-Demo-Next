import React from 'react'
import Head from "next/Head"
import styles from "./Layout.module.css"

function Layout({title,children}) {
    return (
        <div className={styles.layout}>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.layout__main}>
                {children}
            </main>
            
        </div>
    )
}

export default Layout

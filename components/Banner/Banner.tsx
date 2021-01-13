import React from 'react'
import styles from "./Banner.module.css"
import Link from "next/link"
function Banner() {
    return (
        <div className={styles.container}>
            <img src="/p_back.jpg" alt="pokemon_banner"/>
            <div className={styles.link}>
            <Link  href="/pokemon">
                <a>Explore</a>
            </Link>
            </div>
        </div>
        
    )
}

export default Banner

import React from 'react'
import styles from "./Footer.module.css"
function Footer() {
    return (
        <div className={styles.container}>
             
              Pokedex &#169; {new Date().getFullYear()} All rights reserved
        
        </div>
    )
}

export default Footer

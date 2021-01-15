import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import Link from "next/link"

export default function NavBar() {
  
  return (  
    <div className={styles.nav}>
      <Link href="/"><a>
      <img
        className={styles.nav__logo}
        src="/pokemon_t.jpg"
        alt="netflix Logo"
      />
      </a>
      
      </Link>
      
      <img
        className={styles.nav__avatar}
        src="/pokeball.svg"
        alt="smiley"
      />
    </div>
    
  );
}
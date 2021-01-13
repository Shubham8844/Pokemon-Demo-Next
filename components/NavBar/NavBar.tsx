import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";

export default function NavBar() {
  
  return (  
    <div className={styles.nav}>
      <img
        className={styles.nav__logo}
        src="/pokemon_t.jpg"
        alt="netflix Logo"
      />
      <img
        className={styles.nav__avatar}
        src="/pokeball.svg"
        alt="smiley"
      />
    </div>
    
  );
}
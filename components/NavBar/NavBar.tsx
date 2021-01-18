import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import Link from "next/link"
import { StylesProvider } from "@material-ui/core";

export default function NavBar() {
  const [show, handleShow] = useState(false);

  const handleScroll=() => {
    if (window.scrollY > 100) handleShow(true);
    else handleShow(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // when return its mean component will unmount and listner get
    //detached
    return () => {
      window.removeEventListener("scroll",handleScroll);
    };
  }, []);
   
  let second=show && "nav__white"

  //console.log(`styles.${second}`)
  //{`nav ${show && "nav__white"}`}
  //{[styles.nav,styles.scond].join("")}
  //
  const classes = [
    styles.nav,
    ...(show ? [styles.nav__white] : [])
  ];
  
  return (  
    <div className={`${styles.nav} ${show && styles.nav__white}`} >
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
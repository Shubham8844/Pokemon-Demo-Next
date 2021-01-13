import { GetStaticProps } from 'next'

import styles from '../styles/Home.module.css'
import NavBar from "../components/NavBar/NavBar"
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'



export default function Home(props) {
  return (
    <>
    <NavBar />
    <Banner />
    <Footer />

    </>
    
  )
}


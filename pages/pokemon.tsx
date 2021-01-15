import React ,{useState} from 'react'
import styles from "../styles/poke.module.css"
import {GetStaticProps} from "next"
import Layout from '../components/Layout/Layout'
import Link from 'next/link'
import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from '@material-ui/icons'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'



export const getStaticProps:GetStaticProps=async (context)=>{
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      const {results}=await res.json()
      const pokemon=results.map((result,index)=>{
            const number=("00"+(index+1)).slice(-3)
            const image=`assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png`

            return{
                ...result,
                image
            }
        })

        return {
            props:{pokemon}
        }
    } catch (error) {
      console.log(error)
    }
   
    }
  
const orderBy=(pokemon,value,direction)=>{
    if(direction=="asc"){
        return [...pokemon].sort((a,b)=>(a[value]>b[value] ? 1 :-1))
    }
    if(direction="desc"){
        return [...pokemon].sort((a,b)=>(a[value]>b[value] ? -1 : 1))
    }

    return pokemon
}

const SortArrow=({direction})=>{
    if(!direction){
        return <></>
    }
    else if(direction==="desc"){
        return(
            <div className={styles.arrow}>
                <KeyboardArrowDownRounded color="inherit"/>
            </div>
        )
    }
    else{
        return(
            <div className={styles.arrow}>
                <KeyboardArrowUpRounded color="inherit"/>
            </div>
        )
    }
    }

function pokemon({pokemon}) {
    //console.log(pokemon)
    
    const [serachItem,setSearchItem]=useState("");
    const [direction, setdirection] = useState("");
    const [value, setvalue] = useState("");
    const orderedPokemon=orderBy(pokemon,value,direction);
    const switchDirection=()=>{
        if(!direction){
            setdirection("desc")
        }
        else if(direction=="desc"){
            setdirection("asc")
        }
        else{
            setdirection(null)
        }

    }
    const setValueandDirection=(value)=>{
        switchDirection();
        setvalue(value);
    }
    return (
        <>
        <NavBar />
        <Layout title="Pokedex">
            
            <h1 className={styles.title}>POKEDEX!!!!</h1>
            <div className={styles.container_search}>
            <div className={styles.search}>
                <input type="text" placeholder="Search..." onChange={e=>setSearchItem(e.target.value)} />
            </div>
                <button className={styles.container_button} onClick={()=>setValueandDirection("name")}><div>Name</div>
                    <SortArrow direction={direction}/>
                </button>
            </div>
            <ul className={styles.maincontainer}>
                {orderedPokemon.filter((pokeman,index)=>{
                    if(serachItem==""){
                        return pokeman
                    }
                    else if (pokeman.name.toLowerCase().includes(serachItem.toLowerCase())){
                        return pokeman
                    }
                    
                }).map((pokeman,index)=>{
                    let realIndex=(pokeman.image.split("/")[6].split(".")[0]).replace(/^0+/,"")
                    //console.log(`pokeman?id=${realIndex}`)
                    return(<li className={styles.container} key={index}>
                        <Link href={`pokeman?id=${realIndex}`}>
                            <a className={styles.pokemon__anchor}>
                                <img className={styles.pokemon__image} src={`http://${pokeman.image}`} alt={pokeman.name}/>
                                <span className={styles.pokemon__number}>{index+1}</span>
                                {pokeman.name.toUpperCase()}
                            </a>
                        </Link>
                    </li>
                )})}
            </ul>
          
        </Layout>
        <Footer />
        </>
    )
}

export default pokemon

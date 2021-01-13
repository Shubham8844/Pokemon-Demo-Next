import React ,{useState} from 'react'
import styles from "../styles/poke.module.css"
import {GetStaticProps} from "next"
import Layout from '../components/Layout/Layout'
import Link from 'next/link'



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
  
  

function pokemon({pokemon}) {
    //console.log(pokemon)
    const [serachItem,setSearchItem]=useState("")
    return (
        <Layout title="Pokedex">
            <h1 className={styles.title}>Pokedex!!</h1>
            <div className={styles.search}>
                <input type="text" placeholder="Serach..." onChange={e=>setSearchItem(e.target.value)} />
            </div>
            <ul className={styles.maincontainer}>
                {pokemon.filter((pokeman,index)=>{
                    if(serachItem==""){
                        return pokeman
                    }
                    else if (pokeman.name.toLowerCase().includes(serachItem.toLowerCase())){
                        return pokeman
                    }
                    
                }).map((pokeman,index)=>{
                    let realIndex=(pokeman.image.split("/")[6].split(".")[0]).replace(/^0+/,"")
                    console.log(`pokeman?id=${realIndex}`)
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
    )
}

export default pokemon

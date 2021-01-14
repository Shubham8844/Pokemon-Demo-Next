import { GetServerSideProps } from 'next'
import React from 'react'
import Layput from "../components/Layout/Layout"
import styles from "../styles/pokeman.module.css"
import Link from "next/link"

function pokeman({pokeman}) {
    //console.log(pokeman)
    return (
        <Layput title={pokeman.name}>
            <h1 className={styles.title}>{pokeman.name[0].toUpperCase() + pokeman.name.slice(1)}</h1>

            <img src={`https://${pokeman.image}`} alt={pokeman.name} />
            <div className={styles.container}>
                <div className={styles.container1}>
                <p><span className={styles.details}>Weight: {pokeman.weight}</span></p>
                <p><span className={styles.details}>Height: {pokeman.height}</span></p>
                </div>

                <div className={styles.container2}>
                    <h2 className={styles.unordered1}>Abilities</h2>
                    <ul className={styles.unordered}>
                        {pokeman.abilities.map((item,index)=>(
                            <li className={styles.listitem} key={index}>
                                {item.ability.name}

                            </li>
                        ))}
                    </ul>
                </div>
                <h2 className={styles.types}>Types</h2>
                <ul>
                {pokeman.types.map((item,index)=>(
                        <li key={index}>{item.type.name}</li>
                    ))
                }
                </ul>
            </div>
            <p className={styles.phome}>
            <Link href="/pokemon">
                <a className={styles.home}>Home</a>
            </Link>
            </p>
            
        </Layput>
    )
}
export const getServerSideProps:GetServerSideProps=async ({query})=>{
    const id=query.id;
    console.log(id)
    try {
        const res=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokeman=await res.json();
        const newIndex=("00" + id).slice(-3);
        const image=`assets.pokemon.com/assets/cms2/img/pokedex/full/${newIndex}.png`
        pokeman.image=image;
        return{
            props:{
                pokeman
            },
        }


    } catch (error) {
        console.log(error)
    }
}
export default pokeman

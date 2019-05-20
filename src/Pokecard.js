import React, { Component } from 'react'
import {genImage} from './helper'
import {pokemons} from '../src/assets/pokemons'
import './App.css'


export class Pokecard extends Component {
    
    
  render() {
   const ids=Object.keys(pokemons)
   const arrIds=ids.map((id)=>{return parseInt(id)}) 
   const genIndex=()=>{return Math.floor(Math.random()*(arrIds.length))}
   let newID=arrIds[genIndex()]
   let newData= pokemons[newID]
   let newPower= newData.defense+newData.attack
   let newName=newData.name
   
   
    return (
      <div className="Pokecard">
       <div>
          <h1 className="Pokecard-title">{newName}</h1>
          <p ><img className="Pokecard-img" src={genImage(newID)} alt={`pokemon ${newData.name}`}/></p>
          <p className="Pokecard-type">type: {newData.type}</p>
          <p className="Pokecard-power">power: {newPower}</p>
          </div>
          
       </div>
    )
  }
}

export default Pokecard


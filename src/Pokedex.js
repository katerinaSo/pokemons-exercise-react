import React, { Component } from "react";
import Card from "./Pokecard";
import "./App.css"

export class Pokedex extends Component {
  render() {
    return <div >
        <div className='Pokedex-hand'>
        <Card/>
        <Card/>
        <Card/>

        </div>
        <div className='Pokedex-hand'>
        <Card/>
        <Card/>
        <Card/>

        </div>
        
        </div>
  }
}

export default Pokedex;

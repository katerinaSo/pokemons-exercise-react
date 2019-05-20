import React, { Component } from "react";
import Card from "./Pokecard";
import { pokemons } from "../src/assets/pokemons";
import "./App.css";

export class Pokedex extends Component {
  render() {
    const ids = Object.keys(pokemons);
    const arrIds = ids.map(id => {
      return parseInt(id);
    });
    const genIndex = () => {
      return Math.floor(Math.random() * 25);
    };
    let cardOneId=arrIds[genIndex()]
    let cardTwoId=arrIds[genIndex()]
    let cardThreeId=arrIds[genIndex()]
    let cardFourId=arrIds[genIndex()]
    let cardFiveId=arrIds[genIndex()]
    let cardSixId=arrIds[genIndex()]
  
    return (
      <div>
        <div className="Pokedex-hand">
          <Card newID={cardOneId}
          newData={pokemons[cardOneId]}
          />
          <Card newID={cardTwoId}
          newData={pokemons[arrIds[cardTwoId]]}
          />
          <Card newID={ cardThreeId}
          newData={pokemons[arrIds[cardThreeId]]}
          />
        </div>
        <div className="Pokedex-hand">
          <Card newID={ cardFourId}
          newData={pokemons[arrIds[cardFourId]]}
          />
          <Card newID={cardFiveId}
          newData={pokemons[arrIds[cardFiveId]]}
          />
          <Card newID={ cardSixId}
          newData={pokemons[arrIds[cardSixId]]}
          />
        </div>
      </div>
    );
  }
}

export default Pokedex;

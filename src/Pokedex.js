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
      return Math.floor(Math.random() * arrIds.length);
    };
    return (
      <div>
        <div className="Pokedex-hand">
          <Card
            newID={arrIds[genIndex()]}
            newData={pokemons[arrIds[genIndex()]]}
          />
          <Card
            newID={arrIds[genIndex()]}
            newData={pokemons[arrIds[genIndex()]]}
          />
          <Card
            newID={arrIds[genIndex()]}
            newData={pokemons[arrIds[genIndex()]]}
          />
        </div>
        <div className="Pokedex-hand">
          <Card
            newID={arrIds[genIndex()]}
            newData={pokemons[arrIds[genIndex()]]}
          />
          <Card
            newID={arrIds[genIndex()]}
            newData={pokemons[arrIds[genIndex()]]}
          />
          <Card
            newID={arrIds[genIndex()]}
            newData={pokemons[arrIds[genIndex()]]}
          />
        </div>
      </div>
    );
  }
}

export default Pokedex;

import React, { Component } from "react";
import { genImage } from "./helper";
import "./App.css";

export class Pokecard extends Component {
  render() {
    const { newID, newData } = this.props;

    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{newData.name}</h1>
        <p>
          <img
            className="Pokecard-img"
            src={genImage(newID)}
            alt={`pokemon ${newData.name}`}
          />
        </p>
        <p className="Pokecard-type">type: {newData.type}</p>
        <p className="Pokecard-power">power: {newData.attack+newData.defense}</p>
      </div>
    );
  }
}

export default Pokecard;

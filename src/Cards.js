import React, { useState, useEffect } from "react";
import { GetPokemonResource } from "./Services";
import SingleCard from "./SingleCard";
import axios from "axios";
import "./styles.css";
export default function Cards(props) {
  useEffect(() => {});
  return (
    <div>
      {props.allPokemons ? (
        <div className="grid-container">
          {props.allPokemons
            ? props.allPokemons.map((item, i) => (
                <div className="grid-item">
                  <SingleCard name={item.name} />
                </div>
              ))
            : ""}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

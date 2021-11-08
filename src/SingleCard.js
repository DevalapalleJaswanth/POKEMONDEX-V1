import React, { useEffect, useState } from "react";
import { GetPokemon } from "./Services";
import { Link } from "react-router-dom";
export default function SingleCard(props) {
  const [pokemon, setPokemon] = useState();
  const cardcallback = (data) => {
    setPokemon(data);
  };
  useEffect(() => {
    GetPokemon(props.name, cardcallback);
  });
  return (
    <div>
      <img
        src={
          pokemon !== undefined
            ? pokemon.sprites.other.dream_world.front_default === null
              ? pokemon.sprites.front_default
              : pokemon.sprites.other.dream_world.front_default
            : ""
        }
        alt={pokemon !== undefined ? pokemon.name : ""}
        height="auto"
        width="100%"
      />
      {/* <div>{pokemon !== undefined ? pokemon.name : ""}</div>*/}
    </div>
  );
}

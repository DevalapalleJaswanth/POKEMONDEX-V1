import React, { useState } from "react";
import Search from "./Search";
import pokeball from "./images/pokeball.png";
export default function App() {
  const [pokemon, setPokemon] = useState();
  const resultfunc = (data) => {
    setPokemon(data);
  };
  return (
    <div>
      <Search resultfunc={resultfunc} />
      <div>
        {console.log(pokemon, pokeball)}
        <img
          src={
            pokemon !== undefined
              ? pokemon.sprites.other.home.front_default
              : pokeball
          }
          alt={pokemon !== undefined ? pokemon.name : ""}
          height="150px"
          width="150px"
        />
      </div>
    </div>
  );
}
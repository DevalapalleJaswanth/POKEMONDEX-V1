import React, { useState } from "react";
import Search from "./Search";
export default function App() {
  const [pokemon, setPokemon] = useState();
  const resultfunc = (data) => {
    setPokemon(data);
  };
  return (
    <div>
      <Search resultfunc={resultfunc} />
      <div>
        {console.log(pokemon)}
        <img
          src={
            pokemon !== undefined
              ? pokemon.sprites.other.home.front_default
              : ""
          }
          alt=""
          height="200px"
          width="200px"
        />
      </div>
    </div>
  );
}

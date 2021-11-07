import React, { useState, useContext } from "react";
import Search from "./Search";
import pokeball from "./images/pokeball.png";
import AuthContext from "./AuthContext";
import Cards from "./Cards";
export default function Home() {
  const [pokemon, setPokemon] = useState();
  const [pokemonList, setPokemonList] = useState();
  const h = useContext(AuthContext);

  const resultfunc = (data) => {
    setPokemonList(data);
    //console.log(pokemonList);
  };

  return (
    <div>
      <Search resultfunc={resultfunc} />
      <div>
        {console.log(pokemon, pokeball, h.allPokemon)}
        <img
          src={
            pokemon !== undefined
              ? pokemon.sprites.other.dream_world.front_default === null
                ? pokemon.sprites.front_default
                : pokemon.sprites.other.dream_world.front_default
              : pokeball
          }
          alt={pokemon !== undefined ? pokemon.name : ""}
          height="250px"
          width="250px"
        />
      </div>
      <div>
        <Cards allPokemons={pokemonList} />
      </div>
    </div>
  );
}

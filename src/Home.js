import React, { useState, useContext } from "react";
//import Search from "./Search";
import pokeball from "./images/pokeball.png";
import AuthContext from "./AuthContext";
import Cards from "./Cards";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Details from "./Details";

export default function Home(props) {
  const [pokemon, setPokemon] = useState();
  const [pokemonList, setPokemonList] = useState();
  const h = useContext(AuthContext);

  const handler = (e) => {
    var name;
    if (e.target.value) {
      name = e.target.value;
    } else {
      name = " ";
    }
    console.log(name, h.allPokemon);
    var n;
    if (name !== " " || name !== undefined || name !== null) {
      n = name.split("");
      searchfunc(n);
    } else {
      setPokemonList([]);
    }
  };
  const searchfunc = (name) => {
    var list = [];
    h.allPokemon.results.map((item, i) => {
      var k = 0;
      name.map((ch, j) => {
        if (item.name.charAt(j) === ch) {
          k = k + 1;
        }
      });

      if (k === name.length) {
        list.push(item);
      }
    });

    setPokemonList(list);
  };

  return (
    <div
      style={{
        backgroundColor: "#2196f3",
        width: "100%",
        height: "100%",
        boxSizing: "border-box"
      }}
    >
      <input
        style={{ padding: "10px", margin: "10px" }}
        type="text"
        onChange={(e) => {
          handler(e);
        }}
      />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Cards allPokemons={pokemonList} />}
          ></Route>
          <Route exact path="/card/:id" element={<Details />}></Route>
        </Routes>
      </Router>

      <div>
        {console.log(pokemonList, pokeball, h.allPokemon)}
        {/*<img
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
        />*/}
      </div>
    </div>
  );
}

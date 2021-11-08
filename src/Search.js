import React, { useState, useContext } from "react";
import axios from "axios";
import { GetPokemonResource } from "./Services";
import Cards from "./Cards";
import AuthContext from "./AuthContext";
export default function Search(props) {
  const [pokemonList, setPokemonList] = useState();
  const s = useContext(AuthContext);
  const handler = (e) => {
    var name;
    if (e.target.value) {
      name = e.target.value;
    } else {
      name = " ";
    }
    console.log(name, s.allPokemon);
    var n;
    if (name !== " " || name !== undefined || name !== null) {
      n = name.split("");
      searchfunc(n);
    } else {
      //props.resultfunc([]);
      setPokemonList([]);
    }
  };
  const searchfunc = (name) => {
    var list = [];
    s.allPokemon.results.map((item, i) => {
      var k = 0;
      name.map((ch, j) => {
        if (item.name.charAt(j) === ch) {
          k = k + 1;
        }
      });

      if (k === name.length) {
        //GetPokemonResource(item.url, props.cardscallback);
        list.push(item);
      }
    });

    setPokemonList(list);
    //callbackfunc(list);
  };

  return (
    <div>
      <input
        style={{ padding: "10px", margin: "10px" }}
        type="text"
        onChange={(e) => {
          handler(e);
        }}
      />
      <div>
        <Cards allPokemons={pokemonList} />
      </div>
    </div>
  );
}

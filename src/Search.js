import React, { useState, useContext } from "react";
import axios from "axios";
import { GetPokemonResource } from "./Services";
import AuthContext from "./AuthContext";
export default function Search(props) {
  const s = useContext(AuthContext);
  const handler = (name) => {
    console.log(name, s.allPokemon);
    var n = name.split("");
    searchfunc(n, props.resultfunc);
  };
  const searchfunc = (name, callbackfunc) => {
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
    // console.log(list);
    callbackfunc(list);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          handler(e.target.value);
        }}
      />
    </div>
  );
}

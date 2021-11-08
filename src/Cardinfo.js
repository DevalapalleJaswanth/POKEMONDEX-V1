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
      <div>
        <div style={{ dispaly: "flex", fontSize: "30px" }}> Types:</div>
        {pokemon !== undefined
          ? pokemon.types.map((item, i) => (
              <div style={{ dispaly: "flex", fontSize: "20px" }}>
                <div>{item.type.name}</div>
              </div>
            ))
          : ""}
      </div>
      <br></br>

      <div>
        <div style={{ dispaly: "flex", fontSize: "30px" }}> Ability:</div>
        <div style={{ dispaly: "flex", fontSize: "20px" }}>
          {pokemon !== undefined
            ? pokemon.abilities.map((item, i) => <div>{item.ability.name}</div>)
            : ""}
        </div>
      </div>
    </div>
  );
}

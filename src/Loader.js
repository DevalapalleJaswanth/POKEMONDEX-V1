import React from "react";
import pokeball from "./images/pokeball.png";
import "./styles.css";
export default function Loader() {
  return (
    <div className="centered">
      <div>
        <img className="rotate" src={pokeball} alt="" />
      </div>
      <div>PokeDex is loading...</div>
    </div>
  );
}

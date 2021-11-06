import React, { useState } from "react";
import { GetPokemon } from "./Services";

export default function Seach(props) {
  const [name, setName] = useState("");

  const handler = (name) => {
    console.log(name);
    GetPokemon(name, props.resultfunc);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handler(name);
        }}
      >
        Search
      </button>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import SingleCard from "./SingleCard";
import "./styles.css";
import pokeball from "./images/pokeball.png";
export default function Cards(props) {
  return (
    <div>
      {props.allPokemons ? (
        <div className="grid-container">
          {props.allPokemons.map((item, i) => (
            <div key={i} className="grid-item">
              <Link to={`card/${item.name}`}>
                <SingleCard name={item.name} />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>
          Welcome to Pokedex.
          <img src={pokeball} alt="" />
        </div>
      )}
    </div>
  );
}

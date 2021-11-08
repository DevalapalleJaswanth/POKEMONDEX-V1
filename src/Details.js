import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SingleCard from "./SingleCard";
import Cardinfo from "./Cardinfo";
import pokeball from "./images/pokeball.png";
import "./styles.css";
const Details = (props) => {
  let params = useParams();
  return (
    <div>
      <Link to="/" style={{ display: "flex", color: "black" }}>
        <img src={pokeball} className="rotate" alt="" />
        Back
      </Link>
      <div className="grid-container">
        <div className="grid-item">
          <SingleCard name={params.id} />
        </div>
        <div className="grid-item">
          <Cardinfo name={params.id} />
        </div>
      </div>
    </div>
  );
};

export default Details;

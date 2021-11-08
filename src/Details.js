import React from "react";
import { useParams } from "react-router-dom";
import SingleCard from "./SingleCard";
const Details = (props) => {
  let params = useParams();
  return (
    <div>
      <SingleCard name={params.id} />
    </div>
  );
};

export default Details;

import React, { useState, useEffect } from "react";
import { GetAllPokemon } from "./Services";
import Loader from "./Loader";
import AuthContext from "./AuthContext";
import Home from "./Home";

export default function App() {
  const [p, setP] = useState(null);
  const allresultfunc = (data) => {
    setTimeout(() => {
      setP(data);
    }, 2000);
  };
  useEffect(() => {
    GetAllPokemon(allresultfunc);
  }, []);
  return (
    <div>
      <AuthContext.Provider value={{ allPokemon: p }}>
        {p === null || p === undefined ? <Loader /> : <Home />}
      </AuthContext.Provider>
    </div>
  );
}

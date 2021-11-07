import axios from "axios";

export async function GetPokemon(name, callbackfunc) {
  await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((resp) => {
      if (resp.status !== 200) {
        throw new Error("bad request");
      } else {
        callbackfunc(resp.data);
      }
    })
    .catch((err) => console.error(err));
}

export async function GetPokemonResource(url, callbackfunc) {
  await axios
    .get(url)
    .then((resp) => {
      if (resp.status !== 200) {
        throw new Error("bad request");
      } else {
        callbackfunc(resp.data);
      }
    })
    .catch((err) => console.error(err));
}

export async function GetAllPokemon(callbackfunc) {
  await axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=1118`)
    .then((resp) => {
      if (resp.status !== 200) {
        throw new Error("bad request");
      } else {
        callbackfunc(resp.data);
      }
    })
    .catch((err) => console.error(err));
}

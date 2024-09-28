import { useState } from "react"
import { reqPokemon } from "../service/pokemon"


export const usePokemon = () => {
    const [infoPokemon, setInfoPokemon] = useState([])

    const handleGetPokemon = async (pokemon, e) => {
      e.preventDefault();
      const data = await reqPokemon(pokemon);
      if (data) {
        setInfoPokemon(data);
      }
    }
  return {
    handleGetPokemon,
    infoPokemon
  }
}
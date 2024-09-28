import { usePokemon } from "../hooks/UsePokemon"
import { BuscarPokemon } from "./BuscarPokemon"
import { ContenedorPokemon } from "./ContenedorPokemon"


export const PokemonApp = () => {
    const {handleGetPokemon, infoPokemon} = usePokemon()
  
    return (
    <>
      <BuscarPokemon handleGetPokemon={handleGetPokemon}/>
      <ContenedorPokemon infoPokemon={infoPokemon}/>
    </>
  )
}
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SinglePokemon = ({}) => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [name]);

  if (!pokemon) {
    return <h1> Loading....</h1>;
  }
  return (
    <div className="pokemon-detail">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default SinglePokemon;

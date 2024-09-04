import { Link } from "react-router-dom";
import "./ListAllPokemons.css";

export default function ListAllPokemons({ error, pokemonDetails }) {
  return (
    <div className="container">
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul className="pokemon-list">
          {pokemonDetails.map((pokemon) => (
            <li className="pokemon-item" key={pokemon.name}>
              <Link to={`/pokemon/${pokemon.name}`}>
                {pokemon.name} <img src={pokemon.sprite} alt={pokemon.name} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

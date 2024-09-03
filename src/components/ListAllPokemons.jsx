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
              <a href={pokemon.url}>
                {pokemon.name} <img src={pokemon.sprite} alt={pokemon.name} />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

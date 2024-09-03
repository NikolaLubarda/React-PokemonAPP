import { useEffect, useState } from "react";
import ListAllPokemons from "./ListAllPokemons";
import PaginationButton from "./PaginationButtons";
import SearchBar from "./SearchBar";

const URL = "https://pokeapi.co/api/v2/pokemon/";

export default function SearchPokemon() {
  const [query, setQuery] = useState([]);
  const [error, setError] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  async function fetchPokemon(url = URL) {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setQuery(data.results);
      setPrevPage(data.previous);
      setNextPage(data.next);

      const details = await Promise.all(
        data.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const detailsData = await response.json();
          return {
            name: pokemon.name,
            url: pokemon.url,
            sprite: detailsData.sprites.front_default,
          };
        })
      );
      setPokemonDetails(details);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };
  const filteredPokemons = pokemonDetails.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ListAllPokemons
        query={query}
        error={error}
        pokemonDetails={filteredPokemons}
      />
      <PaginationButton
        prevPage={prevPage}
        nextPage={nextPage}
        fetchPokemon={fetchPokemon}
      />
    </div>
  );
}

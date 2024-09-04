import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./SinglePokemon.css";

function SinglePokemon() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [showAbilities, setShowAbilities] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showMoves, setShowMoves] = useState(false);
  const [showHeldItems, setShowHeldItems] = useState(false);
  const [showForms, setShowForms] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [name]);

  if (!pokemon) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="pokemon-container">
      <Link to="/" className="back-button">
        Back to Home
      </Link>
      <h1 className="pokemon-name">{pokemon.name}</h1>
      <div className="pokemon-images">
        <img
          src={pokemon.sprites.front_default}
          alt={`${pokemon.name} front`}
          className="pokemon-image"
        />
        <img
          src={pokemon.sprites.back_default}
          alt={`${pokemon.name} back`}
          className="pokemon-image"
        />
        <img
          src={pokemon.sprites.front_shiny}
          alt={`${pokemon.name} shiny`}
          className="pokemon-image"
        />
      </div>
      <div className="pokemon-details">
        <button
          className="details-button"
          onClick={() => setShowAbilities(!showAbilities)}
        >
          {showAbilities ? "Hide Abilities" : "Show Abilities"}
        </button>
        {showAbilities && (
          <div className="details-content">
            <h2 className="details-title">Abilities</h2>
            <ul className="abilities-list">
              {pokemon.abilities.map((abilityObj) => (
                <li key={abilityObj.ability.name} className="ability-item">
                  {abilityObj.ability.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          className="details-button"
          onClick={() => setShowStats(!showStats)}
        >
          {showStats ? "Hide Stats" : "Show Stats"}
        </button>
        {showStats && (
          <div className="details-content">
            <p className="pokemon-weight">
              Weight: {pokemon.weight} hectograms
            </p>
            <p className="pokemon-height">
              Height: {pokemon.height} decimetres
            </p>
            <p className="pokemon-experience">
              Base Experience: {pokemon.base_experience}
            </p>
            <p className="pokemon-types">
              Types:{" "}
              {pokemon.types.map((typeObj) => typeObj.type.name).join(", ")}
            </p>
            <p className="pokemon-stats">
              Stats:{" "}
              {pokemon.stats
                .map((statObj) => `${statObj.stat.name}: ${statObj.base_stat}`)
                .join(", ")}
            </p>
          </div>
        )}

        <button
          className="details-button"
          onClick={() => setShowMoves(!showMoves)}
        >
          {showMoves ? "Hide Moves" : "Show Moves"}
        </button>
        {showMoves && (
          <div className="details-content">
            <p className="pokemon-moves">
              Moves:{" "}
              {pokemon.moves.map((moveObj) => moveObj.move.name).join(", ")}
            </p>
          </div>
        )}

        <button
          className="details-button"
          onClick={() => setShowHeldItems(!showHeldItems)}
        >
          {showHeldItems ? "Hide Held Items" : "Show Held Items"}
        </button>
        {showHeldItems && (
          <div className="details-content">
            <p className="pokemon-held-items">
              Held Items:{" "}
              {pokemon.held_items
                .map((itemObj) => itemObj.item.name)
                .join(", ")}
            </p>
          </div>
        )}

        <button
          className="details-button"
          onClick={() => setShowForms(!showForms)}
        >
          {showForms ? "Hide Forms" : "Show Forms"}
        </button>
        {showForms && (
          <div className="details-content">
            <p className="pokemon-forms">
              Forms: {pokemon.forms.map((formObj) => formObj.name).join(", ")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SinglePokemon;

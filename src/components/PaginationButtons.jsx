import React from "react";
import "./PaginationButton.css"; // Adjust the path to your CSS file

export default function PaginationButton({ prevPage, nextPage, fetchPokemon }) {
  function handleNextPage() {
    if (nextPage) {
      fetchPokemon(nextPage);
    }
  }

  function handlePrevPage() {
    if (prevPage) {
      fetchPokemon(prevPage);
    }
  }

  return (
    <div className="pagination-buttons">
      <button
        className="pagination-button"
        onClick={handlePrevPage}
        disabled={!prevPage}
      >
        PREVIOUS
      </button>
      <button
        className="pagination-button"
        onClick={handleNextPage}
        disabled={!nextPage}
      >
        NEXT
      </button>
    </div>
  );
}

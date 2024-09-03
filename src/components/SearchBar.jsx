import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search Pokémon"
        onChange={handleChange}
        className="search-bar"
      />
    </div>
  );
}

import { useState } from "react";
import "./App.css";

import SearchPokemon from "./components/FetchAPI";

function App() {
  return (
    <div>
      <div className="container1">
        <h1>P O K E M O N S</h1>
      </div>
      <SearchPokemon />
    </div>
  );
}

export default App;

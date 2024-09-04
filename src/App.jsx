import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SearchPokemon from "./components/FetchAPI";
import SinglePokemon from "./components/SinglePokemon";

function App() {
  return (
    <Router>
      <div>
        <div className="container1">
          <h1>P O K E M O N S</h1>
        </div>
        <Routes>
          <Route path="/" element={<SearchPokemon />} />
          <Route path="/pokemon/:name" element={<SinglePokemon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

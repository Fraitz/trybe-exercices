import './App.css';
import Pokedex from './components/pokedex.jsx';
import pokemon from './data';

// import Pokedex from './pokedex.jsx'

function App() {
  return (
    <main className="main-container">
      <Pokedex pokemonsInfo={ pokemon }/>
    </main>
  );
}

export default App;

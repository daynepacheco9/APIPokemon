import './App.css';
import { Route, Routes } from 'react-router-dom';
import FormMusica from './pages/FormMusica';
import PokemonGeral from './pages/PokemonGeral';
import Pokemon from './pages/Pokemon';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<FormMusica/>} />
        <Route path='/pokemons' element={<PokemonGeral/>} />
        <Route path='/:pokemon' element={<Pokemon/>} />
      </Routes>
    </>
  );
}

export default App;

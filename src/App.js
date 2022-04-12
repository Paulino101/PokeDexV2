import axios from "axios";
import { useState} from "react";
import Spinner from "./components/Spinner";
import DataDisplay from './components/DataDisplay';

function App() {
  // state
  const [input, setInput] = useState('');
  const [pokemon, setPokemon] = useState([])
  const [submit, setSubmit] = useState(false)
  const [pTypes, setPTypes] = useState([])
  // variables
  const url =`https://pokeapi.co/api/v2/pokemon/${input}`
  // api call
  const apiCall = async () => {
    try {
      const res = await axios.get(url);
      setPokemon(res.data)
      setPTypes(res.data.types)
      setSubmit(true)
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  // get input
  const getInput = async (e) => {
    setInput(e.target.value)
    setSubmit(false)
  }
  // handler functions for previous and next
  const handlePrevious = () => {
    setInput(pokemon.id - 1)
    apiCall()
  }

  const handleNext = () => {
    setInput(pokemon.id + 1)
    console.log(input)
    apiCall()
  }
  return(
    <>
    <h1 className="text-center m-3">Pokemon Search</h1>
     <div className="input-group ">
      <input onChange={getInput}type="text" className="form-control" placeholder="Pokemon name or number" aria-label="Recipient's username" aria-describedby="button-addon2" />
      <button onClick={apiCall} className="btn btn-outline-secondary" type="button" id="button-addon2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Submit API Request">Search</button>
     </div>
    {submit ? <DataDisplay handleNext={handleNext} handlePrevious={handlePrevious} id={pokemon.id} sprite={pokemon.sprites.other['official-artwork'].front_default} name={pokemon.name} types={pTypes}/> : <Spinner/>}
     </>
);
}

export default App;

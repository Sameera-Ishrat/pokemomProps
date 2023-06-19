import { useState,useEffect } from "react";
import PokemonRow from "./components/PokemonRow";
import Filter from "./components/Filter";
import PokemonInfo from "./components/PokemonInfo";

function App() {
  const [pokemon,setPokemon] = useState([]);
  const [filter,setFilter] = useState('');
  const [selectedItem,setSelecedtItem] = useState('');
console.log(selectedItem, "SELECTED ITEM")
  useEffect(() => {
const fetchPokemon = async() => {
  try {
    const response = await fetch( "https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json");
    if(!response.ok){
      throw new Error("Something went wrong!")
    }
    const data = await response.json();
    console.log(data);
    setPokemon(data);
  }catch(error) {
    console.log(error)
  }


}
fetchPokemon()
  },[])
  return (
    <div className="App">
      <h1>Search Pokemon Data - Using Context API</h1>
      {/* <input 
      type="text"
      placeholder="Search for pokemon here..."
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      /> */}
      <Filter
      filter={filter}
      setFilter={setFilter}
      />
      <div className="table-wrapper">
      <table width={300}>
       <thead>
        <tr>
          <th className="margin">Name</th>
          <th className="margin">Type</th>
        </tr>
       </thead>
       <tbody>
        {pokemon.filter(({ name: { english } }) =>
                  english
                    .toLocaleLowerCase()
                    .includes(filter.toLocaleLowerCase())
                )
                .slice(0, 20).map((pokemon) =>(
          // <tr key={pokemon.id}>
          //   <td className="margin">{pokemon.name.english}</td>
          //   <td className="margin">{pokemon.type.join(', ')}</td>
          //   <td>
          //     <button>Select</button>
          //   </td>
          // </tr>
          <PokemonRow       
          pokemon = {pokemon}
          onSelect={(pokemon) => setSelecedtItem(pokemon)}
          />
        ))}
       </tbody>
      </table>
      <div>
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </div>
      </div>
     
     
     
    </div>
  );
}

export default App;

import React, { useContext } from 'react'
import PokemonRow from './PokemonRow'
import PokemonContext from './PokemonContext'
const PokemonTable = () => {
    const {pokemon,filter,setSelecedtItem} = useContext(PokemonContext);
  return (
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
  )
}

export default PokemonTable
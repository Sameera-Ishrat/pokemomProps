import React from 'react'

const PokemonRow = ({pokemon,onSelect}) => {
    const selectHandler = () => {
        onSelect(pokemon)
    }
  return ( 
    <tr key={pokemon.id}>
    <td className="margin">{pokemon.name.english}</td>
    <td className="margin">{pokemon.type.join(', ')}</td>
    <td>
      <button onClick={selectHandler}>Select</button>
    </td>
  </tr>
  )
}

export default PokemonRow
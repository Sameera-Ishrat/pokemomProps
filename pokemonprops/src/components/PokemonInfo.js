import React, { useContext } from 'react'
import PokemonContext from './PokemonContext'

const PokemonInfo = () => {
  const {selectedItem} = useContext(PokemonContext)
  return (
    <table>
   <tbody>
    <h1>{selectedItem.name.english}</h1>
{Object.keys(selectedItem.base).map((key) => (
    <tr key={key}>
     <td className='margin'>{key}</td>
     <td className='margin'>{selectedItem.base[key]}</td>
    </tr>
))}
   </tbody>
    </table>
  )
}

export default PokemonInfo
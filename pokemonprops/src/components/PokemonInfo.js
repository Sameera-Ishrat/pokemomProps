import React from 'react'

const PokemonInfo = ({name,base}) => {
  return (
    <table>
   <tbody>
{Object.keys(base).map((key) => (
    <tr key={key}>
     <td>{key}</td>
     <td>{base[key]}</td>
    </tr>
))}
   </tbody>
    </table>
  )
}

export default PokemonInfo
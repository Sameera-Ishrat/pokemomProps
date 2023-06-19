import React from 'react'

const PokemonInfo = ({name,base}) => {
  return (
    <table>
   <tbody>
{Object.keys(base).map((key) => (
    <tr key={key}>
     <td className='margin'>{key}</td>
     <td className='margin'>{base[key]}</td>
    </tr>
))}
   </tbody>
    </table>
  )
}

export default PokemonInfo
import React, { useContext } from 'react'
import PokemonContext from './PokemonContext'

const Filter = () => {
  const {filter,setFilter} = useContext(PokemonContext)
  return (
   <form className='form'>
    <input 
    type="text"
    placeholder="Search for pokemon here..."
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    />
    </form>
  )
}

export default Filter
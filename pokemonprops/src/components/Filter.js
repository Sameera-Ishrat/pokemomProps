import React from 'react'

const Filter = ({filter,setFilter}) => {
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
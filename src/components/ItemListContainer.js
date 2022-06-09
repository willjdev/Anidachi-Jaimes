import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'

function ItemListContainer() {

  /* const onAdd = (stock, cant) => {
    stock === 0 ?  alert("No hay stock del producto") : alert(`Añadido a carrito: ${cant}`);
  } */
  const [pokemon, setPokemon] = useState([])
  
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20")
    .then(res => res.json())
    .then(res => setPokemon(res.results))
    .catch(error => console.error("Error: ", error))
  }, [])

  console.log(pokemon)
  

  return (
    <>
      <div className='flex flex-col items-center'>
        <ItemList pokemon={pokemon} />
      </div>
      {/* <div className='flex flex-col items-center justify-around'>
          <h1 className='flex justify-center items-center text-yellow-600'>{greeting}</h1>
          <ItemCount initial={1} stock={8} onAdd={onAdd} />
        </div> */}
        
      
    </>
  )
}

export default ItemListContainer
import React from 'react'
import Item from './Item'
export default function ItemList({pokemon}) {
  return (
    <div className='flex flex-row flex-wrap items-center justify-around gap-3 max-w-2xl my-3 px-2'>
        {pokemon?.map(poke => <Item key={poke.id}  pokeNombre={poke.name}  />)}
    </div>

  )
}

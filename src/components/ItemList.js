import React from 'react'
import Item from './Item'
export default function ItemList({productos}) {
  return (
    <div className='flex flex-row flex-wrap items-center justify-around gap-3 max-w-5xl my-3 px-2'>
        {productos?.map(item => <Item key={item.id}  id={item.id} nombre={item.name}  descripcion={item.description} imagen={item.images[0]}/>)}
    </div>

  )
}

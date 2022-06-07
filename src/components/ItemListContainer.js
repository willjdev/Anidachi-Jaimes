import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer({greeting}) {

  const onAdd = (stock, cant) => {
    stock === 0 ?  alert("No hay stock del producto") : alert(`Añadido a carrito: ${cant}`);
  }

  return (
    <>
      <div className='flex flex-col items-center justify-around'>
        <h1 className='flex justify-center items-center text-yellow-600'>{greeting}</h1>
        <ItemCount initial={1} stock={8} onAdd={onAdd} />
      </div>
    </>
  )
}

export default ItemListContainer
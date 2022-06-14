import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  let colores = ["#E24E42", "#E9B000", "#008F95", "#4717F6"]

  const [producto, setProducto] = useState();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      fetch('productos.json', {
        method: 'GET'
      })
      .then((response) => response.json())
      .then((data) => {
        setProducto(data.find((item) => item.id == 5));
        setLoading(false)
      })
      .catch((e) => {
        console.log(e)
      })
    }, 2000)

  }, [])
  

  return (
    <>
    <div>{loading && "Loading..."}</div>
    <div className='w-full h-screen bg-violet-600 flex flex-col items-center justify-center'>
      <ItemDetail producto={producto}/>
    </div>
    </>
  )
}

export default ItemDetailContainer
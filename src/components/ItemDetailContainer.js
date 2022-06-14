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
        setProducto(data);
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
    <div>
      <ItemDetail producto={producto}/>
    </div>
    </>
  )
}

export default ItemDetailContainer
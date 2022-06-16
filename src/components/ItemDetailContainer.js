import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  let colores = ["#E24E42", "#E9B000", "#008F95", "#4717F6"]

  const {id} = useParams();
  console.log(id)
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      fetch('../../productos.json', {
        method: 'GET'
      })
      .then((response) => response.json())
      .then((data) => {
        setProducto(data.find((item) => item.id == id));
        console.log(data)
        setLoading(false)
      })
      .catch((e) => {
        console.log(e)
      })
    }, 2000)

  }, [id])
  

  return (
    <>
    <div>{loading && "Loading..."}</div>
    <div className='w-full h-screen bg-violet-600 flex flex-col items-center justify-center'>
      {/* <div>{JSON.stringify(producto)}</div> */}
      <ItemDetail producto={producto}/>
    </div>
    </>
  )
}

export default ItemDetailContainer
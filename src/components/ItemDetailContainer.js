import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'
import {getFirestore, getDoc, doc} from 'firebase/firestore';


function ItemDetailContainer() {

  const {id} = useParams();

  
  const [producto, setProducto] = useState();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const itemsDb = 'ItemCollection';
    const db = getFirestore();
    const collectionProducto = doc(db, itemsDb, id);
    getDoc(collectionProducto)
    .then((res) => {
      setProducto({...res.data(), id: res.id})
      setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [id])
  
  

  return (
    <>
    <div>{loading && "Loading..."}</div>
    <div className='w-full h-full bg-zinc-900 flex flex-col items-center justify-center'>
      {producto && <ItemDetail producto={producto}/>}
    </div>
    </>
  )
}

export default ItemDetailContainer
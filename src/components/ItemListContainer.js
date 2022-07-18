import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList'
import {getFirestore, getDocs, collection, query, where} from 'firebase/firestore';
import Banner from './Banner';


function ItemListContainer() {

  const {id} = useParams();

  
  
  const [productosDb, setProdutosDb] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    const itemsDb = 'ItemCollection';
    const db = getFirestore();
    const collectionProductos = collection(db, itemsDb);
    const collectionProductosFiltro = query(collectionProductos, where("category", "==", `${id}`));
    if (id === undefined) {
      getDocs(collectionProductos)
      .then((res) => {
      setProdutosDb(res.docs.map(doc => ({id: doc.id, ...doc.data()})));
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      })
    } else {
      
      getDocs(collectionProductosFiltro).then((res) => {
        setProdutosDb(res.docs.map(doc => ({id: doc.id, ...doc.data()})));
        console.log(productosDb)
      });
    }
    setLoading(false)
}, [id])

  

  return (
    <>
      <Banner/>
      <div>{loading && "Loading"}</div>
      <div className='flex flex-col items-center bg-zinc-900'>
        <ItemList productos={productosDb} />
      </div>
      
    </>
  )
}

export default ItemListContainer
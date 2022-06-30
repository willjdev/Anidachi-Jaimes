import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList'
import {getFirestore, getDocs, collection, query, where} from 'firebase/firestore';


function ItemListContainer() {

  const {id} = useParams();

  const itemsDb = 'ItemCollection';
  const db = getFirestore();
  //const [collectionProductos, setCollectionProductos] = useState()
  const collectionProductos = collection(db, itemsDb);

  const [productosDb, setProdutosDb] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    if (id === undefined) {
      getDocs(collectionProductos).then((res) => {
        setProdutosDb(res.docs.map(doc => ({id: doc.id, ...doc.data()})));
        console.log(productosDb)
      });
    } else {
      getDocs(collectionProductos).then((res) => {
        setProdutosDb(res.docs.map(doc => ({id: doc.id, ...doc.data()})));
        console.log(productosDb)
      });
    }
    setLoading(false)
    /* const contenido = new Promise((res, rej) => {

        if (id == undefined) {
          res(productosDb)
        } else {
          res(productosDb.filter((item) => item.category == id))
        }

    }); */
}, [])

  

  return (
    <>
      <div>{loading && "Loading"}</div>
      {/* <div>{error && "Hubo un error"}</div> */}
      <div className='flex flex-col items-center'>
        <ItemList productos={productosDb} />
      </div>
      
    </>
  )
}

export default ItemListContainer
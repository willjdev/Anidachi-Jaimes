import React from 'react'
import { createContext, useState, useEffect } from 'react'

export const MiContexto = createContext();

const {Provider} = MiContexto;


export default function CartContext({children}) {

  const [cart, setCart] = useState([]);
  const [actualizador, setActualizador] = useState();

  
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("orden"))) {
      setCart(JSON.parse(localStorage.getItem("orden")))
    }
  }, [actualizador])
  

    
  const estaEnCart = (id) => {
    return cart.some(item => item.id === id)
  };

  const añadirItem = (producto, quantity) => {
    const nuevoObj = {
      ...producto, quantity
    }
    if (cart.length == 0) {
      //setCart([nuevoObj])
      localStorage.setItem("orden", JSON.stringify([nuevoObj]))
      setActualizador(1);
    } else {
      if (estaEnCart(nuevoObj.id)) {
        const revisarProducto = cart.find(item => item.id === nuevoObj.id)
        const indexProducto = cart.indexOf(revisarProducto);
        const arrayTemp = [...cart];
        arrayTemp[indexProducto].quantity += quantity;
        if (arrayTemp[indexProducto].quantity > arrayTemp[indexProducto].stock) {
          arrayTemp[indexProducto].quantity -= quantity;
        }
        //setCart(arrayTemp);
        localStorage.setItem("orden", JSON.stringify(arrayTemp))
        setActualizador(arrayTemp)
      } else {
        //setCart([...cart, nuevoObj]);
        localStorage.setItem("orden", JSON.stringify([...cart, nuevoObj]))
        setActualizador([...cart, nuevoObj])
      }
    }
  };

  const vaciarCart = () => {
    setCart([]);
    localStorage.clear();
    setActualizador(4)
  };

  const borrarItem = (id) => {
    //setCart(cart.filter(item => item.id !== id));
    localStorage.clear(); 
    localStorage.setItem("orden", JSON.stringify(cart.filter(item => item.id !== id)));
    setActualizador(cart.filter(item => item.id !== id))
  };

  const cantItem = () => {
    return cart.reduce((acc, item) => acc += item.quantity, 0)
  };

  const precioItem = () => {
    return cart.reduce((acc, item) => acc += item.quantity * item.price, 0)
  };
  


  return <Provider value={{estaEnCart, añadirItem, vaciarCart, borrarItem, cantItem, precioItem, cart}}>{children}</Provider>

}

import React from 'react'
import { createContext, useState } from 'react'

export const MiContexto = createContext();

const {Provider} = MiContexto;


export default function CartContext({children}) {

  const [cart, setCart] = useState([]);
    
  const estaEnCart = (id) => {
    return cart.some(item => item.id === id)
  };

  const añadirItem = (producto, quantity) => {
    const nuevoObj = {
      ...producto, quantity
    }
    if (cart.length == 0) {
      setCart([nuevoObj])
    } else {
      if (estaEnCart(nuevoObj.id)) {
        const revisarProducto = cart.find(item => item.id === nuevoObj.id)
        const indexProducto = cart.indexOf(revisarProducto);
        const arrayTemp = [...cart];
        arrayTemp[indexProducto].quantity += quantity;
        setCart(arrayTemp);
      } else {
        setCart([...cart, nuevoObj]);
      }
    }
    //console.log(cart)
  };

  const vaciarCart = () => {
    setCart([]);
  };

  const borrarItem = (id) => {
    return setCart(cart.filter(item => item.id !== id));
  };

  const cantItem = () => {
    return cart.reduce((acc, item) => acc += item.quantity, 0)
  };

  const precioItem = () => {
    return cart.reduce((acc, item) => acc += item.quantity * item.price, 0)
  };
  


  return <Provider value={{estaEnCart, añadirItem, vaciarCart, borrarItem, cantItem, precioItem, cart}}>{children}</Provider>

}

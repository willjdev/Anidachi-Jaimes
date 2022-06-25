import React from 'react'
import { createContext, useState } from 'react'

export const MiContexto = createContext();

const {Provider} = MiContexto;


export default function CartContext({children}) {

    const [cart, setCart] = useState([]);
    

    const isInCart = (id) => {
      return cart.some(item => item.id === id)
    };

    const addItem = (producto, quantity) => {
      const nuevoObj = {
        ...producto, quantity
      }
      if (isInCart(nuevoObj.id)) {
        const revisarProducto = cart.find(item => item.id === nuevoObj.id)
        const indexProducto = cart.indexOf(revisarProducto);
        const arrayTemp = [...cart];
        arrayTemp[indexProducto].quantity += quantity;
        setCart(arrayTemp);
      } else {
        setCart([...cart], nuevoObj);
      }
    };

    const emptyCart = () => {
      setCart([]);
    };

    const deleteItem = (id) => {
      return setCart(cart.filter(item => item.id !== id));
    };

    const getItemQty = () => {
      return cart.reduce((acc, item) => acc += item.quantity, 0)
    };

    const getItemPrice = () => {
      return cart.reduce((acc, item) => acc += item.quantity * item.price, 0)
    };


  return <Provider value={{isInCart, addItem, emptyCart, deleteItem, getItemQty, getItemPrice, cart}}>{children}</Provider>

}

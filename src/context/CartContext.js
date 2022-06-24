import React from 'react'
import { createContext, useState } from 'react'

export const MiContexto = createContext({});

const {Provider} = MiContexto;


export default function CartContext({children}) {

    const [cart, setCart] = useState();

    const isInCart = () => {};
    const addItem = () => {};
    const emptyCart = () => {};
    const deleteItem = () => {};
    const getItemQty = () => {};
    const getItemPrice = () => {};

  return <Provider>{children}</Provider>

}

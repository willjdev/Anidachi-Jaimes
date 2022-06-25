import React, { useContext } from 'react'
import {BsCart2} from "react-icons/bs"
import { MiContexto } from '../context/CartContext'

function CartWidget() {

  const {getItemQty} = useContext(MiContexto);

  return (
    <div className='flex justify-center items-center'>
        <span className='flex justify-around items-center w-8 h-8'><BsCart2/><sup>{getItemQty()}</sup></span>
    </div>
  )
}

export default CartWidget
import React from 'react'
import {BsCart2} from "react-icons/bs"

function CartWidget({compra}) {
  return (
    <div className='flex justify-center items-center'>
        <span className='flex justify-around items-center w-8 h-8'><BsCart2/><sup>{compra}</sup></span>
    </div>
  )
}

export default CartWidget
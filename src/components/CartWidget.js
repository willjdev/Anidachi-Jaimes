import React, { useContext, useState, useEffect } from 'react'
import {BsCart2} from "react-icons/bs"
import { Link } from 'react-router-dom';
import { MiContexto } from '../context/CartContext'

function CartWidget() {

  const {cantItem, cart} = useContext(MiContexto);
  const [cantidadCart, setCantidadCart] = useState();

  

  useEffect(() => {
    setCantidadCart(cantItem())
  }, [cart])

  return (
    <>
        <Link to='/cart'>
          <div className='flex justify-center items-center'>
              <span className='flex justify-around items-center w-8 h-8'><BsCart2/><sup>{cantidadCart}</sup></span>
          </div>
        </Link>
    </>
  )
}

export default CartWidget
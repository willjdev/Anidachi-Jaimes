import React, { useState } from 'react'
import { BiMinus, BiPlus } from "react-icons/bi";


function ItemCount({initial, stock, onAdd}) {

    const [count, setCount] = useState(initial);

    const sumar = () => {
        count < stock ? setCount(count + 1) : alert("No pueden añadirse más productos");
    }
    const restar = () => {
        count > initial ? setCount(count - 1) : alert("No pueden retirarse productos")
    }

  return (
        <div className='flex flex-col w-28 h-32 border rounded border-indigo-700 border-solid'>
            <div className='h-3/5 w-full flex flex-col items-center justify-center'>{count}</div>
            <div className='flex flex-row items-center justify-around w-full h-1/5 border border-solid border-gray-100 rounded'>
                <button onClick={sumar} className='w-1/2 h-full border border-solid flex flex-col items-center justify-center bg-gray-200'>
                    <BiPlus/>
                </button>
                <button onClick={restar} className='w-1/2 h-full border border-solid flex flex-col items-center justify-center bg-gray-200'>
                    <BiMinus/>
                </button>
            </div>
            <button onClick={() => onAdd(stock, count)} className='flex flex-col items-center justify-center text-xs bg-indigo-400 text-white w-full h-1/5 rounded ml-0'>Añadir a carrito</button>
        </div>
  )
}

export default ItemCount
import React, { useState } from 'react'
import { BiMinus, BiPlus } from "react-icons/bi";
import { Link } from 'react-router-dom'


function ItemCount({initial, stockP, onAdd}) {

    const [count, setCount] = useState(initial);
    const [conditionAdd, setConditionAdd] = useState(true);
    const [conditionFinish, setConditionFinish] = useState(false);
    

    

    const sumar = () => {
        if (count < stockP) {
            setCount(count + 1);
        } else {
            alert("No hay más unidades disponibles")
        }
        //count < stock ? (setCount(count + 1) ): alert("No pueden añadirse más productos");
    }
    const restar = () => {
        if (count > initial) {
            setCount(count - 1);
        } else {
            alert("No disponible")
        }
        //count > initial ? setCount(count - 1) : alert("No pueden retirarse productos")
    }
    const visibilidadBoton = () => {
        setConditionAdd(false);
        setConditionFinish(true);
    }

  return (
        <div className='flex w-full h-28 justify-evenly'>
            <div className='flex flex-col justify-center w-5/12 h-auto'>
                    <div className='flex flex-row items-center justify-around w-full h-2/5'>
                        <button 
                        onClick={restar} 
                        className='w-2/5 h-full flex flex-col items-center justify-center bg-teal-600'>
                            <BiMinus/>
                        </button>
                        <div className='h-3/5 w-full flex flex-col items-center justify-center text-lg font-medium'>{count}</div>
                        <button 
                        onClick={sumar} 
                        className='w-2/5 h-full flex flex-col items-center justify-center bg-teal-600'>
                            <BiPlus/>
                        </button>
                </div>
            </div>
            <div className='flex items-center justify-center w-5/12 h-auto'>
                    {conditionAdd && 
                        <button 
                        onClick={() => {onAdd(count); visibilidadBoton()}} 
                        className='flex flex-col items-center justify-center text-base bg-orange-400 text-black w-10/12 h-3/5 ml-0'>
                            Añadir al carrito
                        </button>}
                    {conditionFinish && 
                        <Link to='/cart' className='flex flex-col items-center justify-center text-base bg-orange-400 text-black w-10/12 h-3/5  ml-0'>
                            <button>Ver carrito</button>
                    </Link>}
            </div>
        </div>
  )
}

export default ItemCount
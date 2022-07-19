import React, { useState } from 'react'
import { BiMinus, BiPlus } from "react-icons/bi";
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function ItemCount({initial, stockP, onAdd}) {

    const [count, setCount] = useState(initial);
    const [conditionAdd, setConditionAdd] = useState(true);
    const [conditionFinish, setConditionFinish] = useState(false);

    const MySwal = withReactContent(Swal)

    const alertaAñadido = () => {
        MySwal.fire({
                title: <p>Producto añadido a carrito</p>,
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                background: "#f0921f",
                color: "#141414"
            })
    }
 
    const sumar = () => {
        if (count < stockP) {
            setCount(count + 1);
        } else {
            MySwal.fire({
                title: <p>No hay mas unidades</p>
            })
        }
    }
    const restar = () => {
        if (count > initial) {
            setCount(count - 1);
        } else {
            MySwal.fire({
                title: <p>No disponible</p>
            })
        }
    }
    const visibilidadBoton = () => {
        setConditionAdd(false);
        setConditionFinish(true);
    }

  return (
        <div className='flex w-full h-28 justify-evenly'>
            <div className='flex flex-col justify-center w-5/12 h-auto'>
                    {conditionAdd && <div className='flex flex-row items-center justify-around w-full h-2/5'>
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
                    </div>}
                    {conditionFinish && <Link to='/' className='flex flex-col items-center justify-center text-base bg-orange-400 text-black w-10/12 h-3/5  ml-0 md:p-0 p-2'>
                            <button>Ver productos</button>
                    </Link>}
            </div>
            <div className='flex items-center justify-center w-5/12 h-auto'>
                    {conditionAdd && 
                        <button 
                        onClick={() => {onAdd(count); alertaAñadido();visibilidadBoton()}} 
                        className='flex flex-col items-center justify-center text-base bg-orange-400 text-black w-10/12 h-3/5 ml-0 md:p-0 p-2'>
                            Añadir al carrito
                        </button>}
                    {conditionFinish && 
                        <Link to='/cart' className='flex flex-col items-center justify-center text-base bg-orange-400 text-black w-10/12 h-3/5  ml-0 md:p-0 p-2'>
                            <button>Ver carrito</button>
                    </Link>}
            </div>
        </div>
  )
}

export default ItemCount
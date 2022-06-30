import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({id, imagen, nombre}) {


  return (
    <>
    <Link to={`/item/${id}`} >
    <div className='flex flex-col items-center bg-white overflow-hidden shadow-lg w-52 h-80 mt-2'>
        <img src={imagen} className='w-full h-3/5 sm:h-48 object-cover' alt='Imagen producto'/>
        <div className='w-full h-2/5 flex flex-col items-center justify-evenly bg-amber-500'>
            <span className='font-medium text-center text-base flex items-center justify-center p-2'>{nombre}</span>
        </div>
    </div>
    </Link>
    </>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({pokeId, pokeImagen, pokeNombre, pokeDescripcion}) {
  return (
    <>
    <Link to={`/item/${pokeId}`} >
    <div className='flex flex-col items-center bg-white rounded overflow-hidden shadow-lg w-52 h-80'>
        <img src={pokeImagen} className='w-full h-3/5 sm:h-48 object-cover' alt='Imagen pokemon'/>
        <div className='w-full h-2/5 flex flex-col items-center justify-evenly bg-indigo-100'>
            <span className='font-medium text-base'>{pokeNombre}</span>
            <span className='text-black text-sm text-center px-2'>{pokeDescripcion}</span>
        </div>
    </div>
    </Link>
    </>
  )
}

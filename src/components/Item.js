import React from 'react'

export default function Item({pokeImagen, pokeNombre, pokePeso}) {
  return (
    <div className='flex flex-col items-center bg-indigo-200 rounded overflow-hidden shadow-sm w-32 h-48'>
        <img src='{pokeImagen}' className='w-full h-3/5 sm:h-48 object-cover' alt='Imagen pokemon'/>
        <div className='w-full h-auto m-4 flex flex-col items-center justify-evenly bg-white'>
            <span className='font-bold text-base'>{pokeNombre}</span>
            <span className='text-black text-sm'>Peso: {pokePeso}</span>
        </div>
    </div>
  )
}

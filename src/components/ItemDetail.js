import React from 'react'

export default function ItemDetail({producto}) {
    const {id, name, description, weight, height, width, no, image, price} = producto;

  return (
    <section className='w-3/4 h-5/6 bg-white shadow-md flex'>
      <div className='w-1/2 h-full flex flex-col items-center justify-evenly'>
        <div id='imagen' className='w-80 h-80'>
          <img src={image} alt="producto"/>
        </div>
        <div id='imagenes' className='w-96 h-24  flex justify-around items-center border-t border-black'>
          <img src={image} className='rounded w-1/4 h-auto' alt='pokemon'/>
          <img src={image} className='rounded w-1/4 h-auto' alt='pokemon'/>
          <img src={image} className='rounded w-1/4 h-auto' alt='pokemon'/>
        </div>
      </div>
      <div className='w-1/2 h-full  flex flex-col items-center justify-evenly'>
        <div className='w-fit h-fit p-2 rounded text-lg font-semibold'>{name}</div>
        <div className='w-fit h-fit p-2 text-base font-medium'>$ {price}</div>
        <div className='w-full h-36 flex justify-evenly'>
          <div className='w-1/2 h-full flex flex-col border-r border-solid border-slate-600'>
            <div className='w-full h-1/6 text-sm font-medium'>Descripción:</div>
            <p className='w-5/6 h-5/6 text-sm text-left'>{description}</p>
          </div>
          <div className='w-1/2 h-full flex flex-col pl-6'>
            <div className='w-full h-1/4 text-sm font-medium'>Peso: <span className='font-normal'>{weight}</span></div>
            <div className='w-full h-1/4 text-sm font-medium'>Alto:  <span className='font-normal'>{height}</span></div>
            <div className='w-full h-1/4 text-sm font-medium'>Ancho:  <span className='font-normal'>{width}</span></div>
            <div className='w-full h-1/4 text-sm font-medium'>Lote:  <span className='font-normal'>{no}</span></div>
          </div>
        </div>
        <button className='w-fit h-fit p-2 text-base font-medium bg-violet-700 rounded text-white'>Añadir a carrito</button>
      </div>

    </section>
  )
}

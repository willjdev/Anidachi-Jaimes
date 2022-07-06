import React,  { useContext, useState } from 'react'
import { MiContexto } from '../context/CartContext';
import ItemCount from './ItemCount'

export default function ItemDetail({producto}) {
  const {id, name, description, details, stock, images, price} = producto;

  const {addItem, cart} = useContext(MiContexto);
  const [quantity, setQuantity] = useState();
    
  
  const onAdd = (count) => {
    addItem(producto, count);
    setQuantity(count);
    console.log(JSON.stringify(cart))
  }

  return (
    <>
      {images && (
        <section className='w-3/4 h-auto p-2 bg-white shadow-md flex'>
          <div className='w-1/2 h-full flex flex-col items-center justify-evenly'>
            <div id='imagen' className='w-80 h-80 flex items-center justify-center mb-2'>
              <img className='max-w-full max-h-full' src={images[0]} alt="producto"/>
            </div>
            <div id='imagenes' className='w-96 h-28  flex justify-around items-center border-t border-black'>
              {images[1] && <img src={images[1]} className='w-1/4 max-h-24' alt='pokemon'/>}
              {images[2] && <img src={images[2]} className='w-1/4 max-h-24' alt='pokemon'/>}
              {images[3] && <img src={images[3]} className='w-1/4 max-h-24' alt='pokemon'/>}
            </div>
          </div>
          <div className='w-1/2 h-full  flex flex-col items-center justify-evenly'>
            <div className='w-fit h-fit p-2 rounded text-lg font-semibold mb-3'>{name}</div>
            <div className='w-full h-auto flex justify-evenly p-2'>
              <div className='w-1/2 h-auto flex flex-col border-r border-solid border-slate-600'>
                <div className='w-full h-1/6 text-sm font-medium'>
                  Descripción:
                </div>
                <p className='w-full h-5/6 text-sm text-left'>{description}</p>
              </div>
              <div className='w-1/2 h-full flex flex-col pl-6'>
                <div className='w-full h-1/6 text-sm font-medium'>
                  Detalles:
                </div>
                {details.map((item) => (<li key={details.length + 1} className='font-normal w-full h-1/4 text-sm mb-1'>{item}</li>))}
                <div className='w-full h-1/4 text-sm font-medium'>
                  Stock:  <span className='font-normal'>{stock}</span>
                </div>
              </div>
            </div>
            <div className='w-fit h-fit p-2 text-base font-bold mt-3'>
              Precio: $ {price}
            </div>
            <div className='flex w-full items-center justify-center'>
            {/* <button className='w-fit h-fit p-2 text-base font-medium bg-violet-700 rounded text-white'>Añadir a carrito</button> */}
            <ItemCount initial={1} stockP={stock} onAdd={onAdd}/>
            
            </div>
          </div>

        </section>

      )}
    </>
  )
}

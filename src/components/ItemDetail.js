import React,  { useContext, useState } from 'react'
import { MiContexto } from '../context/CartContext';
import ItemCount from './ItemCount'

export default function ItemDetail({producto}) {
  const {id, name, description, details, stock, images, price} = producto;

  const {añadirItem, cart} = useContext(MiContexto);
  const [quantity, setQuantity] = useState();
  const [cambioImg0, setCambioImg0] = useState(images[0]);
  const [cambioImg1, setCambioImg1] = useState(images[1]);
  const [cambioImg2, setCambioImg2] = useState(images[2]);
  const [cambioImg3, setCambioImg3] = useState(images[3]);
    
  
  const onAdd = (count) => {
    añadirItem(producto, count);
    setQuantity(count);
    console.log(JSON.stringify(cart))
  }

  

  return (
    <>
      {images && (
        <section className='md:w-3/4 w-full h-screen p-2 bg-white shadow-md md:flex md:flex-row flex flex-col items-center justify-around'>
          <div className='md:w-1/2 w-full md:h-full h-1/3 flex md:flex-col flex-row items-center justify-evenly '>
            <div id='imagen' className='md:w-80 md:h-80 w-40 h-1/6 flex items-center justify-center md:mb-2 mb-0'>
              <img className='md:max-w-full md:max-h-full w-auto h-auto' src={cambioImg0} alt="producto"/>
            </div>
            {images[1] && <div id='imagenes' className='md:w-96 md:h-fit md:p-2 flex md:flex-row flex-col gap-3 md:gap-0 justify-around items-center md:border-t md:border-black '>
              {images[1] && <img src={cambioImg1} onClick={() => {setCambioImg1(cambioImg0);setCambioImg0(cambioImg1);}} className='md:w-1/4 w-3/4 md:h-auto h-20 cursor-pointer' alt='producto'/>}
              {images[2] && <img src={cambioImg2} onClick={() => {setCambioImg2(cambioImg0);setCambioImg0(cambioImg2);}} className='md:w-1/4 w-3/4 md:h-auto h-20 cursor-pointer' alt='producto'/>}
              {images[3] && <img src={cambioImg3} onClick={() => {setCambioImg3(cambioImg0);setCambioImg0(cambioImg3);}} className='md:w-1/4 w-3/4 md:h-auto h-20 cursor-pointer' alt='producto'/>}
            </div>}
          </div>
          <div className='md:w-1/2 md:h-full w-full p-2 h-2/3 md:p-0 flex flex-col items-center justify-evenly'>
            <div className='w-fit h-fit p-2 rounded text-lg font-semibold mb-3'>{name}</div>
            <div className='w-full h-auto flex justify-evenly p-2'>
              <div className='w-1/2 h-auto flex flex-col border-r border-solid border-slate-600'>
                <div className='w-full h-1/6 text-sm font-medium mb-2 md:mb-0'>
                  Descripción:
                </div>
                <p className='w-full h-5/6 text-sm text-left pr-2'>{description}</p>
              </div>
              <div className='w-1/2 h-full flex flex-col pl-6'>
                <div className='w-full h-1/6 text-sm font-medium mb-2 md:mb-0'>
                  Detalles:
                </div>
                {details.map((item) => (<li key={details.length + 1} className='font-normal w-full h-1/4 text-sm mb-1'>{item}</li>))}
                <div className='w-full h-1/4 text-sm font-medium md:mt-2 mt-3'>
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

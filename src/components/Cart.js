import React, { useContext, useEffect, useState } from 'react'
import { BsXLg } from "react-icons/bs";
import { MiContexto } from '../context/CartContext';
import { Link } from 'react-router-dom'


function Cart() {
  
  
  const {cart, borrarItem, precioItem, vaciarCart} = useContext(MiContexto);
  const [pantalla, setPantalla] = useState(true);
  

  useEffect(() => {
    let tamañoPantalla = window.screen.width;
    tamañoPantalla >= "768" ? setPantalla(true) : setPantalla(false);
  }, [])


  return (
    <>
      {
      
      pantalla ?

      cart.length != 0 ? <section className='w-full h-screen flex flex-col items-center z-1 bg-white'>
        <div className='w-10/12 h-auto flex flex-col'>
          <div className='w-full h-20 border-b-2 border-slate-200 flex items-center text-lg font-bold '>
          <h1>Tu carrito</h1>
          </div>

          <div className='w-8-12 h-auto flex md:flex-row flex-col items-cente'>
            <div className='w-full h-auto flex flex-col mt-4'>
              {/* Encabezados */}
              <div className='w-full h-20 flex border-b-2 border-slate-200'>
                <div className='w-3/6 h-full flex items-end justify-center text-base font-semibold pb-4'>
                  <p>Producto</p>
                </div>
                <div className='w-2/6 h-full flex items-end justify-around text-base font-semibold pb-4'>
                  <li className='w-1/3 h-full flex items-end justify-center'>Precio</li>
                  <li className='w-1/3 h-full flex items-end justify-center'>Cantidad</li>
                  <li className='w-1/3 h-full flex items-end justify-center'>Total</li>
                </div>
              </div>
              {/* Producto y detalles */}
                {cart.map((item) => (
                  <>
              <div className='w-11/12 h-48 border-b-2 border-slate-200 flex justify-between items-center'>
                  <div className='w-6/12 h-full flex justify-between items-center'>
                    <div className='w-32 h-28'>
                      <img src={item.images[0]}/>
                    </div>
                    <div className='w-auto h-28 flex items-start text-base font-semibold pl-4'>
                      {item.name}
                    </div>
                  </div>

                  <div className='w-4/12 h-full flex justify-center items-center'>
                    <div className='w-1/3 h-28 text-center text-base'>
                      ${item.price}
                    </div>
                    <div className='w-1/3 h-28 text-center text-base'>
                      {item.quantity}
                    </div>
                    <div className='w-1/3 h-28 text-center text-base'>
                      ${item.price * item.quantity}
                    </div>
                  </div>

                  <div className='w-8 h-full flex justify-center items-start pt-4'>
                    <BsXLg className='cursor-pointer' onClick={() => borrarItem(item.id)}/>
                  </div>
                  </div>
                  </>
                ))}

              {/* Subtotal */}
              <div className='w-11/12 h-20 border-b-2 border-slate-200 flex justify-end items-center gap-7 pr-4 text-base font-bold'>
                <h2>Subtotal</h2>
                <h2>${precioItem()}</h2>
              </div>
            </div> 


          {/* Resumen de compra */}
          <div className='w-4/12 h-auto flex flex-col mt-4 gap-4'>

              <div className='w-full h-40 flex flex-col border-2 border-slate-200'>
                <div className='w-full h-2/4 text-lg font-bold flex items-center pl-5'>Resumen de orden</div>
                <div className='w-full h-1/4 flex justify-between items-center px-5'>
                  <h2>Subtotal:</h2>
                  <h2>${precioItem()}</h2>
                </div>
                <div className='w-full h-1/4 text-sm pl-5'>* Costo de envío gratis</div>
              </div>

              <Link to='/checkout/'>
                <button className='w-full h-16 flex items-center justify-center text-base font-semibold text-black bg-orange-400'>
                  Checkout
                </button>
              </Link>
              <button onClick={() => vaciarCart()} className='w-full h-16 flex items-center justify-center text-base font-semibold text-black bg-orange-400 mt-2'>
                  Vaciar carrito
                </button>
          </div>
          </div>

        </div>

      </section> : 


      <section className='w-full h-screen flex flex-col items-center justify-center gap-8 bg-white'>
        <div className='text-lg font-semibold'>Carrito vacío</div>
        <Link to='/' ><button className='w-40 h-20 text-black bg-orange-400 font-semibold'>Ver productos</button></Link>
      </section>


      /* Vista para dispositivos menores a 768px */ 
      :

      
      cart.length != 0 ? 
        <section className='w-full h-auto flex flex-col bg-white z-5 items-center'>

          <div className='w-11/12 h-20 border-b-2 border-slate-200 flex items-center text-2xl font-bold '>
            <h1>Tu carrito</h1>
          </div>

          {cart.map((item) => (  
            <div className='w-11/12 h-auto flex flex-col border-b-2 border-slate-200 items-center p-4'>
              <div className='w-28 h-36 object-contain'>
                <img src={item.images[0]} />
              </div>
              <div className='w-full h-auto text-lg font-bold mt-5'>
                {item.name}
              </div>
              <div className='self-start text-sm mt-6'>
                Cantidad: <span className='text-base font-medium'>{item.quantity}</span> 
              </div>
              <div className='self-start text-sm mt-1'>
                Precio: $<span  className='text-base font-medium'>{item.price}</span>
              </div>
              <div onClick={() => borrarItem(item.id)} className='self-start text-sm mt-1 italic text-gray-500 cursor-pointer underline'>
                Eliminar
              </div>
              <div className='text-xl font-medium mt-5'>
                Total: <span className='text-xl font-semibold'>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          )) 
          }

          <div className='w-11/12 h-auto flex flex-col items-center border-2 border-slate-200 my-5 p-4'>
            <div className='text-xl font-bold'>
              Resumen de orden
            </div>
            <div className='self-start text-lg font-medium mt-6'>
              Subtotal: <span className='font-bold text-lg'>${precioItem().toFixed(2)}</span>
            </div>
            <h2 className='self-start text-lg font-normal mt-3'>* Costo de envío gratis</h2>
          </div>

          <Link to='/checkout/' className='w-11/12 h-16 mb-4'>
            <button className='w-full h-full flex items-center justify-center text-xl font-semibold text-black bg-orange-400'>
              Checkout
            </button>
          </Link>
          <button onClick={() => vaciarCart()} className='w-11/12 h-16 mb-4 flex items-center justify-center text-xl font-semibold text-black bg-orange-400 mt-2'>
              Vaciar carrito
          </button>

        </section>

        :

        <section className='w-full h-screen flex flex-col items-center justify-center gap-8 bg-white'>
          <div className='text-lg font-semibold'>Carrito vacío</div>
          <Link to='/' ><button className='w-40 h-20 text-black bg-orange-400 font-semibold'>Ver productos</button></Link>
      </section>
      }
    </>
  )
}

export default Cart
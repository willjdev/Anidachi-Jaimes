import React, { useContext } from 'react'
import { BsXLg } from "react-icons/bs";
import { MiContexto } from '../context/CartContext';

function Cart() {

  const {cart, deleteItem, getItemPrice} = useContext(MiContexto);




console.log(cart)







  return (
    <>
      {cart.length != 0 ? <section className='w-full h-screen flex flex-col items-center'>
        <div className='w-10/12 h-auto flex flex-col'>
          <div className='w-full h-20 border-b-2 border-slate-200 flex items-center text-lg font-bold '>
          <h1>Tu carrito</h1>
          </div>

          <div className='w-8-12 h-auto flex'>
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
                      <img src={item.image}/>
                    </div>
                    <div className='w-auto h-28 flex items-start text-base font-semibold pl-4'>
                      {item.name}
                    </div>
                  </div>

                  <div className='w-4/12 h-full flex justify-center items-center'>
                    <div className='w-1/3 h-28 text-center text-base'>
                      {item.price}
                    </div>
                    <div className='w-1/3 h-28 text-center text-base'>
                      {item.quantity}
                    </div>
                    <div className='w-1/3 h-28 text-center text-base'>
                      {item.price * item.quantity}
                    </div>
                  </div>

                  <div className='w-8 h-full flex justify-center items-start pt-4'>
                    <BsXLg onClick={() => deleteItem(item.id)}/>
                  </div>
                  </div>
                  </>
                ))}

              {/* Subtotal */}
              <div className='w-11/12 h-20 border-b-2 border-slate-200 flex justify-end items-center gap-7 pr-4 text-base font-bold'>
                <h2>Subtotal</h2>
                <h2>{getItemPrice()}</h2>
              </div>
            </div> 


          {/* Resumen de compra */}
          <div className='w-4/12 h-auto flex flex-col mt-4 gap-4'>

              <div className='w-full h-40 flex flex-col border-2 border-slate-200'>
                <div className='w-full h-2/4 text-lg font-bold flex items-center pl-5'>Resumen de orden</div>
                <div className='w-full h-1/4 flex justify-between items-center px-5'>
                  <h2>Subtotal:</h2>
                  <h2>{getItemPrice()}</h2>
                </div>
                <div className='w-full h-1/4 text-sm pl-5'>* Costo de envío en finalización</div>
              </div>

              <button className='w-full h-16 flex items-center justify-center text-base font-semibold text-white bg-violet-600'>
                Finalizar
              </button>
          </div>
          </div>

        </div>

      </section> : "Carrito vacío"}
    </>
  )
}

export default Cart
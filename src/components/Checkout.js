import React, { useContext, useState } from 'react'
import { MiContexto } from '../context/CartContext'
import { addDoc, collection, getFirestore} from 'firebase/firestore';

export default function Checkout() {

  const {cart, precioItem, vaciarCart} = useContext(MiContexto);

  const db = getFirestore();
  const orderCollection = collection(db, 'orders');
  
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [presBtn, setPresBtn] = useState(false)
  const [ordenId, setOrdenId] = useState('')
  const [validarNombre, setValidarNombre] = useState(false)
  const [validarTel, setValidarTel] = useState(false)
  const [validarEmail, setValidarEmail] = useState(false)
  let verificacionN, verificacionT, verificacionE;

  const totalCompra = precioItem();

  function validateEmail(e) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(regexEmail)) {
      setValidarEmail(false);
      return verificacionN = true;
    } else {
      setValidarEmail(true);
      return verificacionN = false;

    }
  }

  function validateTel(e) {
    let regexTel = /^\d{10}$/;
    if(telefono.match(regexTel)) {
      setValidarTel(false)
      return verificacionT = true;

    } else {
      setValidarTel(true);
      return verificacionT = false;

    }
  }

  function validateNombre(e) {
    if (nombre.length > 0) {
      setValidarNombre(false);
      return verificacionE = true;

    } else {
      setValidarNombre(true)
      return verificacionE = false;

    }
  }
  

  function handleClick () {

    validateEmail();
    validateNombre();
    validateTel();
    
    if (!verificacionN || !verificacionE || !verificacionT) {
      alert("Verificar campos")
      return;
    }

    const fecha = new Date();

    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let año = fecha.getFullYear();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    const fechaCompra = `Día ${dia} Mes ${mes} Año ${año} Hora ${hora}: ${minutos}: ${segundos} `;


    const order = {
      buyer: {name: nombre, tel: telefono, email: email},
      items: cart,
      total: totalCompra,
      date: fechaCompra
    }


    addDoc(orderCollection, order).then(({id}) => {
      setPresBtn(true);
      setOrdenId(id);
      vaciarCart();
    })

  }




  return (
    
     <div className='w-full h-screen flex items-center justify-center'>
        {!presBtn && 
        <section className='w-4/5 h-full flex flex-col items-center justify-around'>
          <h1 className='font-bold text-lg' >Completar orden</h1>

          <div className='w-full h-11/12 flex flex-col items-center justify-evenly'>
            <h2 className='font-medium text-base mb-5'>Llena los campos para completar la orden</h2>

            <label className='w-1/3 mb-3 mt-3 text-left'>Nombre</label>
            <input onChange={(e) => {setNombre(e.target.value)}} type='text' className='w-1/3 h-8 border border-slate-400 rounded pl-2' placeholder=' Ingresa tu nombre' required/>
            {validarNombre && <div className='italic text-red-500 mt-1'>Nombre no valido</div>}

            <label className='w-1/3 mb-3 mt-3 text-left'>Teléfono</label>
            <input onChange={(e) => {setTelefono(e.target.value)}} type='tel' className='w-1/3 h-8 border border-slate-400 rounded pl-2' placeholder=' Ingresa tu teléfono' required/>
            {validarTel && <div className='italic text-red-500 mt-1'>Teléfono no valido</div>}

            <label className='w-1/3 mb-3 mt-3 text-left'>Email</label>
            <input onChange={(e) => {setEmail(e.target.value)}} type='email' className='w-1/3 h-8 border border-slate-400 rounded pl-2' placeholder=' Ingresa tu email' required/>
            {validarEmail && <div className='italic text-red-500 mt-1'>email no valido</div>}

          </div>

          <button onClick={() => handleClick()} className='w-48 h-16 bg-orange-400 text-black text-lg'>Finalizar</button>
        </section>}

        {presBtn && 
          <div className='w-1/2 h-48 flex flex-col items-center justify-around border border-slate-400 rounded'>
            <h1 className='text-lg font-bold'>¡Orden completada!</h1>
            <h2 className='text-base'>Este es tu id de orden: <span className='font-bold'>{ordenId}</span></h2>
            <h3 className='text-base'>¡Gracias por tu compra!</h3>
          </div>
          
        }
    </div>
    
  )
}

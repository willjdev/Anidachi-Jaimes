import React, { useState } from 'react'
import {GiFluffyWing} from "react-icons/gi"
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import { IoClose, IoMenu } from "react-icons/io5";

function NavBar () {
    let Links = [
        {seccion: "Figuras", link:"/category/figure"},
        {seccion: "Accesorios", link:"/category/accessory"}
    ]
    const [abierto, setAbierto] = useState(false);
    let hola = `border border-black md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-2]
                left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${abierto ? 'top-20 opacity-100 ' : 'top-[-490px]'} md:opacity-100 opacity-0`;

    return (<>
        <nav className='shadow-md w-full top-0 left-0'>
            <div className='flex md:flex items-center justify-between bg-zinc-800 py-4 md:px-10 px-7'>
                <Link to="/" >
                    <div className='font-bold text-2x1 cursor-pointer flex items-center  text-white'>
                        <span className='text-3x1 text-indigo-600 mr-1 pt-2'>
                            <GiFluffyWing/>
                        </span>
                        Anidachi
                    </div>
                </Link>
                <div onClick={() => setAbierto(!abierto)} className='text-3xl cursor-pointer md:hidden text-white'>
                    {abierto ? <IoClose/> : <IoMenu/>}
                </div>

                <ul className={`md:flex md:flex-row md:items-center md:h-auto h-40 flex flex-col items-start justify-around md:static md:pb-0 absolute pb-4 left-2 md:z-auto pl-5 w-1/2 md:w-auto transition-all duration-500 ease-in bg-zinc-800 ${abierto ? 'top-20 opacity-100 z-1' : 'top-[-500] z-[-2]'} md:opacity-100`}>
                    {
                        Links.map((item) => (
                            <li key={item.seccion} className='md:ml-8 text-base'>
                                <Link to={item.link} className='text-white hover:text-gray-400 duration-500'>{item.seccion}</Link>
                            </li>
                        ))
                    }
                    <div className='md:ml-8 w-fit text-white'><CartWidget/></div>
                </ul>
            </div>
        </nav>
    </>)
}

export default NavBar
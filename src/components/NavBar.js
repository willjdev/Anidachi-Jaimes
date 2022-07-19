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
    

    return (<>
        <nav className='shadow-md w-full h-auto top-0 left-0'>
            <div className='flex md:flex items-center justify-between bg-zinc-800 py-4 md:px-10 px-7'>
                <Link to="/" >
                    <div className='font-bold text-2x1 cursor-pointer flex items-center  text-white'>
                        <span className='text-3x1 text-indigo-600 mr-1 pt-2'>
                            <GiFluffyWing/>
                        </span>
                        Anidachi
                    </div>
                </Link>

                <div className='md:flex flex justify-end gap-5 md:gap-0'>
                    <div onClick={() => setAbierto(!abierto)} className='text-3xl cursor-pointer md:hidden text-white'>
                        {abierto ? <IoClose/> : <IoMenu/>}
                    </div>

                    <ul className={`md:flex md:flex-row md:items-center md:h-auto md:pb-0 md:z-auto flex-col absolute top-14 md:static md:p-0 md:w-auto transition-all duration-500 ease-in h-auto p-4 left-0 w-full bg-zinc-800 ${abierto ? 'top-14 opacity-100 z-1' : 'top-[-14] z-[-2]'} md:opacity-100`}>
                        {
                            Links.map((item) => (
                                <li key={item.seccion} className='md:ml-8 text-base mb-4 md:mb-0'>
                                    <Link to={item.link} className='text-white hover:text-gray-400'>{item.seccion}</Link>
                                </li>  
                            ))
                        }
                    </ul>
                    <div className='md:ml-8 w-fit text-white'><CartWidget/></div>
                </div>
            </div>
        </nav>
    </>)
}

export default NavBar
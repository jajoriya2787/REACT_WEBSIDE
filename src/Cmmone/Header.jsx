import React, { useContext, useEffect, useState } from 'react'
import { HiXMark } from "react-icons/hi2";
import { IoMenu } from "react-icons/io5";
import { Link, useLocation, useNavigate } from 'react-router-dom'
// Shopcard.jsx में
import { toast } from 'react-toastify';

import { Context } from '../Context/Contextmain';//yha hme context ko import karna h naki contextmain ko kyo wo pahale hiapp.jsx ka perent h

function Header() {
    const [toggle, settoggle] = useState(false);
    const { card, setcard, login, setlogin } = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location.pathname)

    const logout = () => [
        setlogin(''),
        navigate('/login')
    ]

    useEffect(
        () => {
            if (!login && location.pathname != '/sign') {// sign page
                navigate('/login');
            }
        }, [login, location.pathname]
    )

    const handleClearCart = () => {
        if (card.length > 0) {
            setcard([]);
            toast.error('🧹 Cart cleared successfully');
            settoggle(false)

        } else {
            toast.warning('🛒 Cart is already empty!');
            settoggle(false)
        }
    }


    return (
        <>
            <>
                {/* Header */}
                <header className="bg-white shadow-md sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            {/* Logo */}
                            <div className="text-xl font-bold text-blue-600">MyLogo</div>
                            {/* Hamburger menu (mobile only) */}
                            <input type="checkbox" id="menu-toggle" className="hidden peer" />
                            <label htmlFor="menu-toggle" className="md:hidden cursor-pointer m-6">
                                {
                                    toggle ?
                                        <HiXMark onClick={() => settoggle(!toggle)} className='md:hidden block text-[25px]' />
                                        :
                                        <IoMenu onClick={() => settoggle(!toggle)} className='md:hidden block text-[25px]' />
                                }

                            </label>
                            {/* Desktop Nav */}
                            <nav className="hidden md:flex space-x-6 items-center list-none">
                                <li>
                                    <Link to={'/'}>Home</Link>
                                </li>
                                <li>
                                    <Link to={'/about'}>About</Link>
                                </li>
                                <li>
                                    <Link to={'/shop'}>Shop</Link>
                                </li>
                                {
                                    !login
                                        ?
                                        <>
                                            <li className="text-gray-700 hover:text-blue-500">
                                                <Link to={'/login'}>Login</Link>
                                            </li>
                                            <button className="bg-blue-500 text-white w-30 px-4 py-2 rounded hover:bg-blue-600">
                                                <Link to={'/sign'}>Sign Up</Link>
                                            </button>
                                        </>
                                        :
                                        <button onClick={() => { settoggle(false), logout() }} className="bg-black text-white w-30 px-4 py-2 rounded hover:bg-red-600">
                                            Log out
                                        </button>

                                }
                                <button className="relative">
                                    <Link to={'/card'}>
                                        🛒
                                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                                            {card.length}
                                        </span></Link>
                                </button>
                                <button onClick={handleClearCart} className="w-40 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md transition duration-300">
                                    Clear to Cart
                                </button>
                            </nav>
                        </div>
                    </div>
                </header>
                <div>
                    <nav className={`duration-300 md:hidden z-30 fixed bg-gray-900 list-none top-[62px] left-[-100%] w-screen h-full p-10 text-[white] ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                        <li onClick={() => settoggle(false)} className='text-[white] my-4'>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li onClick={() => settoggle(false)} className='text-[white] my-4'>
                            <Link to={'/about'}>About</Link>
                        </li>
                        <li onClick={() => settoggle(false)} className='text-[white] my-4'>
                            <Link to={'/shop'}>Shop</Link>
                        </li>
                        {
                            login
                                ?
                                <button onClick={() => { settoggle(false), logout() }} className="bg-black me-5 text-white w-30 px-4 py-2 rounded hover:bg-red-600">
                                    Log out
                                </button>
                                :
                                <li onClick={() => settoggle(false)} className=" text-[white] my-4 hover:text-blue-500">
                                    <Link to={'/login'}>Login</Link>
                                </li>

                        }
                        <button onClick={() => settoggle(false)} className="bg-blue-500 text-white px-4 py-2 my-4 rounded hover:bg-blue-600">
                            <Link to={'/sign'}>Sign Up</Link>
                        </button>
                        <button onClick={() => settoggle(false)} className="relative ml-5">
                            <Link to={'/card'}>
                                🛒
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                                    {card.length}
                                </span></Link>
                        </button>
                        <button onClick={handleClearCart} className="w-full mt-3 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md transition duration-300">
                            Clear to Cart
                        </button>
                    </nav>
                </div>
            </>
        </>
    )
}

export default Header
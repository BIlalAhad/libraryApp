import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <nav className='flex justify-between items-center p-2 px-16'>
                <Link to='/'><img className='w-11' src="signature.png" alt="" /></Link>
                <ul className='flex gap-8 items-center'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {/* <li>
                        <Link to="/">About</Link>
                    </li> */}
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                    <li>
                        <Link to="addListing">Add Listing</Link>
                    </li>
                    <li>
                        <Link to="login"><button className='p-2 px-3 bg-blue-800 hover:bg-blue-700 text-white'>Login</button></Link>
                    </li>
                    <li>
                        <Link to="signup"><button className='p-2 px-3 bg-blue-800 hover:bg-blue-700 text-white'>SignUp</button></Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

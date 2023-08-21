import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { ImLinkedin2} from "react-icons/im";
import { BsTwitter} from "react-icons/bs";


export default function Footer() {
  return (
    <>
    <section className='bg-blue-950 relative text-white p-5 sm:p-16'>
        
        <div className='grid  sm:grid-cols-4 gap-10 mb-7 '>
            <div>
                <h2 className='text-3xl font-bold mb-5'>Library</h2>
                <p>Lorem10  established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum </p>
            </div>
            <div>
                <h2 className='mb-5 '>Subscribe to get important updates</h2>
                <div className='flex'>
                <input className='p-3' type='email' placeholder='Email'></input>
                <button className='p-3 bg-blue-900 text-white hover:bg-blue-800 '>Subscribe</button>
                </div>
            </div>
            <div className=''>
                <h2 className='mb-5'>Follow us </h2>
                <div className='text-2xl flex gap-5'>
                    <BsFacebook/>
                    <ImLinkedin2/>
                    <BsTwitter/>
                </div>
            </div>
            <div>
                <a href='tel:0233798456' /> call:<span/>  34412345
            </div>
        </div>
        <hr/>
    </section>
        <p className='p-3 text-center'>&copy;Developer Bilal Ahad </p>
        </>
  )
}

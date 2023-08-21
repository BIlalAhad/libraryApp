import React, {  useState,useEffect } from 'react'
import { useFirebase } from '../Context/Firebase';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
    const navigate=useNavigate();
    const firebase=useFirebase();
    console.log(firebase );
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const handlesubmit = (e) =>{
        e.preventDefault()
        firebase.SignupUserWithEmailAndPassword(email,password)
        setEmail('');
        setPassword('');
    }
    useEffect(()=>{
        if(firebase.isLoggedIn){
            navigate('/');
        }
    },[])
  return (
    <>
        <section className='flex flex-col justify-center items-center h-[90vh] bg-gradient-to-r from-blue-800 to-gray-100 p-5'>
                        <h2 className='text-2xl font-serif font-bold mb-8 text-center'>SignUp</h2>
            <div className='grid grid-cols-2 max-w-2xl shadow-lg items-center bg-white'>
                <img src="Signup.jpg" alt="" />
                <form onSubmit={handlesubmit}>
                <div className='bg-white p-3 '>
                        <div>
                            <label className='sm:text-xl w-full font-serif'>Email</label>
                            <input className='p-1 border-gray-200 mt-2 border-2 w-full' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" />
                        </div>
                        <div>
                            <label className='sm:text-xl w-full font-serif'>Password</label>
                            <input className='p-1 border-gray-200 mt-2 border-2 w-full' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" />
                        </div>
                        <button className='bg-blue-800 w-full p-2 text-white mt-5 hover:bg-blue-700 hover:cursor-pointer'  type='submit'>SignUp</button>
                </div>
                </form>
            </div>
        </section>
    </>
  )
}

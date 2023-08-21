import React, { useState } from 'react'
import { useFirebase } from '../Context/Firebase';

export default function Addlisting() {
    const [bookname,setBookname] =useState();
    const [ISBN,setISBN]=useState();
    const [price,setPrice]=useState();
    const [img,setImg]=useState(); 
    const firebase=useFirebase();
    const handleform=async(e)=>{
        e.preventDefault()
        await firebase.HandleCreateNewListing(bookname,ISBN,price,img);
        setBookname('');
        setISBN('');
        setPrice('');
        setImg('');
    }
  return (
    <>
     <img className='h-[50vh] object-cover w-full' src="addlisting.jpg" alt="" />

     <section className='my-20'>
        <h2 className='text-center text-2xl font-medium mb-10'>Add Listing</h2>
        <form className='max-w-5xl mx-auto  bg-gray-300 p-5 shadow-md rounded-2xl grid gap-5' onSubmit={handleform}>
            <div className='text-xl'>
                <label className='text-blue-900'>Book Name</label>
                <input className=' text-sm w-full border-2 p-2 mt-2 border-gray-200' name='bookname' onChange={(e)=>setBookname(e.target.value)} value={bookname} placeholder='book name ...' type='text' />
            </div>
            <div className='text-xl'>
                <label className='text-blue-900'>ISBN</label>
                <input className=' text-sm w-full border-2 p-2 mt-2 border-gray-200' name='ISBN' onChange={(e)=>setISBN(e.target.value)} value={ISBN} placeholder='ISBN' type='text' />
            </div>
            <div className='text-xl'>
                <label className='text-blue-900'>Price</label>
                <input className=' text-sm w-full border-2 p-2 mt-2 border-gray-200' name='price' onChange={(e)=>setPrice(e.target.value)} value={price} placeholder='$' type='text' />
            </div>
            <div className='text-xl'>
                <label className='text-blue-900'>Cover Photo</label>
                <input className=' text-sm w-full border-2 p-2 mt-2 border-gray-200' name='image' onChange={(e)=>setImg(e.target.files[0])}  type='file' />
            </div>
            <button className='text-white bg-blue-950 p-2 hover:brightness-75' type='submit'>Upload</button>
        </form>
     </section>
    </>
  )
}

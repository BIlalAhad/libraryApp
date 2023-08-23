import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';
import { useFirebase } from '../Context/Firebase';

export default function Index(props) {
  const firebase = useFirebase();
  const [book , setBook]=useState([])
  useEffect(()=>{
    firebase.listAllBooks().then(books=>setBook(books.docs))
  })

 
  return (
    <>
      <img className='h-[50vh] object-cover w-full' src="index.jpg" alt="" />
        <Card  />
    </>
  )
}

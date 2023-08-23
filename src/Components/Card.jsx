import React, { useEffect, useState } from 'react'
import { useFirebase } from '../Context/Firebase'
import Modal from 'react-modal';
import { ref } from "firebase/storage";


export default function Card(props) {
    const [showModal, setShowModal] = React.useState(false);
    const [users, setusers] = useState([]);
    const [bookDetails, setBookDetails] = useState([]);
    const [url, setUrl] = useState([]);

    const firebase = useFirebase();
  
    useEffect(() => {
      firebase.listAllBooks().then(books =>(setusers(books.docs)))  
    }, [])
   

    const getImageUrl = (path) => {
      return `https://firebasestorage.googleapis.com/v0/b/library-383d9.appspot.com/o/${path}?alt=media`;
    }
    
  
  //  useEffect(()=>{
  //   users.map(data=>{seturl(...url,data.data().imageURL)})
  //   console.log(url)
  //  },[users])
  
    const details = (books) => {
      setShowModal(true)
      setBookDetails(books);
    }
    
  return (
   <>
      {/* model start */}

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {/* model end */}

      {/* card */}

      <div className='my-20'>
        <div className='max-w-6xl mx-auto grid grid-cols-4 gap-5'>
          {users.map(books => {
           
            return <>
              <div className='bg-gray-200 max-w-[230px] rounded-t-2xl relative rounded-tr-2xl'>
                <img className='max-w-[230px] rounded-t-2xl h-44 w-full' src={ getImageUrl(books.data().imageURL) } alt='img' />
                <div className='p-4 space-y-1'>
                  <h1 className='text-lg text-blue-900 font-bold'><span className=''>BookName:</span>{books.data().bookname}</h1>
                  <span><span className='font-medium'>Price:</span>{books.data().price}</span>
                  <p><span className='font-medium'>ISBN:</span>{books.data().ISBN}</p>
                  <address className='text-blue-900 text-sm'><span className='font-medium'>Email:</span>{books.data().Email}</address>
                </div>
                <button className='bg-blue-950 hover:bg-blue-900 text-white w-full p-3' onClick={() => details(books)}>Details</button>
              <button className='text-white p-2 text-sm bg-red-700 absolute top-0 right-0 hover:bg-red-600 ' onClick={()=>firebase.Deleteresult(books)}>Delete</button>
              </div>
            </>
          })}
        </div>
      </div>
   
   </>
  )
}

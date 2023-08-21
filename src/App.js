import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './Pages/Index';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Header from './Components/Header';
import Addlisting from './Pages/Addlisting';
import Footer from './Components/Footer';




export default function App(props) {
 
 

  return (
    <>
     <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Index />}/>
            <Route path="signup" element={<Signup />}/>
            <Route path="login" element={<Login />}/>
            <Route path="addListing" element={<Addlisting />}/>
          </Routes> 
          <Footer/>
  
    </BrowserRouter>

    </>
  )
}


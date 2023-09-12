import React from 'react'
import Navbar from './navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contactus from './pages/Contactus'
import Aboutus from './pages/Aboutus'
import Services from './pages/Services'

export default function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
        <Route element={<Home></Home>} path='/'></Route>
        <Route element={<Contactus></Contactus>} path='/Contactus'></Route>
        <Route element={<Aboutus></Aboutus>} path='/Aboutus'></Route>
        <Route element={<Services></Services>} path='/Services'></Route>
        <Route path='*' element={<div>404: Not found Page</div>}></Route>
    </Routes>
    </>
  )
}

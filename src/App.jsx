import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import Nav from "./components/Nav"
import About from "./pages/About"
import Stock from "./pages/Stock"
import Home from "./pages/Home"
import Dashboard from './pages/Dashboard'

export default function App() {


  return (
    <>
    <Nav /> 
     <Routes>
     <Route path='/' element={<Home />}/> 
     <Route path='/about' element={<About  />}/> 
     <Route path='/stocks/:symbol' element={<Stock />}/> 
     <Route path='/stocks' element={<Dashboard />} />
     </Routes>
    </>
  )
}

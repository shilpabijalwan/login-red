import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from '../Pagess/HomePage'
import Login from '../Pages/Login'

export default function Router() {
  return (
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/login' element={<Login/>}/>
   </Routes>
  )
}

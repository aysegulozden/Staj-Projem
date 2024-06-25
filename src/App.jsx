import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import { Routes, Route } from 'react-router-dom'
import NewUser from './Components/NewUser'
import AdminPage from './Components/AdminPage'
import UserPage from './Components/UserPage'
import Harita from './Components/Harita'
import HaritaUser from './Components/HaritaUser'
import Iletisim from './Components/Iletisim'
import About from './Components/About'
import AboutUser from './Components/AboutUser'





function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/newUser' element={<NewUser />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/UserPage' element={<UserPage />} />
        <Route path='/Harita' element={<Harita />} />
        <Route path='/HaritaUser' element={<HaritaUser />} />
        <Route path='/Iletisim' element={<Iletisim />} />
        <Route path='/about' element={<About />} />
        <Route path='/AboutUser' element={<AboutUser />} />
      </Routes>

    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import { Routes, Route } from 'react-router-dom'
import NewUser from './Components/NewUser'
import AdminPage from './Components/AdminPage'
import LoginNewUser from './Components/LoginNewUser'
import UserPage from './Components/UserPage'
import UserAktivites from './Components/UserAktivites'
import Harita from './Components/Harita'
import HaritaUser from './Components/HaritaUser'





function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/newUser' element={<NewUser />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/LoginNewUser' element={<LoginNewUser />} />

        <Route path='/UserPage' element={<UserPage />} />
        <Route path='/Harita' element={<Harita />} />
        <Route path='/HaritaUser' element={<HaritaUser />} />
        <Route path='/aktivite' element={<UserAktivites />} />

      </Routes>

    </div>
  )
}

export default App

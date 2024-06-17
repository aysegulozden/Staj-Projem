import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import { Routes, Route } from 'react-router-dom'
import NewUser from './Components/NewUser'
import AdminPage from './Components/AdminPage'
import LoginNewUser from './Components/LoginNewUser'

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/newUser' element={<NewUser />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/LoginNewUser' element={<LoginNewUser />} />

      </Routes>

    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import { Routes, Route } from 'react-router-dom'
import NewUser from './Components/NewUser'
import AdminPage from './Components/AdminPage'

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/newUser' element={<NewUser />} />
        <Route path='/admin' element={<AdminPage />} theme={theme} setTheme={setTheme} />

      </Routes>

    </div>
  )
}

export default App

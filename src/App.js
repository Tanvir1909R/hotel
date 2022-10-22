import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Rooms from './pages/rooms/Rooms'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import Register from './pages/registerAndLogin/Register'
import Login from './pages/registerAndLogin/Login'

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/rooms' element={ <Rooms/> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/about' element={ <About/> } />
          <Route path='/register' element={ <Register/> } />
          <Route path='/login' element={ <Login/> } />
        </Routes>
      </main>
    </>
  )
}

export default App
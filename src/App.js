import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Rooms from './pages/rooms/Rooms'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'

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
        </Routes>
      </main>
    </>
  )
}

export default App
import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import './App.css'
import './sass/index.scss'
import ScrollToTop from './components/ScrollToTop'

import Frontpage from './pages/frontpage/index'
import Contact from './pages/Contact/index'
import Login from './pages/Login/index'
import Footer from './components/Footer/index'
import Navigation from './components/Navigation'
import About from './pages/About/index'
import Forum from './pages/Forum/index'
import Singleview from './pages/Forum/Singleview'


function App () {
 return (
    <>
      <BrowserRouter basename='/chri704r.github.io/boss_info'>
        <ScrollToTop />

        <Navigation/>
        <main>
          <Routes>
            <Route exact path='about' element={<About/>} />
            <Route exact path='contact' element={<Contact/>} />
            <Route exact path='forum' element={<Forum/>} />
            <Route exact path='forum/:questionId' element={<Singleview/>}/>
            <Route exact path='' element={<Frontpage/>} />
          </Routes>
        </main>

        <Routes>
            <Route exact path='login' element={<Login/>} />
            
         </Routes>
        
        <Footer/>
      </BrowserRouter>
      
    </>
 )
}

export default App

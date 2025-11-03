import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/home'
import Services from './pages/Services'
import Contact from'./pages/Contact'
import Blogs from "./pages/Blogs"
import Navbar from './components/navigation/navbar'
import FullScreenNav from './components/navigation/fullScreenNav'

import ReactLenis from 'lenis/react'
import Footer from './components/navigation/footer'


function App() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
      }}
    >
      <Navbar />
      <FullScreenNav />
    

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blogs" element={<Blogs />} />
        </Routes>
      </main>
        <Footer/>
    </ReactLenis>
  )
}


export default App
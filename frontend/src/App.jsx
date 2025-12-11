import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Fooldal from './pages/fooldal.jsx'
import Konyv from './pages/konyv.jsx'
import Torles from './pages/torles.jsx'
import Beszuras from './pages/beszuras.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Fooldal/>} />
          <Route path='/konyvek' element={<Konyv/>} />
          <Route path='/beszur' element={<Beszuras/>} />
          <Route path='/torol' element={<Torles/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

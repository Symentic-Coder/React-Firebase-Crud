import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomeScren from './screen/HomeScren'
import MainPage from './screen/MainPage'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/homesc" element={<HomeScren/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
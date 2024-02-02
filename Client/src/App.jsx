import { useState } from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout/mainlay'
import Home from './Pages/Home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
      <Route path='/home' element={<Home/>}></Route>
      </Route>
    </Routes>
      
    </>
  )
}

export default App

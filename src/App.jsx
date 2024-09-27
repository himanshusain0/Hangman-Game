import { Route, Routes } from 'react-router-dom'
import './App.css'
import StartGame from './pages/StartGame/StartGame'
import PlayGame from './pages/PlayGame/PlayGame'
// import Home from './pages/Home'
import image from './assets/bg.png'
function App() {

  return (
      <div className={`h-screen w-full bg-center flex justify-center items-center bg-cover bg-[url('./assets/th.png')]  text-white `}>
      <Routes>
        <Route path='/start' element={<StartGame />} />
        <Route path='/play' element={<PlayGame />} />
        {/* <Route path='/' element={<Home />} /> */}
      </Routes>
      </div> 
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:Color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-gray-300 px-3 py-2 rounded-3xl'>
      <button onClick={()=> setColor("red")} className='outline-none px-4 py-1 rounded-full text-white-400 shadow-lg'
      style={{backgroundColor:"red"}}>Red</button>
      <button onClick={()=> setColor("#5AB834") }className='outline-none px-4 py-1 rounded-full text-white-400 shadow-lg'
      style={{backgroundColor:"#5AB834"}}>Green</button>
      <button onClick={()=> setColor("#987BB0") } className='outline-none px-4 py-1 rounded-full text-white-400 shadow-lg'
      style={{backgroundColor:"#987BB0"}}>Lavender</button>
      <button onClick={()=> setColor("#D2449B") } className='outline-none px-4 py-1 rounded-full text-white-400 shadow-lg'
      style={{backgroundColor:"#D2449B"}}>Pink</button>
      <button onClick={()=> setColor("#FFA500") } className='outline-none px-4 py-1 rounded-full text-white-400 shadow-lg'
      style={{backgroundColor:"#FFA500"}}>Orange</button>
      <button onClick={()=> setColor("#1AA7EC") } className='outline-none px-4 py-1 rounded-full text-white-400 shadow-lg'
      style={{backgroundColor:"#1AA7EC"}}>Blue</button>
      </div>
    </div>
    </div>
  )
}

export default App

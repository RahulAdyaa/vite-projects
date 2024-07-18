import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
  // let myobj={
  //   name: "rahul",
  //   age: 20
  // }
  // let mewarr=[1,2,3,4];
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 mb-4 align-super'>Tailwind test</h1>
<Card username="chaiaurcode"  btntext="1" />
<Card username="rahul" btntext="3"/>
<Card username="ananya" btntext="5"/>
<Card username="aman" btntext="8"/>
<Card username="pal" btntext="9"/>

    </>
  )
}

export default App

import { useState , useCallback , useEffect ,useRef  } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [NumberAllowed,SetNumberAllowed]=useState(false)
  const [CharAllowed,SetCharAllowed]=useState(false)
  const [Password,setPassword]=useState("")

//useCallback is a React Hook that lets you cache a function definition between re-renders.
//useref hook 
const passwordRef=useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""

    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(NumberAllowed) str+="0123456789"
    if(CharAllowed) str+="!@#$%-_=+[]{}~^&*()"

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random()*str.length +1)
      pass += str.charAt(char)  // jab upar wala loop end hoga to iss paas mein eventually value aajayegi
    }

    setPassword(pass)
  },[length,NumberAllowed,CharAllowed,setPassword])

  //useEffect is a React Hook that lets you perform side effects in your components.

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,passwordRef.current?.value.length) //selecting the whole text
    window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(()=>{passwordGenerator()},[length,CharAllowed,NumberAllowed,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className='text-white text-center my-3'>Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4 "><input type="text" value={Password} className='outline w-lvw py-2 px-5 overflow-auto' placeholder='password '  readOnly ref={passwordRef}/>
      <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 py-0.5  px-3 shrink-0 text-blue-50 text-center'>copy</button>
      
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer '
          onChange={(e)=>{setLength(e.target.value)}}
           />
           <label htmlFor=''> Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={NumberAllowed}
          id="numberInput"
          onChange={()=>{
            SetNumberAllowed((prev)=>!prev)  // treu aur false flip hota rhega
          }} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={CharAllowed}
          id="numberInput"
          onChange={()=>{
            SetCharAllowed((prev)=>!prev)  // treu aur false flip hota rhega
          }} />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App

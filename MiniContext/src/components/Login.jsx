import React,{useContext,useState} from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassowrd]=useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault()  
        setUser({username,password})

    }
  return (
    <div>
        <h2>LOGIN</h2>
        <input type="text"
        value={username}
        onChange={(e)=>setUsername(e.target.value)} //to hgovern all values
        placeholder='username'/>

        <input type="password"
        onClick={password}
        onChange={(e)=>setPassowrd(e.target.value)}
        placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
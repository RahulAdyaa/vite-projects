import React,{useState,useContext} from "react";
import UserContext from "../Context/UserContext";


function Profile() {
    const []=useState('')
    const {user}=useContext(UserContext)

    const takevalue=()=>{

    }
    if(!user) return <div>Please login</div>

    return <div>Welcome {user.username}</div>
  
}

export default Profile
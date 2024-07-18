import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {
  const {userid} = useParams()  // this is very important , useparams is a hook that is used to add reference of anything 
  //The useParams hook in React Router is a powerful feature that allows you to access the dynamic parts of the URL, known as parameters, within your components. This is particularly useful when you want to create routes that capture variable content, such as user IDs or product names, from the URL.
  
  return (
    <div>User:{userid}</div>
  )
}

export default Users
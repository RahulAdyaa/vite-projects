import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/home/home.jsx'
import Layout from './layout.jsx'

import About from './components/abouttt/About.jsx'
import Contact from './components/Contact/Contact.jsx'
// import User from './components/Users/Users.jsx'
import Users from './components/Users/Users.jsx'
import Github from './components/Github/Github.jsx'






// const router=createBrowserRouter([{
//   path:'/',
//   element:<Layout/>,
//   children:[
//     {
//       path:"",
//       element:<Home/>
//     },{
//       path:"about",
//       element:<Aboutt/>
//     },
//     {
//       path:"contact",
//       element:<Contact/>
//     }
//   ]
// }])

// ++++++++++++++ Can write like below or above format +++++++++++++++++++++++++++


const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/:userid' element={<Users/>}/>
    <Route path='Github' element={<Github/>}/>
    

  
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

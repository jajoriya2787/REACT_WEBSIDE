import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Cmmone/Header'
import Footer from './Cmmone/Footer'
import Home from './Page/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Page/About'
import Layout from './Cmmone/Layout'
import Shop from './Page/Shop'
import Card from './Page/Card'
import Login from './Page/Login'
import Sign from './Page/Sign'
import Prodata from './Page/Prodata'
import Contextmain from './Context/Contextmain'


function App() {

  const routes = createBrowserRouter(
    [
      {
        path : '/',
        element :<Layout/>,
        children : [
          {
            path :'',
            element : <Home/>
          },
            {
            path :'/about',
            element : <About/>
          },
            {
            path :'/shop/:slug?',//yha shop ke bad yh jo bhi likha gya h yh wo name h jo ki catogary par click kaene par upar lick me or wepside usse relited itams dikhane me help karega
            element : <Shop/>
          },
          {
            path :'/Prodata/:proID',//yha shop ke bad yh jo bhi likha gya h yh wo name h jo ki catogary par click kaene par upar lick me or wepside usse relited itams dikhane me help karega
            element : <Prodata/>
          },
           {
            path :'/login',
            element : <Login/>
          },
           {
            path :'/sign',
            element : <Sign/>
          },
          {
            path :'/card',
            element : <Card/>
          }
        ]
      }
    ]
  )

  return (
    <>
    <Contextmain>
   <RouterProvider router={routes} />
   </Contextmain>
    </>
  )
}

export default App

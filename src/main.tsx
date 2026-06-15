import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import 'github-markdown-css'
import './index.css'
import { router } from './router'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
)
function App() {
    const [state, setState] = useState(12120);
    setTimeout(() => {
      setState(12120)
    }, 3000)
  return (
   <>{ new Date().getTime() }</>
  )
}

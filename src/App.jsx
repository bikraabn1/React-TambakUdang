import "./index.css"
import Navbar from "./components/Navbar"
import { useEffect, useState } from "react"
import {  useLocation, Link } from "react-router-dom" 
import Header from "./components/Header"
import Router from "./Routes/Router"

function App() {

  const location = useLocation()

  const [path, setPath]= useState(location.pathname)

  useEffect(()=>{
    setPath(location.pathname)
  },[location])

  const CloseDrawerHandler = () =>{
    const label = document.getElementById('my-drawer')
    label.checked = false
  }

  return (
    <>

      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
            <Navbar />
            <Header name={path}/>
            <div className="hero bg-base-200 min-h-screen p-3 max-w-[98%] rounded-3xl self-center flex flex-wrap gap-4 justify-start  mb-20 ">
              <Router  />
            </div>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <h2 className="font-bold text-2xl mb-5">My Tambak Udang</h2>
            <li><Link to="/" onClick={CloseDrawerHandler}>Home</Link></li>
            <li><Link to="/AboutMe" onClick={CloseDrawerHandler}>About Me</Link></li>
            <li><Link to="/Details" onClick={CloseDrawerHandler}>Details</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App

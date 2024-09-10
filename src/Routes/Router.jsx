import { Routes, Route } from "react-router-dom"
import Dashboard from "../Pages/Dashboard"
import AboutMe from "../Pages/AboutMe"
import Details from "../Pages/Details"
import Tables from "../Pages/Tables"

export default function Router(){
    return (
        <>
            <Routes>
              <Route  path="/" element={<Dashboard />}/>
              <Route  path="/AboutMe" element={<AboutMe />}/>
              <Route  path="/Details" element={<Details />}/>
              <Route  path="/Tables" element={<Tables  />}/>
            </Routes>
        </>
    )
}
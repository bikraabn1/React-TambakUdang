import { useContext, useState, useEffect } from "react"
import axios from 'axios'
import StateContext from "./StateContext"

export default function StateProvider({children}){
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('/dataDummy.json')
        .then(response => setData(response.data.slice(-10)))
        .catch(error => console.error(error))
    },[])

    return (
        <>
            <StateContext.Provider value={{data, setData}}>
                {children}
            </StateContext.Provider>
        </>
    )
}
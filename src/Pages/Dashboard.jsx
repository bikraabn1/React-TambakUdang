import { useNavigate } from 'react-router-dom';
import Chart from '../components/Chart';
import { useEffect, useState } from 'react';
import  axios  from 'axios';

export default function Dashboard() {
  const navigate = useNavigate()
  
  useEffect(()=>{
    axios.get('/dataDummy.json')
      .then(response => setDataDummy(response.data))
      .catch(err => console.error('Error fetching data',err))
  },[])

  const [dataDummy, setDataDummy] = useState([])
  
  const dataNames = dataDummy.length > 0 ? Object.keys(dataDummy[0]) : []

  const strokeColors = {
    "do" : "#F5004F",
    "ph" : "#FF9800",
    "temperature" : "#4CAF50",
    "turbidity" : "#03A9F4"
  }

  const dataWithIndex = dataDummy.map((item, index) => (
    { 
      ...item, 
      id: index + 1, 
      index 
    }
  ))

  const navigateHandler = (name, data, color) =>{
    navigate('/Details', {state : {name, data, color}})
  }

  return (
    <>
      {dataDummy.length > 0 && dataNames.map((name) => (
          <Chart  
            key={name}
            name={name}
            data={dataWithIndex}  
            dataKey={name}
            color={strokeColors[name]}
            onClick ={() => navigateHandler(name, dataWithIndex, strokeColors[name])}
          />
      ))}
    </>
  )
}

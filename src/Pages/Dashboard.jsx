import { Link,useNavigate } from 'react-router-dom';
import Chart from '../components/Chart';
import React from 'react';



export default function Dashboard() {
  const navigate = useNavigate()

  const dataDummy = [
    { 
      "do": 6.5, 
      "ph": 7.2, 
      "temperature": 28.5, 
      "turbidity": 10.0 
    },
    { 
      "do": 7.0, 
      "ph": 7.4, 
      "temperature": 27.8, 
      "turbidity": 12.0 
    },
    { 
      "do": 6.8, 
      "ph": 7.0, 
      "temperature": 29.0, 
      "turbidity": 11.5 
    },
    { 
      "do": 7.2, 
      "ph": 7.6, 
      "temperature": 28.0, 
      "turbidity": 9.8 }
      ,
    { 
      "do": 6.9, 
      "ph": 7.3, 
      "temperature": 27.5, 
      "turbidity": 10.5 
    },
    { 
      "do": 6.7, 
      "ph": 7.1, 
      "temperature": 28.3, 
      "turbidity": 10.2 
    },
    { 
      "do": 7.1, 
      "ph": 7.5, 
      "temperature": 28.7, 
      "turbidity": 11.0 
    },
    { 
      "do": 6.6, 
      "ph": 7.2, 
      "temperature": 27.9, 
      "turbidity": 10.7 
    },
    { 
      "do": 6.9, 
      "ph": 7.4, 
      "temperature": 28.1, 
      "turbidity": 9.5 }
      ,
    { 
      "do": 7.0, 
      "ph": 7.3, 
      "temperature": 28.6, 
      "turbidity": 10.8 
    }
  ];

  const dataNames = Object.keys(dataDummy[0])

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

  return (
    <>
      
      {dataNames.map((name) => (
        <div key={name} onClick={()=> navigate('/Details')}>
          <Chart  
            key={name}
            name={name}
            data={dataWithIndex}  
            dataKey={name}
            color={strokeColors[name]}
          />
        </div>
      ))}
      {dataWithIndex.map((data)=>console.log(data))}
    </>
  )
}

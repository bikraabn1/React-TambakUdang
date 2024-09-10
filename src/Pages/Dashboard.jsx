import { useNavigate } from 'react-router-dom';
import Chart from '../components/Chart';
import StateContext from '../lib/StateContext';
import { useContext } from 'react';

export default function Dashboard() {
  const navigate = useNavigate()

  const { data } = useContext(StateContext)

  const dataNames = data.length > 0 ? Object.keys(data[0]) : []

  const strokeColors = {
    "do": "#F5004F",
    "ph": "#FF9800",
    "temperature": "#4CAF50",
    "turbidity": "#03A9F4"
  }

  const dataWithIndex = data.map((item, index) => (
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
      {data.length > 0 && dataNames.map((name) => (
        <Chart
          key={name}
          name={name}
          data={dataWithIndex}
          dataKey={name}
          color={strokeColors[name]}
          onClick={() => navigateHandler(name, dataWithIndex, strokeColors[name])}
          width="48%"
          height={300}
        />
      ))}
    </>
  )
}

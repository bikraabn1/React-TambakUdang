import Chart from "../components/Chart"
import { useLocation, useNavigate } from 'react-router-dom'


export default function Details() {
    const location = useLocation()
    const { name, data, color } = location.state || {}

    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/Tables', {state : {name, data}})
    }

    return (
        <>
            { name && data 
                ? 
                <Chart
                    name={name}
                    data={data}
                    dataKey={name}
                    color={color}
                    width="90%"
                    height={400}
                    onClick = {() => navigateHandler(name, data)}
                />
                : 
                <p>No data available</p>
            }
        </>
    )
}
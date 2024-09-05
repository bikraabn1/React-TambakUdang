import Chart from "../components/Chart"
import { useLocation } from 'react-router-dom'

export default function Details() {
    const location = useLocation()
    const { name, data ,color} = location.state || {}

    return (
        <>
            { name && data ? (
                <Chart
                    name={name}
                    data={data}
                    dataKey={name}
                    color={color}  
                    width="90%"
                    height={400}
                />
            ) : (
                <p>No data available</p>
            )}
        </>
    )
}
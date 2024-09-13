import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,ReferenceLine } from 'recharts'
import { useLocation } from 'react-router-dom'

export default function Chart(props) {

    const location = useLocation()

    return (
        <>
            <div className="card bg-base-100 shadow shadow-slate-300 rounded-md self-start" style={{ width: props.width }}>
                <div className="card-body">
                    <ResponsiveContainer width="100%" height={props.height}>
                        <LineChart data={props.data} margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis  dataKey={props.Xkey}/>
                            <YAxis />
                            <Tooltip />
                            <ReferenceLine y={props.normalLine} stroke="green" label="Normal" />
                            <Line type="monotone" dataKey={props.dataKey} stroke={props.color} />
                        </LineChart>
                    </ResponsiveContainer>

                    <div className="card-actions justify-center">
                        <div className="badge">{props.name}</div>
                    </div>

                    <button className='btn btn-primary self-start' onClick={props.onClick}>
                        { location.pathname == "/" ? "Check Details" : "Check Tables"}
                    </button>
                </div>
            </div>
        </>
    )
}

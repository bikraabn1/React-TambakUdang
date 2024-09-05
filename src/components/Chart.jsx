import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart(props) {
    return (
        <>
            <div className="card bg-base-100 shadow shadow-slate-300 rounded-md self-start" onClick = {props.onClick} style={{width : props.width}}>
                <div className="card-body ">
                    <ResponsiveContainer width="100%" height={props.height}>
                        <LineChart data={props.data} margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey={props.dataKey} stroke={props.color} />
                        </LineChart>
                    </ResponsiveContainer>

                    <div className="card-actions justify-center">
                        <div className="badge">{props.name}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

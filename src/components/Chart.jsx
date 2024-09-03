import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart(props) {
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={props.data} margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="index" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey={props.dataKey} stroke='#F5004F' />
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

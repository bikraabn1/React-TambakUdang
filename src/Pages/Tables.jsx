import { useLocation } from 'react-router-dom'

export default function Tables() {
    const location = useLocation()
    const { data } = location.state || {}

    return (
        <>
            <div className="overflow-x-auto self-start">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>Dissolved Oxygen</th>
                            <th>potential of Hydrogen (pH)</th>
                            <th>Temperature</th>
                            <th>Turbidity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((data) =>{
                                return(
                                    <tr>
                                        <td>{data.do}</td>
                                        <td>{data.ph}</td>
                                        <td>{data.turbidity}</td>
                                        <td>{data.temperature}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            {console.log(data)}
        </>
    )
}
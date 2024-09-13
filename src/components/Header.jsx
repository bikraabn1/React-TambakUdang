export default function Header(props){

    const cleanedName = props.name.replace("/", " ")
    const formattedName = cleanedName.replace(/([a-z])([A-Z])/g, '$1 $2')
    const date = new Date()

    return (
        <div className="px-10 pt-10 pb-7 font-semibold text-3xl flex justify-between">
            { props.name === "/" ?
                <h2>Home</h2>  :
                <h2>{formattedName}</h2>
            }

            <h2 className="font-thin">{`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</h2>
        </div>
    )
}
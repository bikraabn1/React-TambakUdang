export default function Header(props){

    const cleanedName = props.name.replace("/", " ")
    const formattedName = cleanedName.replace(/([a-z])([A-Z])/g, '$1 $2')

    return (
        <div className="px-10 pt-10 pb-7 font-bold text-3xl">
            { props.name === "/" ?
                <h2>Home</h2>  :
                <h2>{formattedName}</h2>
            }
        </div>
    )
}
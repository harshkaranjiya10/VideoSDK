function Abox(props) {
    return (
        <div>
            <div className="bg-gray-950 w-[{props.width}] h-[{props.height}]" /> 
            <div className="bg-gray-950 w-[{props.width}] h-[{props.height}]" />
        </div>   
    )  
}

export default Abox;
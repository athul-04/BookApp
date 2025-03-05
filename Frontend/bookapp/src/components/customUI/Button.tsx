
interface ButtonProps{
    value:string;
    typeof:any
}


const Button=(props:ButtonProps)=>{
    return (
        <>
            <button className="bg-blue-500 w-24 p-2 rounded-full text-white hover:bg-blue-200 hover:text-black border-2 hover:border-black-300" type={props.typeof}>{props.value}</button>          
        </>
    )
}

export default Button;
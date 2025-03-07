import logoImg from "../assets/logo.png"   

interface resultItemProps{
    title: string;
    price:string;
    image_url:string;
}
export default function ResultItem(props:resultItemProps){
    const {title, price, image_url}=props;
    return (
        <>
            <div className="flex flex-col w-60 border-2 border-blue-500 pt-2 h-85 gap-5 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-black-300 bg-grey-100">
                    <div>
                        <img className="h-47 w-45 mx-auto" src={image_url} alt="" />
                    </div>
                    <div className="text-center pt-0 mt-0">
                        <p className="mt-0 pt-0 pb-2">{title.length>28?title.slice(0,29):title}</p>
                        <p>{price}</p>
                    </div>
                    <div className="flex">
                        <button className="text-center mx-auto border-1 p-1 px-2 rounded-xl bg-yellow-500 hover:bg-yellow-200 transition-all duration-500 ease-in transform   ">Add to Cart</button>
                    </div>
            </div>  
        </>
    )
}
import logoImg from "../assets/logo.png"
import Searchbar from "./Searchbar"
export default function Navbar(){
    return (
        <>
            <div className="bg-blue-300 h-23 w-screen flex flex-row justify-between">
                <div className="flex ml-10  ">
                    <img className="w-15 h-15 my-auto  rounded-full border-2 border-black-400 hover:border-blue-500 " src={logoImg} alt="" />
                </div>
                <div className="flex w-1/2">
                    <Searchbar />
                </div>
                
                <div className="flex mr-10">
                    <img className="w-15 h-15 my-auto" src={logoImg} alt="" />
                </div>
            </div>
        </>
    )
}
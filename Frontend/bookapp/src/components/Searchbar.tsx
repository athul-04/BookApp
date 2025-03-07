import logoImg from "../assets/logo.png"
export default function Searchbar(){
    return(
        <>
            <input type="text" className="w-3/4 h-12 my-auto p-2 border-3 border-white rounded-l-md  outline-none" placeholder="Search Books" />
            <button className="bg-red-100 h-12 my-auto rounded-r-md">
                <img className="h-12 my-auto rounded-r-md" src={logoImg} alt="" />
            </button>
        </>
    )
}
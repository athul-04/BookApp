import { redirect, useSearchParams } from "react-router-dom";
import Signup from "../components/Signup";
import Login from "../components/Login";
import logoImg from "../assets/logo.png"

const AuthPage=()=>{
    const [searchParams, setSearchParams] = useSearchParams();
    if (!searchParams.get("mode")) {
        setSearchParams({ mode: "Signup" });
    }
    const mode=searchParams.get("mode")|| "Signup";

    return (
        <>
            <div className="h-screen  flex md:ml-20">
                    <div className="w-1/2 mr-0 hidden sm:hidden lg:flex">
                        <img className="m-auto lg:h-1/2" src={logoImg} alt="" mr-0/>
                        
                    </div>
                    <div className="h-screen container flex flex-col justify-center gap-10">
                {mode==="Login"?<Login/>:<Signup/>}
                </div>
            </div>
        </>
    )
}
export default AuthPage;

export const signupAction=async({request,params}:any)=>{
    const formData= await request.formData();

    const searchParams=new URL(request.url).searchParams;
	const mode=searchParams.get('mode');
    if(mode==="Login"){
        return redirect("/HomePage")
    }
    return redirect("/?mode=Login")  
}
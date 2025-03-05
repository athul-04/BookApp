import { redirect, useSearchParams } from "react-router-dom";
import Signup from "../components/Signup";
import Login from "../components/Login";

const AuthPage=()=>{
    const [searchParams, setSearchParams] = useSearchParams();
    if (!searchParams.get("mode")) {
        setSearchParams({ mode: "Signup" });
    }
    const mode=searchParams.get("mode")|| "Signup";

    return (
        <>
            {mode==="Login"?<Login/>:<Signup/>}
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
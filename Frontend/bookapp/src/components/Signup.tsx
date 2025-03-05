import { Form,Link } from "react-router-dom"
import Button from "./customUI/Button"
export default function Signup(){
    return (
        <>
            <div className="h-screen container flex flex-col justify-center gap-6">
                <h2 className="mx-auto text-3xl">Signup Page</h2>
                <div className="p-2 w-1/3 h-1/2 bg-black-200 mx-auto border-3 rounded-xl border-blue-500">
                    <div className="w-2/3 mx-auto ">
                        <Form  method="post" className="h-60 flex flex-col justify-center mt-10">
                            <input type="email" name="email" className="  appearance-none p-1 border-3  rounded-lg mt-2 focus:outline-none focus:border-blue-700 border-blue-400 invalid:border-red-500"/>
                            <input type="password" name="password" className=" appearance-none p-1 border-3  rounded-lg mt-2 focus:outline-none focus:border-blue-700 border-blue-400" placeholder="******"  required/>
                            <input type="password" name="confirmPassword" className=" appearance-none p-1  border-3  rounded-lg mt-2 focus:outline-none focus:border-blue-700 border-blue-400" placeholder="******" required/>
                            <div className="container text-center mt-6">
                                <Button typeof={SubmitEvent} value="SignUp" />
                            </div>
                        </Form>
                    </div>
                    <div className="container text-center">
                        <Link className="font-semibold text-lg hover:text-blue-500" to={`?mode=Login`}>Login</Link>
                    </div>
                </div>
            </div>

        </>
    )

}


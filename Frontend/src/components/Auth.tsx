import { ChangeEvent, useState } from "react";
import { Link,  useNavigate } from "react-router-dom"

import { signupinput } from "@anshikjain/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";


export const Auth = ({type}: {type:"signup"|"signin"})=>{
    const navigate = useNavigate()
    const [postinput,setpostinputs] = useState<signupinput>({
        name:"",
        email:"",
        password:""

    })

    async function sendRequest(){
        try {

        const response  = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup"?"signup":"signin"}`,postinput)
        const jwt = response.data.jwt
        localStorage.setItem("token",jwt);
        navigate("/blogs")
        }
        catch (e){
            alert("Error while signing up ")

        }
    }


    return <div className="h-screen flex justify-center flex-col">
      
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-bold text-left ">
                        Create an account 
                    </div>

                    <div className="text-slate-400">
                        {type==="signin"?"Dont't have an account?" :"Already have an account?"}
                        <Link className=" pl-2 underline" to={ type ==="signin"? "/signup":"/signin"}>{type==="signin"?"Sign Up":"Sign In"}</Link>
                    </div>
                </div>
                    
                    <div className="pt-6">
                       {type ==="signup" ?  <Labelledinput label="Name" placeholder="Anshik Jain..." onChange={(e)=>{
                            setpostinputs({
                                ...postinput,
                                name:e.target.value
                            })
                        }}/> :null}
                        <Labelledinput label="Email" placeholder="Anshik123@gmail.com" onChange={(e)=>{
                            setpostinputs({
                                ...postinput,
                                email:e.target.value
                            })
                        }}/>
                        <Labelledinput label="Password" type={"password"} placeholder="123456" onChange={(e)=>{
                            setpostinputs({
                                ...postinput,
                                password:e.target.value
                            })
                        }}/>
                    </div>
                        
            <button onClick={sendRequest} type="button" className=" w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none 
            focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5   mt-8">{type==="signup"?"Sign up" : "Sign in"}</button>

                      
            </div>

        </div>

    </div>

}

interface LabelledInputType{
    label : string;
    placeholder :string;
    onChange:(e:ChangeEvent<HTMLInputElement>) => void
    type?:string

}
function Labelledinput({label,placeholder,onChange,type}:LabelledInputType){
    return <div>
        <div>
            <label  className="block mb-2  font-semibold text-black pt-2">{label}</label>
            <input  onChange = {onChange} type={type||"text" }id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 
            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
        </div>

    </div>
}
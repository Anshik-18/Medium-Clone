import axios from "axios"
import { Appbar } from "../components/appbar"
import { BACKEND_URL } from "../config"
import { ChangeEventHandler, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = ()=>{
    const [title,setitle] =useState("")
    const [content,setcontent] =useState("")
    const navigate = useNavigate()
    return <div>
                    <Appbar/>
        <div className="flex justify-center pt-10">
                   
                    <div className="max-w-screen-lg w-full">
                        <textarea  onChange= {(e)=>{
                            setitle(e.target.value)
                        }}className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Title..."></textarea>

            <TextEditor onChange ={(e)=>{
                    setcontent(e.target.value)
            }}/>
                    <button onClick={async ()=>{
                     const response =await  axios.post(`${BACKEND_URL}/api/v1/blog/post`, {
                        title,
                        content,
                        
                    },{
                        headers:{
                            Authorization:localStorage.getItem("token")
                        }
                    })
                    navigate(`/blog/${response.data.id}`)
                }} className=" mt-8 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg ">
                    Publish post
                </button>
                    </div>
            </div>
    </div>
} 

function TextEditor({ onChange }: { onChange: ChangeEventHandler<HTMLTextAreaElement> }) {
    return <div>
        
        <textarea onChange = {onChange}className=" mt-8 block p-2.5  h-70 w-full  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Title...">
        </textarea>

   
    </div>
}
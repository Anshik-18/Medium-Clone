import { Link } from "react-router-dom"

interface BlogCardprops{
    id:string
    authorname:string,
    title:string,
    content :string,
    PublishedDate:string
}
export const BlogCard  = ({
    authorname,title,content,PublishedDate,id }:BlogCardprops) =>{
   
    return <Link to={`/blog/${id}`}>
     <div className=" p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
            <div className="flex justify-center flex-col ">
            <Avtar authorname= {authorname}/>
            </div>
            <div className="font-extralight pl-2">
             {authorname}  
            </div>
            <div className="flex items-center justify-center pl-1 !text-slate-600 text-sm">
                 &#8226;
            </div>
            <div className="pl-1  text-slate-600 ">
             {PublishedDate}
            </div>
        </div>

        <div className="text-xl font-bold pt-2">
            {title}
        </div>

        <div className="text-md font-thin">
            {content.slice(0,100)+"..."}
        </div>

        <div className="w-full text-slate-500 text-sm font-thin pt-2">
            {`${Math.ceil(content.length/100)} minute(s) read`}
        </div>

      

    </div>
    </Link>
} 

export function Avtar({authorname}:{ authorname:string}){

    return <div className="relative inline-flex items-center justify-center 
    w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600  ">
    <span className="text-xs  font-extralight text-gray-600 dark:text-gray-300">
        {authorname[0] }
    </span>
    </div>
}
import { Blog } from "../hooks"
import { Appbar } from "./appbar"
import { Avtar } from "./Blogcard"

export const  FullBlog = ({blog}:{blog:Blog})=>{
    return <div>
        <Appbar></Appbar>
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10  w-full pt-12 max-w-screen-xl ">
                <div className="col-span-8  ">
                    <div className="text-4xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-400 pt-2">
                        Posted on 19 November  2011
                    </div>
                    <div className="pt-3 ">
                        {blog.content}
                    </div>
                </div>

                <div className="col-span-4 pl-10 ">
                    <div className="text-slate-600 text-lg">
                         Author
                    </div>
                    <div className="flex  ">
                        <div className="flex flex-col justify-center">
                            <Avtar authorname={blog.author.name||"Annonyomous"} ></Avtar>
                        </div>
                        <div className="pl-2">
                            <div className="text-xl font-bold">
                                {blog.author.name || "Annonymous"}
                            </div>

                            <div className="pt-2 text-slate-500">
                                    Random cathc Phrase about the author's ability to grab the user attention 
                            </div>
                            </div>
                        </div>

                </div>


            </div>
        </div>
    </div>
}
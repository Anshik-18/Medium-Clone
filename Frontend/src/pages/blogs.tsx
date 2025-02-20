import { Appbar } from "../components/appbar"
import { BlogCard } from "../components/Blogcard"
import { BlogSkeleton } from "../components/BLogsSkeleton"
import { useblogs } from "../hooks"

export const Blogs = ()=>{
    const { loading, blogs}  = useblogs()
    if(loading){
        return <div>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
        </div>
    }
    return <div >
                <Appbar/>

                <div className=" flex flex-col items-center ">        
                    <div className="">
                        {blogs.map(blog =>  <BlogCard 
                        id={blog.id}
                        authorname ={blog.author.name|| "Annonymous"} 
                        title= {blog.title} 
                        content ={blog.content}
                        PublishedDate ={"19/11"}
                        > 
                        </BlogCard>)}
                    </div>
                
                </div>
            </div>
}
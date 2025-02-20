import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog";
import { FullBlogSkeleton } from "../components/BLogsSkeleton";

export const Blog = ()=>{
    const{id } = useParams()
  
    const {loading,blog} = useBlog({
        id: id||" "
    });
    if(loading){
        return <div>
            <FullBlogSkeleton/>
        </div>
    }
    if (!blog) {
        return <div>Error: Blog not found</div>; // Handle case where blog is undefined
    }
    return <div>
      <FullBlog blog={blog}/>
    </div>
}

import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog";
import { BlogSkeleton, FullBlogSkeleton } from "../components/BLogsSkeleton";

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
    return <div>
      <FullBlog blog={blog}/>
    </div>
}

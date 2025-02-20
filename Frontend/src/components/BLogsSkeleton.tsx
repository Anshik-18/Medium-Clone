export const BlogSkeleton = ()=>{
    return (
        <div className=" mt-20 p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md mx-auto cursor-pointer animate-pulse">
          {/* Author Section */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="h-4 bg-gray-300 w-24 rounded ml-2"></div>
            <div className="h-3 w-3 bg-gray-300 rounded-full mx-1"></div>
            <div className="h-4 bg-gray-300 w-16 rounded ml-1"></div>
          </div>
    
          {/* Title */}
          <div className="h-6 bg-gray-300 w-3/4 rounded mt-3"></div>
    
          {/* Content */}
          <div className="h-4 bg-gray-300 w-full rounded mt-2"></div>
          <div className="h-4 bg-gray-300 w-5/6 rounded mt-1"></div>
    
          {/* Read Time */}
          <div className="h-4 bg-gray-300 w-1/3 rounded mt-3"></div>
        </div>
      );
}



export const FullBlogSkeleton = () => {
    return (
      <div>
       
  
        <div className="flex justify-center mt-20">
          <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl">
            {/* Left Side (Main Content) */}
            <div className="col-span-8">
              <div className="h-10 bg-gray-300 w-3/4 rounded animate-pulse"></div> {/* Title */}
              <div className="h-4 bg-gray-300 w-1/3 rounded mt-2 animate-pulse"></div> {/* Date */}
              <div className="h-36 bg-gray-300 w-full rounded mt-4 animate-pulse"></div> {/* Content Placeholder */}
            </div>
  
            {/* Right Side (Author Section) */}
            <div className="col-span-4 pl-10">
              <div className="h-6 bg-gray-300 w-20 rounded animate-pulse"></div> {/* "Author" Text */}
              <div className="flex items-center mt-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse"></div> {/* Avatar */}
                <div className="ml-2">
                  <div className="h-5 bg-gray-300 w-24 rounded animate-pulse"></div> {/* Author Name */}
                  <div className="h-4 bg-gray-300 w-40 rounded mt-2 animate-pulse"></div> {/* Catchphrase */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
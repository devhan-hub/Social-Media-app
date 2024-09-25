import { MoreVert } from "@mui/icons-material"
export default function Post() {
  return (
    <div  className="w-full shadow-shadowhan my-[30px] mx-0">
      <div className="postWrapper p-[10px]">
        <div className="postTop flex items-center justify-between">
            <div className="posttopLeft flex items-center">
                <img src="/assets/person/1.jpeg" alt="" className="size-[32px] rounded-full object-cover"/>
                <span className="username text-[15px] font-bold mx-[10px]">Hanan Abdulshikur</span>
                <span className="postDate text-[10px]">5 mins ago</span>
            </div>
            <div className="postTopRight">
              <MoreVert/>
            </div>
        </div>
        <div className="my-[20px] mx-0">
            <span className="posttext">hey! it is my first post</span>
            <img src="/assets/post/1.jpeg" alt="" className="mt-[20px] w-full max-h-[500px] object-contain"/>
        </div>
        <div className="postBotto flex items-center justify-between">
            <div className="postbotleft flex items-center">
                <img src="/assets/like.png" alt=""  className="size-[24px] mr-[5px] cursor-pointer"/>
                <img src="/assets/heart.png" alt="" className="size-[24px] mr-[5px] cursor-pointer" />
                <span className="text-[15px]">32 people like it</span>
            </div>
            <div className="postbotRight">
                <div className="comment cursor-pointer border-[1px] border-dashed border-gray-300 text-[15px] p-2">9 comments</div>
            </div>
        </div>
      </div>
    </div>
  )
}

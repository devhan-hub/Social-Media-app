import { MoreVert } from "@mui/icons-material"
import {Users} from '../dummyData'
import { useState } from "react"

export default function Post({post}) {
  const[like , setLike] = useState(post.like)
  const[isLiked , setIsLiked] = useState(false)

  const handeLike=()=> {
    setLike(isLiked?like-1:like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div  className="w-full shadow-shadowhan my-[30px] mx-0">
      <div className="postWrapper p-[10px]">
        <div className="postTop flex items-center justify-between">
            <div className="posttopLeft flex items-center">
                <img src={Users.filter((user)=>user.id ===post?.userId)[0].profilePicture} alt="" className="size-[32px] rounded-full object-cover"/>
                <span className="username text-[15px] font-bold mx-[10px]">{Users.filter((user)=>user.id ===post?.userId )[0].username}</span>
                <span className="postDate text-[10px]">{post.date}</span>
            </div>
            <div className="postTopRight">
              <MoreVert/>
            </div>
        </div>
        <div className="my-[20px] mx-0">
            <span className="posttext">{post?.description}</span>
            <img src={post.photo} alt="" className="mt-[20px] w-full max-h-[500px] object-contain"/>
        </div>
        <div className="postBotto flex items-center justify-between">
            <div className="postbotleft flex items-center">
                <img src="/assets/like.png" alt="" onClick={handeLike}  className="size-[24px] mr-[5px] cursor-pointer"/>
                <img src="/assets/heart.png" alt="" onClick={handeLike} className="size-[24px] mr-[5px] cursor-pointer" />
                <span className="text-[15px]">{like} people like it</span>
            </div>
            <div className="postbotRight">
                <div className="comment cursor-pointer border-[1px] border-dashed border-gray-300 text-[15px] p-2">{post.comment} comments</div>
            </div>
        </div>
      </div>
    </div>
  )
}

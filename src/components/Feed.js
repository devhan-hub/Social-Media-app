import Share from "./Share"
import Post from "./Post"
import {Posts} from '../dummyData'
export default function Feed() {
  return (
    <div className="flex-[5]">
      <div className="p-[20px]">
     <Share/>
     {
      Posts.map((p)=>(
        <Post key={p.id} post={p}/>
      ))
     }
    

      </div>
    </div>
  )
}


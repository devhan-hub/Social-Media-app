import { Users } from "../dummyData"
export default function Rightbar() {
   return (
     <div className="flex-[3.5] -z-40">
      <div className="rightWrapper py-[20px] px-0 ">
        <div className="birthdat flex items-center justify-between">
          <img src="/assets/gift.png" alt="" className="size-[40px] mr-[10px]"  />
          <span className="font-light text-[15px]"><b>Pola Foster</b>  and <b>3 other friend</b> have a birthday today</span>
        </div>
        <img src="assets/ad.png" alt=""  className="w-full rounded-[10px] my-2"/>
        <h4 className="">Online Friend</h4>
        <ul className="p-0 m-0 list-none rightbarfrendist mt-3" >
         { Users.map((user)=>(
           <li  key={user.id} className="flex items-center mb-[15px] righbarfriend">
           <div className="mr-[10px] relative rightbarprofileContainer">
             <img src={user.profilePicture} alt="" className="size-[32px] object-cover rounded-full" />
             <span className="size-[15px] rounded-full bg-lime-400 absolute top-[-2px] right-0 border-[2px] border-solid border-white rightbarusername"></span>
           </div>
           <span className="font-semibold text-[15px]">{user.username}</span>
         </li>
         ))
         }
          
        </ul>
     
      </div>
     </div>
   )
 }
 

import { Users } from "../dummyData"

const HomeRightBar =()=> {
      return (
        <>
         <div className="birthdat flex items-center justify-between">
          <img src="/assets/gift.png" alt="" className="size-[40px] mr-[10px]"  />
          <span className="font-light text-[15px]"><b>Pola Foster</b>  and <b>3 other friend</b> have a birthday today</span>
        </div>
        <img src="assets/ad.png" alt=""  className="size-32 object-cover" className="w-full rounded-[10px] my-2"/>
        <h4 className="">Online Friend</h4>
        <ul className="p-0 m-0 list-none rightbarfrendist mt-3" >
         { Users.map((user)=>(
           <li  key={user.id} className="flex items-center mb-[15px] righbarfriend">
           <div className="mr-[10px] relative rightbarprofileContainer">
             <img src={user.profilePicture} alt=""  className="size-32 object-cover"className="size-[32px] object-cover rounded-full" />
             <span className="size-[15px] rounded-full bg-lime-400 absolute top-[-2px] right-0 border-[2px] border-solid border-white rightbarusername"></span>
           </div>
           <span className="font-semibold text-[15px]">{user.username}</span>
         </li>
         ))
         }
          
        </ul>
        </>
      )
}

const ProfileRightBar = ()=> {
  return (
   <>
      <h4 className="titel text-[18px] font-bold mb-[10px]">User Information</h4>
      <div className="info flex flex-col gap-2 mb-6">
      <div className="infoitem flex gap-3 ">
        <div className="rightbarInfoItem font-semibold">City:</div>
        <span className="infokey font-extralight ">New York</span>
      </div>
      <div className="infoitem flex gap-3 ">
        <div className="rightbarInfoItem font-semibold">From:</div>
        <span className="infokey font-extralight ">Madrid</span>
      </div>
      <div className="infoitem flex gap-3 ">
        <div className="rightbarInfoItem font-semibold">RelationShip:</div>
        <span className="infokey font-extralight ">Singel</span>
      </div>
     
      </div>
      <h4 className="titel text-[18px] font-bold mb-[10px]">User Friends</h4>
      <div className="followings flex flex-wrap justify-between ">
        <div className="following mb-4 flex flex-col ">
          <img src="assets/person/1.jpeg" alt=""  className="size-32 object-cover"className="size-32 object-cover" />
          <span className="username capitalize">john Carter</span>
        </div>
        <div className="following mb-4 flex flex-col ">
          <img src="assets/person/2.jpeg" alt=""  className="size-32 object-cover"/>
          <span className="username capitalize">john Carter</span>
        </div> 
         <div className="following mb-4 flex flex-col ">
          <img src="assets/person/3.jpeg" alt=""  className="size-32 object-cover"/>
          <span className="username capitalize">john Carter</span>
        </div> 
         <div className="following mb-4 flex flex-col ">
          <img src="assets/person/4.jpeg" alt=""  className="size-32 object-cover"/>
          <span className="username capitalize">john Carter</span>
        </div>  
        <div className="following mb-4 flex flex-col ">
          <img src="assets/person/5.jpeg" alt=""  className="size-32 object-cover"/>
          <span className="username capitalize">john Carter</span>
        </div> 
         <div className="following mb-4 flex flex-col ">
          <img src="assets/person/6.jpeg" alt=""  className="size-32 object-cover"/>
          <span className="username capitalize">john Carter</span>
        </div>

      </div>

   </>
  )
}
export default function Rightbar({profile}) {
   return (
     <div className="flex-[3.5] -z-40">
      <div className="rightWrapper py-[20px] px-0 ">
       
    {profile ? < ProfileRightBar/> : < HomeRightBar/>}
      </div>
     </div>
   )
 }
 

import Feed from "./Feed";
import Topbar from "./Topbar";
import Rightbar from "./Rightbar";
import SIdebar from "./SIdebar";
export default function Profile() {
       return (
        <div>
        <Topbar />
       <div className=" flex w-full profile  ">
         <SIdebar />
         <div className="profileRight flex-[9] ">
          <div className="profileRighttop">
            <div className="profilecover h-[320px] relative">
             <img src="assets/post/3.jpeg" alt=""  className="object-cover w-full h-[250px]"/>
             <img src="assets/person/7.jpeg" alt=""  className="object-cover size-[150px] rounded-full absolute left-0 right-0 m-auto top-[150px] border-[3px] border-solid border-white"/>
             </div>
             <div className="profileInfo flex flex-col items-center">
              <h4 className="profileinfoName text-[24px] capitalize">Hanan Abdulshikur</h4>
              <span className="font-semibold ">hellow my friends</span>
             </div>

          </div>
          <div className="profileRightBottum flex ">

         <Feed />
         <Rightbar profile/>
         </div>

         </div>
        
     </div>
     </div>
       )
     }
     
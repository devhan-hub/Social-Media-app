import Feed from "./Feed";
import Topbar from "./Topbar";
import Rightbar from "./Rightbar";
import SIdebar from "./SIdebar";
function Home() {
  return (
    <div>
       <Topbar />
      <div className=" flex w-full  ">
        <SIdebar />
        <Feed />
        <Rightbar />
    </div>
    </div>
  )
}

export default Home

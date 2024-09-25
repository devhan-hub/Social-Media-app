
import Feed from "./components/Feed";
import Topbar from "./components/Topbar";
import Rightbar from "./components/Rightbar";
import SIdebar from "./components/SIdebar";
function App() {
  return (
    <>
      <Topbar />
      <div className=" flex w-full  ">
        <SIdebar />
        <Feed />
        <Rightbar />
      </div>

    </>
  );
}

export default App;

import '.././index.css'
import { Person, Search, Chat, Notifications } from '@mui/icons-material';
export default function Topbar() {
  return (
    <div className='topbarContainer h-[50px] w-full bg-[#1877f2] flex items-center sticky top-0 '>
      <div className="topbarLeft flex-[3]">
        <span className="logo text-[24px] ml-[20px] text-white cursor-pointer ">RukSocial</span>
      </div>
      <div className="topbarCenter flex-[5]">
        <div className="searchbar w-full h-[30px] bg-white rounded-[30px] flex items-center">
        <Search className='text-[20px] m-[10px]'/>
        <input placeholder='search for friend , post or video' className="searchInput border-none width-[70%] outline-none " />
        </div>
      </div>
      <div className="topbarRight flex-[3] flex items-center justify-around text-white">
        <div className="topbarLinks">
            <span className="topbarLink m-[10px] text-[14px] cursor-pointer ">Homepage</span>
            <span className="topbarLink m-[10px] text-[14px] cursor-pointer">Timeline</span>
        </div>
        <div className="topbarIcons flex">
            <div className="topbarIconItem mr-[15px] relative ">
                <Person/>
                <span className="topbarIconBadge w-[15px] h-[15px] bg-red-500 text-white rounded-full absolute top-[-5px] right-[-5px] flex items-center justify-center text-[12px] " >1</span>
            </div>
            <div className="topbarIconItem mr-[15px] relative ">
                <Chat/>
                <span className="topbarIconBadge w-[15px] h-[15px] bg-red-500 text-white rounded-full absolute top-[-5px] right-[-5px] flex items-center justify-center text-[12px] " >2</span>
            </div>
            <div className="topbarIconItem mr-[15px] relative ">
                <Notifications/>
                <span className="topbarIconBadge w-[15px] h-[15px] bg-red-500 text-white rounded-full absolute top-[-5px] right-[-5px] flex items-center justify-center text-[12px] " >3</span>
            </div>
        </div>
        <img src="/assets/person/1.jpeg" className='topbarImage size-12 object-cover rounded-full' alt="profile" />
        </div>
    </div>
  )
}

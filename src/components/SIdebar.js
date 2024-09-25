import { RssFeed ,Chat , PlayCircleFilledOutlined ,Group ,Bookmark , HelpOutline, WorkOutline,Event ,School } from "@mui/icons-material"
import { Users } from "../dummyData"
export default function SIdebar() {
    return (
        <div className="flex-[3] h-[89vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-FF6F61 scrollbar-track-gray-50 sticky top-[50px] z-[9999]">
            <div className="p-[20px]">
                <ul className="p-0 m-0 list-none">
                    <li className="sidebarListItem flex items-center mb-10">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem flex items-center mb-10">
                        <Chat className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem flex items-center mb-10">
                        <PlayCircleFilledOutlined className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem flex items-center mb-10">
                        <Group className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem flex items-center mb-10">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem flex items-center mb-10">
                        <HelpOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem flex items-center mb-10">
                        <WorkOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem flex items-center mb-10">
                        <Event className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem flex items-center mb-10">
                        <School className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="w-[150px] border-none padding-[10px] rounded-[5px] font-bold bg-gray-400">Showmore</button>
                <hr className="my-[20px] mx-0"/>
                
                <ul className="p-0 m-0 list-none">
                
                  { Users.map((user)=>
                  (
                    <li key={user.id} className="flex items-center mb-[15px]"  >
                    <img src={user.profilePicture} alt="" className="size-12 rounded-full object-cover mr-[10px]"/>
                    <span >{user.username}</span>
                </li>
                  )) }
                   
                </ul>
            </div>
        </div>
    )
}

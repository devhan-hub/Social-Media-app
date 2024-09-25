import { PermMedia ,Label, Room ,EmojiEmotions } from "@mui/icons-material"
export default function Share() {
    return (
        <div className="share w-full h-[170px] rounded-[10px]  shadow-shadowhan" >

        <div className="p-[10px]">
            <div className="shareTop flex">
                 <img src="/assets/person/1.jpeg" alt="" className="size-[50px] rounded-full object-cover mr-[10px]"/>
                 <input placeholder="what is in your mind hanan" className="border-none outline-none w-[80%]" />
            </div>
            <hr className="m-[20px]"/>
            <div className="shareBott flex items-center justify-between ">
                <div className="option flex items-center  mx-[15px] ">
                    <span className="text-[15px] font-bold">Photo/Video</span>
                    <PermMedia htmlColor="tomato" className="text-[18px]"/>
                </div>
                <div className="option flex items-center  mx-[15px] ">
                    <span className="text-[15px] font-bold">Tag</span>
                    <Label htmlColor="blue" className="text-[18px]"/>
                </div>
                <div className="option flex items-center  mx-[15px] ">
                    <span className="text-[15px] font-bold">Location</span>
                    <Room htmlColor="green" className="text-[18px]"/>
                </div>
                <div className="option flex items-center  mx-[15px] ">
                    <span className="text-[15px] font-bold">Fealing</span>
                    <EmojiEmotions htmlColor="goldenrod" className="text-[18px]"/>
                </div>
                <button  className=" border-none p-[7px] rounded-[5px] font-bold bg-green-700 text-white mr-[20px] cursor-pointer">Share</button>

            </div>
        </div>
        </div>
    )
}

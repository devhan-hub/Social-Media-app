export default function Register() {
  return (
    <div className="login w-full h-[100vh]
     bg-[#f0f2f5] flex items-center justify-center">
      
      <div className="loginwrapper size-[70%] flex ">
        <div className="loginLeft flex-[1] flex justify-center flex-col ">
           <h3 className="text-[50px] font-bold text-[#1775ee] mb-[10px]">RukSocial</h3> 
           <span className="description text-[24px]">
            Connect with friends and the world around you on RukSocial
           </span>
        </div>
        <div className="loginRight flex-[1] flex justify-center flex-col">
            <div className="loginBox  h-[450px] p-[20px] bg-white rounded-[10px] flex flex-col justify-between  gap-2 " >
            <input placeholder="username" className="Email h-[50px] border-[2px]  rounded-[10px] border-solid border-gray-100 text-[18px] pl-[20px] outline-none"/>
            <input  placeholder="Email"  className="Email h-[50px] border-[2px]  rounded-sm border-solid border-gray-100 text-[18px] pl-[20px] outline-none"/>
                <input placeholder="Password" className="Email h-[50px] border-[2px]  rounded-[10px] border-solid border-gray-100 text-[18px] pl-[20px] outline-none"/>
                <input  placeholder="Password again"  className="Email h-[50px] border-[2px]  rounded-sm border-solid border-gray-100 text-[18px] pl-[20px] outline-none"/>
                <button className="h-[50px] rounded-md border-none bg-[#1775ee]  text-white text-[20px] font-bold">Sign Up</button>
                <button className="h-[50px] w-1/2 rounded-md border-none bg-[#42b72a] self-center text-white text-[20px] font-bold capitalize leading-5 ">Login into account</button>
            </div>
        </div>
      </div>
    </div>
  )
}

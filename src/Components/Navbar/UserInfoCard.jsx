import React, { useContext, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { ImUser } from "react-icons/im";
import { PiSignOutBold } from "react-icons/pi";
import { MdOutlineWbCloudy } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { AuthContext,UseClickOutSideClose } from "../../Common/FilePaths";
import { THEME_LIGHT } from "../../Common/Constants";

export default function UserInfoCard({isOpen,closeDlg,theme}) {

  if(!isOpen)
    return null;

  const { userId, setUserId, setUserFirstName, userFirstName } = useContext(AuthContext);
  const navigate = useNavigate();
    const newOptnDlgRef = UseClickOutSideClose(()=>closeDlg());

  const SignOut = () => {
    setUserId("");
    setUserFirstName("");
    localStorage.removeItem("token");
    navigate('/accountaccess');
  };
   
  return (
    <>
      <div ref={newOptnDlgRef} className={`absolute top-[60px] right-[20px] w-[350px] rounded-xl shadow-md p-4 select-none border-1 border-gray-300 ${(theme == THEME_LIGHT)?'light-dlg':'dark-dlg'}`}>
        <div className="text-center mb-6 relative">
          <div className="font-semibold cursor-default">{userId}</div>
          <span onClick={closeDlg} className="absolute top-0 right-0">
            <IoClose size={25} color={(theme == THEME_LIGHT)?'#827777':'whitesmoke'} />
          </span>
        </div>
        <div className="flex justify-center cursor-default mb-4">
          <div className="rounded-full h-[100px] w-[100px] bg-gray-300 shadow">
            <ImUser size={80} color="black" className="ml-2.5 mt-1" />
          </div>
        </div>
        <p className="text-center font-semibold text-xl">
          Hi, {userFirstName}!
        </p>
        <div onClick={SignOut} className={`${(theme == THEME_LIGHT)?'light-dlg-item':'dark-dlg-item'} h-[50px] rounded-3xl mt-6 p-3 font-semibold`}>
          <span className="mx-2">
            <PiSignOutBold size={20} className="inline" />
          </span>
          <span>Sign out</span>
        </div>
        <div className={`${(theme == THEME_LIGHT)?'light-dlg-item':'dark-dlg-item'} h-[50px] rounded-3xl mt-4 p-3 font-semibold`}>
          <span className="mx-2">
            <MdOutlineWbCloudy size={20} className="inline mt-[-2px]" />
          </span>
          <span>
            {"90"}% of {"15"} GB used
          </span>
        </div>
      </div>
    </>
  );
}


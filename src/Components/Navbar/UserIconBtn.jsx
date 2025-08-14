import React, { useState,useContext } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { THEME_LIGHT } from "../../Common/Constants";
import { UserInfoCard,ThemeContext} from "../../Common/FilePaths";

export default function UserIconBtn() {
    const [userInfoVsblty, setUserInfoVsblty] = useState(false);
    const {theme} = useContext(ThemeContext);

    return (
        <>
            <span onClick={()=>setUserInfoVsblty(!userInfoVsblty)} className="">
                <FaUserCircle size={30} color={`${(theme == THEME_LIGHT) ? "#4d4949" : "whitesmoke"}`} />
            </span>
            <UserInfoCard isOpen={userInfoVsblty} closeDlg={()=>setUserInfoVsblty(false)}/>
        </>
    )
}


import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { THEME_LIGHT } from "../../Common/Constants";
import { UserInfoCard} from "../../Common/FilePaths";

export default function UserIconBtn({ theme }) {
    const [userInfoVsblty, setUserInfoVsblty] = useState(false);

    const toggleUserInfo = () => {
        setUserInfoVsblty(!userInfoVsblty);
    };

    const closeUserInfoCard = () => {
        setUserInfoVsblty(false);
    };

    return (
        <>
            <span onClick={toggleUserInfo} className="relative">
                <FaUserCircle size={30} color={`${(theme == THEME_LIGHT) ? "#4d4949" : "whitesmoke"}`} />
            </span>
            <UserInfoCard isOpen={userInfoVsblty} closeDlg={closeUserInfoCard} theme={theme}/>
        </>
    )
}

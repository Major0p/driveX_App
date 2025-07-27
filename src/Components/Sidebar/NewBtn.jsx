import React, { useState } from 'react'
import { THEME_LIGHT } from '../../Common/Constants'
import { FaPlus } from "react-icons/fa6";
import { NewOptions } from '../../Common/FilePaths'

export default function NewBtn({ theme }) {
    const [upldDlgIsVsbl, setUpldDlgIsVsbl] = useState(false);

    const toggleUpldDlg = () => {
        setUpldDlgIsVsbl(!upldDlgIsVsbl);
    };

    const closeUpldDlg = () => {
        setUpldDlgIsVsbl(false);
    };
    return (
        <div onClick={toggleUpldDlg} className={`${(theme == THEME_LIGHT) ? ' hover:bg-gray-200' : 'dark-dlg-item'} w-35 p-5 shadow-lg rounded-3xl relative`}>
            <span className=''><FaPlus size={30} className='inline' /></span>
            <span className='text-xl font-semibold ml-4'>New</span>
            <NewOptions theme={theme} isOpen={upldDlgIsVsbl} closeDlg={closeUpldDlg} />
        </div>
    )
}

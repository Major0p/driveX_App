import React, { useState, useContext } from 'react'
import { THEME_LIGHT } from '../../Common/Constants'
import { FaPlus } from "react-icons/fa6";
import { NewOptions, ThemeContext, CreateNewFolderDlg } from '../../Common/FilePaths'

export default function NewBtn() {
    const { theme } = useContext(ThemeContext);
    const [upldDlgIsVsbl, setUpldDlgIsVsbl] = useState(false);
    const [createFolderIsOpen, setCreateFolderIsOpen] = useState(false);

    const toggleUpldDlg = (e) => {
        e.preventDefault();
        setUpldDlgIsVsbl(!upldDlgIsVsbl);
    };

    const closeUpldDlg = () => {
        setUpldDlgIsVsbl(false);
    };

    const createFolderOkCallback = (folderName) => {
        console.log(folderName);
        setCreateFolderIsOpen(false);
    };

    const createFolderCancelCallBack = () => {
        setCreateFolderIsOpen(false);
    };

    const showCreateFolderDlg = ()=>{
        setCreateFolderIsOpen(true);
    };

    return (
        <>
            <div onClick={(e)=>toggleUpldDlg(e)} className={`${(theme == THEME_LIGHT) ? ' hover:bg-gray-200' : 'dark-dlg-item'} w-35 p-5 shadow-lg rounded-3xl relative`}>
                <span className=''><FaPlus size={30} className='inline' /></span>
                <span className='text-xl font-semibold ml-4'>New</span>
                <NewOptions isOpen={upldDlgIsVsbl} closeDlg={closeUpldDlg} createFolderCallback={showCreateFolderDlg} setUpldDlgIsVsbl={setUpldDlgIsVsbl}/>
            </div>
            <CreateNewFolderDlg isOpen={createFolderIsOpen} ok={createFolderOkCallback} cancel={createFolderCancelCallBack} />
        </>
    )
}

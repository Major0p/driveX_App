import React, { useState, useContext, useEffect } from 'react'
import { THEME_LIGHT } from '../../Common/Constants'
import { NewOptions, ThemeContext, CreateNewFolderDlg,AuthContext } from '../../Common/FilePaths'
import {createNewFolder} from '../../API/CommonRequests'
import { FaPlus } from "react-icons/fa6";

export default function NewBtn() {
    const { theme } = useContext(ThemeContext);
    const {userId} = useContext(AuthContext);
    const [upldDlgIsVsbl, setUpldDlgIsVsbl] = useState(false);
    const [createFolderIsOpen, setCreateFolderIsOpen] = useState(false);
    const [files, setFiles] = useState(null);

    const createFolderOkCallback = async (folderName) => {
        setCreateFolderIsOpen(false);
        const res = await createNewFolder(folderName,"HOME");
    };

    const onFileInptChange = (files)=>{
        console.log(files);
        setFiles(files);
        setUpldDlgIsVsbl(false);
    };

    return (
        <>
            <div onClick={()=>setUpldDlgIsVsbl(true)} className={`${(theme == THEME_LIGHT) ? ' hover:bg-gray-200' : 'dark-dlg-item'} w-35 p-5 shadow-lg rounded-3xl relative`}>
                <span className=''><FaPlus size={30} className='inline' /></span>
                <span className='text-xl font-semibold ml-4'>New</span>
                <NewOptions isOpen={upldDlgIsVsbl} closeDlg={()=>setUpldDlgIsVsbl(false)} openCreateFolder={()=>setCreateFolderIsOpen(true)} onFileInptChange={onFileInptChange}/>
            </div>
            <CreateNewFolderDlg isOpen={createFolderIsOpen} ok={createFolderOkCallback} cancel={()=>setCreateFolderIsOpen(false)} />
        </>
    )
}



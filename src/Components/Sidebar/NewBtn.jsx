import React, { useState, useContext, useEffect } from 'react'
import { THEME_LIGHT } from '../../Common/Constants'
import {GetTokenFromLocalStorage} from '../../Common/Utils'
import { NewOptions, ThemeContext, CreateNewFolderDlg,AuthContext } from '../../Common/FilePaths'
import {API_URLS} from '../../API/URLs'
import { FaPlus } from "react-icons/fa6";

export default function NewBtn() {
    const { theme } = useContext(ThemeContext);
    const {userId} = useContext(AuthContext);
    const [upldDlgIsVsbl, setUpldDlgIsVsbl] = useState(false);
    const [createFolderIsOpen, setCreateFolderIsOpen] = useState(false);
    const [files, setFiles] = useState(null);

    const createFolderOkCallback = async (folderName) => {
        setCreateFolderIsOpen(false);
        const res = await createFolderRequest(API_URLS.CREATEFOLDER,userId,folderName,"HOME");
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
                <NewOptions isOpen={upldDlgIsVsbl} closeDlg={()=>setUpldDlgIsVsbl(false)} openCreateFolder={()=>setCreateFolderIsOpen(true)} onFileInptChange={()=>onFileInptChange}/>
            </div>
            <CreateNewFolderDlg isOpen={createFolderIsOpen} ok={()=>createFolderOkCallback} cancel={()=>setCreateFolderIsOpen(false)} />
        </>
    )
}


async function createFolderRequest(url, userId, folderName, parentId) {
    let token = GetTokenFromLocalStorage();
    let reqObj = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            userId: userId,
            name: folderName,
            parentId: parentId,
        })
    };
    let res = await fetch(url, reqObj);

    if (!res.ok)
        return null;

    let resObj = await res.json();
    console.log(reqObj);
}


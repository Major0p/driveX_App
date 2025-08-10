import React, { useContext, useRef, useState } from 'react'
import { MdOutlineCreateNewFolder, MdUploadFile } from "react-icons/md";
import { THEME_LIGHT } from '../../Common/Constants';
import { ThemeContext,useClickOutSideClose } from '../../Common/FilePaths'

export default function NewOptions({ isOpen, closeDlg,openCreateFolder,onFileInptChange }) {
    if (!isOpen)
        return null;
    
    const newOptnDlgRef = useClickOutSideClose(()=>closeDlg());
    const { theme } = useContext(ThemeContext);
    const fileInput = useRef(null);
    
    const createFolderClk = (e)=>{
        e.preventDefault();
        closeDlg();
        openCreateFolder();
    };

    const uploadFileClk = (e)=>{
        e.preventDefault();
        fileInput.current.value = '';
        fileInput.current.click();
    };

    return (
        <>
            <input type="file" className="sr-only" ref={fileInput} onChange={(e)=>onFileInptChange(e.target.files)}/>

            <div ref={newOptnDlgRef} className={`${(theme == THEME_LIGHT) ? 'white' : 'dark-dlg'} w-[200px] border border-gray-300 shadow-xl rounded-lg bg-white py-3 absolute top-0 left-0`}>
                <div onClick={(e)=>createFolderClk(e)} className={`${(theme == THEME_LIGHT) ? 'white' : 'dark-dlg-item'} hover:bg-gray-200 font-semibold p-2`}>
                    <span><MdOutlineCreateNewFolder size={20} className='inline' /></span>
                    <span className='ml-2'>Create Folder</span>
                </div>
                <div className='h-[1px] bg-gray-700 my-2' />
                <div onClick={(e)=>uploadFileClk(e)} className={`${(theme == THEME_LIGHT) ? 'white' : 'dark-dlg-item'} hover:bg-gray-200 p-2`}>
                    <span><MdUploadFile size={20} className='inline' /></span>
                    <span className='ml-2'>Upload File</span>
                </div>
            </div>
        </>
    )
}


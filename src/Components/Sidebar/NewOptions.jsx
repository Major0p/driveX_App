import React from 'react'
import { MdOutlineCreateNewFolder,MdUploadFile } from "react-icons/md";
import { THEME_LIGHT } from '../../Common/Constants';

export default function NewOptions({theme,isOpen,closeDlg}) {

    if(!isOpen)
        return null;

    const createFolderClk = ()=>{
        
        closeDlg();
    };

  return (
    <div onClick={closeDlg} className={`${(theme == THEME_LIGHT)?'white':'dark-dlg'} w-[200px] border border-gray-300 shadow-xl rounded-lg bg-white py-3 absolute top-0 left-0`}>
        <div onClick={createFolderClk} className={`${(theme == THEME_LIGHT)?'white':'dark-dlg-item'} hover:bg-gray-200 font-semibold p-2`}>
            <span><MdOutlineCreateNewFolder size={20} className='inline'/></span>
            <span className='ml-2'>Create Folder</span>
        </div>
        <div className='h-[1px] bg-gray-700 my-2'/>
        <div onClick={createFolderClk} className={`${(theme == THEME_LIGHT)?'white':'dark-dlg-item'} hover:bg-gray-200 p-2`}>
            <span><MdUploadFile size={20} className='inline'/></span>
            <span className='ml-2'>Upload File</span>
        </div>
    </div>
  )
}


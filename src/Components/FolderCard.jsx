import React from 'react'
import { FaRegFolderClosed  } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function FolderCard({folderInfo}) {
  return (
      <>
        <div className={`w-[200px] h-[50px] rounded-2xl light-folder-card flex items-center px-4`}>
          <span className='float-left'><FaRegFolderClosed  size={20} color='#f1cd0d'/></span>
          <span className='inline-block w-[125px] px-2' title={folderInfo.Name}>{folderInfo.Name}</span>
          <span className='float-right'><BsThreeDotsVertical size={20}/></span>
        </div>
      </>
  )
}
